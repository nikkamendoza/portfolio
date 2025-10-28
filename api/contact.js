const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD
  }
});

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
    return;
  }

  try {
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      res.status(400).json({ success: false, error: 'All fields are required' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({ success: false, error: 'Please provide a valid email address' });
      return;
    }

    const toOwner = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `Portfolio Contact Form - Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`
    };

    await transporter.sendMail(toOwner);

    const toSender = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Nikka Mendoza',
      text: `Hi ${name},\n\nThanks for your message. I will get back to you within 24 hours.\n\n— Nikka`
    };

    await transporter.sendMail(toSender);

    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    console.error('Contact API error:', err.message);
    res.status(500).json({ success: false, error: 'Failed to send message. Please try again later.' });
  }
};


