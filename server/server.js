const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security middleware
app.use(helmet());

// Rate limiting to prevent spam
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: {
    error: 'Too many contact form submissions from this IP, please try again later.'
  }
});

// Middleware
const allowedOrigins = [
  process.env.FRONTEND_URL,
  'http://localhost:3000',
  'http://127.0.0.1:3000'
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true); // allow same-origin/no-origin (curl, Postman)
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error('Not allowed by CORS'));
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
app.options('*', cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Create transporter for Gmail
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD // Use App Password, not regular password
    }
  });
};

// Contact form endpoint
app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'All fields are required'
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address'
      });
    }

    // Create transporter
    const transporter = createTransporter();

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Send to yourself
      replyTo: email, // Allow replying directly to sender
      subject: `Portfolio Contact Form - Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #333; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #333;">
            <h3 style="color: #555; margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>This message was sent from your portfolio contact form.</p>
            <p>You can reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Date: ${new Date().toLocaleString()}
        
        Message:
        ${message}
        
        ---
        This message was sent from your portfolio contact form.
        You can reply directly to this email to respond to ${name}.
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send confirmation email to the sender
    const confirmationMailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Nikka Mendoza',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank You for Your Message!</h2>
          
          <p>Hi ${name},</p>
          
          <p>Thank you for reaching out through my portfolio contact form. I've received your message and will get back to you within 24 hours.</p>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Your Message:</strong></p>
            <p style="white-space: pre-wrap; font-style: italic;">${message}</p>
          </div>
          
          <p>Best regards,<br>
          Nikka Mendoza</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>This is an automated confirmation email. Please do not reply to this message.</p>
          </div>
        </div>
      `,
      text: `
        Thank You for Your Message!
        
        Hi ${name},
        
        Thank you for reaching out through my portfolio contact form. I've received your message and will get back to you within 24 hours.
        
        Your Message:
        ${message}
        
        Best regards,
        Nikka Mendoza
        
        ---
        This is an automated confirmation email. Please do not reply to this message.
      `
    };

    await transporter.sendMail(confirmationMailOptions);

    res.json({
      success: true,
      message: 'Message sent successfully! I\'ll get back to you within 24 hours.'
    });

  } catch (error) {
    console.error('Error sending email:', error.message);
    res.status(500).json({
      success: false,
      error: 'Failed to send message. Please try again later.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV !== 'production') {
    console.error(err.stack); // show details only in dev
  } else {
    console.error('Error occurred in contact form:', new Date().toISOString());// safer logging
  }

  res.status(500).json({
    success: false,
    error: 'Something went wrong!'
  });
});


// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found'
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});
