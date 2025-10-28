# Portfolio Backend Server

This is the backend server for the portfolio contact form functionality.

## Setup Instructions

### 1. Install Dependencies
```bash
cd server
npm install
```

### 2. Configure Environment Variables
1. Copy `env.example` to `.env`:
   ```bash
   cp env.example .env
   ```

2. Edit `.env` file and add your Gmail App Password:
   - Set `GMAIL_USER=name@gmail.com`
   - Set `GMAIL_APP_PASSWORD=your_16_character_app_password`

### 3. Generate Gmail App Password
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Navigate to Security → 2-Step Verification (enable if not already)
3. Go to App passwords
4. Select "Mail" and "Other (Custom name)"
5. Enter "Portfolio Contact Form" as the name
6. Copy the 16-character password and paste it in your `.env` file

### 4. Run the Server
```bash
# Development mode (with auto-restart)
npm run dev

# Production mode
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/health` - Health check

## Features

- ✅ Email sending via Gmail SMTP
- ✅ Rate limiting (5 requests per 15 minutes per IP)
- ✅ Input validation
- ✅ CORS configuration
- ✅ Security headers
- ✅ Confirmation emails to senders
- ✅ HTML and text email formats
- ✅ Error handling

## Security Features

- Rate limiting to prevent spam
- Input validation
- CORS protection
- Security headers via Helmet
- Environment variable protection
