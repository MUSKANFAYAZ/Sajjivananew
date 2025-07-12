# Email and SMS Setup Guide

## Current Status
Right now, the app simulates sending emails and SMS (logs to console). To send real emails and SMS, follow these setup instructions:

## Option 1: EmailJS (Recommended for Email)

### Step 1: Sign up for EmailJS
1. Go to https://www.emailjs.com/
2. Create a free account
3. Verify your email

### Step 2: Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Copy your Service ID

### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

```html
Subject: {{subject}}

Hi,

{{message}}

Best regards,
{{from_name}}
```

4. Copy your Template ID

### Step 4: Get User ID
1. Go to "Account" → "API Keys"
2. Copy your Public Key (User ID)

### Step 5: Update Configuration
In `src/services/notificationService.js`, replace:
```javascript
const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_EMAILJS_SERVICE_ID', // Replace with your Service ID
  TEMPLATE_ID: 'YOUR_EMAILJS_TEMPLATE_ID', // Replace with your Template ID
  USER_ID: 'YOUR_EMAILJS_USER_ID' // Replace with your Public Key
};
```

## Option 2: SMS Services

### For India: TextLocal (Free tier available)
1. Go to https://www.textlocal.in/
2. Sign up for free account
3. Get API key
4. Update `sendSMSViaAPI` function in `notificationService.js`

### For International: Twilio (Paid but reliable)
1. Go to https://www.twilio.com/
2. Sign up and get trial credits
3. Get Account SID and Auth Token
4. Update SMS function

## Option 3: Alternative Email Services

### SendGrid
1. Go to https://sendgrid.com/
2. Create free account (100 emails/day)
3. Get API key
4. Replace EmailJS with SendGrid

### Mailgun
1. Go to https://www.mailgun.com/
2. Create account
3. Get API key
4. Replace EmailJS with Mailgun

## Quick Test Setup

For immediate testing, you can use these free services:

### Email: Gmail SMTP via EmailJS
1. Use Gmail account
2. Enable 2-factor authentication
3. Generate app password
4. Use EmailJS with Gmail service

### SMS: TextLocal (India)
1. Free 100 SMS per day
2. Simple API integration
3. Works with Indian numbers

## Testing

After setup:
1. Place a test order
2. Check your email inbox
3. Check your phone for SMS
4. Check browser console for logs

## Troubleshooting

### Email not sending:
- Check EmailJS configuration
- Verify template variables
- Check browser console for errors

### SMS not sending:
- Verify phone number format
- Check API key validity
- Ensure sufficient credits

### Common Issues:
1. CORS errors: Use EmailJS (handles CORS)
2. API limits: Check service quotas
3. Phone format: Use international format (+91 for India)

## Security Notes

⚠️ **Important**: Never commit API keys to version control
- Use environment variables
- Add `.env` to `.gitignore`
- Use `.env.example` for documentation

Example `.env` file:
```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_USER_ID=your_user_id
REACT_APP_SMS_API_KEY=your_sms_api_key
```

Then update the service to use:
```javascript
const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  USER_ID: process.env.REACT_APP_EMAILJS_USER_ID
};
``` 