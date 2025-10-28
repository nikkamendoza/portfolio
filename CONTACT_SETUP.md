# Portfolio Contact Form - Full Setup Guide

This guide will help you set up a fully functional contact form that sends real emails to your Gmail account.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
cd ..
```

### 2. Set Up Gmail App Password

**IMPORTANT**: You need to generate a Gmail App Password (not your regular password).

1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Click on **Security** in the left sidebar
3. Enable **2-Step Verification** if not already enabled
4. Scroll down to **App passwords**
5. Click **App passwords**
6. Select **Mail** and **Other (Custom name)**
7. Enter "Portfolio Contact Form" as the name
8. Click **Generate**
9. Copy the 16-character password (e.g., `abcd efgh ijkl mnop`)

### 3. Configure Environment Variables

1. Navigate to the `server` folder:
   ```bash
   cd server
   ```

2. Copy the example environment file:
   ```bash
   cp env.example .env
   ```

3. Edit the `.env` file and update these values:
   ```env
   GMAIL_USER=name@gmail.com
   GMAIL_APP_PASSWORD=your_16_character_app_password_here
   PORT=5000
   FRONTEND_URL=http://localhost:3000
   NODE_ENV=development
   ```

### 4. Run the Application

**Option A: Run both frontend and backend together**
```bash
# From the root directory
npm run dev
```

**Option B: Run separately**
```bash
# Terminal 1 - Backend
cd server
npm run dev

# Terminal 2 - Frontend (from root directory)
npm start
```

### 5. Test the Contact Form

1. Open your browser to `http://localhost:3000`
2. Navigate to the Contact section
3. Fill out the form and submit
4. Check your Gmail inbox for the message
5. The sender will also receive a confirmation email

## 📧 How It Works

### Email Flow
1. **User submits form** → Frontend sends data to backend
2. **Backend receives data** → Validates and sends email to you
3. **You receive email** → Contains sender's message and contact info
4. **Sender gets confirmation** → Automated thank you email

### Email Features
- ✅ Professional HTML formatting
- ✅ Sender's contact information included
- ✅ Reply-to field set to sender's email
- ✅ Confirmation email sent to sender
- ✅ Rate limiting to prevent spam
- ✅ Input validation and error handling

## 🔧 Configuration Options

### Backend Server (`server/server.js`)
- **Port**: Change `PORT` in `.env` file
- **Rate Limiting**: Modify `max` requests per window in `server.js`
- **Email Templates**: Customize HTML templates in the `mailOptions`

### Frontend (`src/components/Contact.tsx`)
- **API Endpoint**: Change the fetch URL if using different port
- **Styling**: Modify Tailwind classes for different appearance
- **Form Fields**: Add/remove fields as needed

## 🛡️ Security Features

- **Rate Limiting**: 5 requests per 15 minutes per IP
- **Input Validation**: Email format and required field checks
- **CORS Protection**: Only allows requests from your frontend
- **Security Headers**: Helmet.js for additional security
- **Environment Variables**: Sensitive data stored securely

## 🚨 Troubleshooting

### Common Issues

**"Failed to send message"**
- Check if Gmail App Password is correct
- Ensure 2-Step Verification is enabled
- Verify `.env` file is in the `server` directory

**"Network error"**
- Make sure backend server is running on port 5000
- Check if frontend is trying to connect to correct URL
- Verify CORS settings in `server.js`

**"Too many requests"**
- Rate limiting is working (5 requests per 15 minutes)
- Wait 15 minutes or restart the server

### Debug Mode
To see detailed error logs, check the terminal where the backend server is running.

## 📁 File Structure

```
portfolio/
├── src/
│   └── components/
│       └── Contact.tsx          # Updated contact form
├── server/
│   ├── server.js                # Backend server
│   ├── package.json             # Backend dependencies
│   ├── .env                     # Environment variables (create this)
│   ├── env.example              # Environment template
│   └── README.md                # Backend documentation
├── package.json                 # Updated with dev scripts
└── README.md                    # This file
```

## 🎯 Next Steps

1. **Deploy Backend**: Consider deploying to Heroku, Vercel, or Railway
2. **Update Frontend**: Change API URL to production backend
3. **Add Features**: File uploads, different email templates, etc.
4. **Monitoring**: Add logging and monitoring for production use

## 📞 Support

If you encounter any issues:
1. Check the troubleshooting section above
2. Verify all environment variables are set correctly
3. Ensure both frontend and backend are running
4. Check browser console and server logs for errors

---

**Happy coding!** 🎉 Your contact form is now fully functional and will send real emails to your Gmail account.
