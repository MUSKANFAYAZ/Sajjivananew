import emailjs from 'emailjs-com';

// EmailJS Configuration
// You'll need to sign up at https://www.emailjs.com/ and get these credentials
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_d58crb8', // Replace with your EmailJS service ID
  TEMPLATE_ID: 'template_kozz1me', // Replace with your EmailJS template ID
  USER_ID: 'HkUZXJF9TyRmJqVTZ' // Replace with your EmailJS user ID
};

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.USER_ID);

export const sendEmail = async (toEmail, subject, content) => {
  try {
    // EmailJS template parameters - adjust these based on your template
    const templateParams = {
      to_email: toEmail,
      to_name: toEmail.split('@')[0], // Extract name from email
      subject: subject,
      message: content,
      from_name: 'Saajivana Team',
      reply_to: 'support@saajivana.com' // Optional: add reply-to email
    };

    console.log('📧 Attempting to send email with params:', templateParams);

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams
    );

    console.log('📧 Email sent successfully:', response);
    return { success: true, message: 'Email sent successfully', response };
    
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    
    // Log detailed error information
    if (error.text) {
      console.error('❌ EmailJS error details:', error.text);
    }
    
    // Fallback: Show email content in console for demo purposes
    console.log('📧 Email would be sent to:', toEmail);
    console.log('📧 Email subject:', subject);
    console.log('📧 Email content:', content);
    
    return { success: false, message: 'Email sending failed', error: error.text || error.message };
  }
};

export const sendSMS = async (phoneNumber, message) => {
  try {
    // For SMS, you can use services like:
    // 1. Twilio (paid but reliable)
    // 2. AWS SNS
    // 3. Free services like TextLocal (India)
    
    // For demo purposes, we'll simulate SMS sending
    // In production, replace this with actual SMS service integration
    
    console.log('📱 SMS would be sent to:', phoneNumber);
    console.log('📱 SMS content:', message);
    
    // Simulate SMS sending delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return { success: true, message: 'SMS sent successfully' };
    
  } catch (error) {
    console.error('❌ SMS sending failed:', error);
    return { success: false, message: 'SMS sending failed', error };
  }
};

// Alternative SMS service using a free API (for demo)
export const sendSMSViaAPI = async (phoneNumber, message) => {
  try {
    // This is an example using a free SMS API
    // You'll need to sign up and get an API key
    const API_KEY = 'YOUR_SMS_API_KEY';
    const API_URL = 'https://api.textlocal.in/send/'; // Example for India
    
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        apikey: API_KEY,
        numbers: phoneNumber,
        message: message,
        sender: 'SAJIVN'
      })
    });

    const result = await response.json();
    
    if (result.status === 'success') {
      console.log('📱 SMS sent successfully:', result);
      return { success: true, message: 'SMS sent successfully' };
    } else {
      throw new Error(result.message || 'SMS sending failed');
    }
    
  } catch (error) {
    console.error('❌ SMS API sending failed:', error);
    
    // Fallback to console logging
    console.log('📱 SMS would be sent to:', phoneNumber);
    console.log('📱 SMS content:', message);
    
    return { success: false, message: 'SMS sending failed', error };
  }
};

// Send order confirmation notifications
export const sendOrderConfirmation = async (order) => {
  const emailContent = `
Hi ${order.customer.name},

Your order has been placed successfully!

Order ID: ${order.orderId}
Total: ₹${order.total.toLocaleString()}
Items: ${order.items.length} products

We'll ship your order within 2-3 days.

Thanks,
Team Saajivana
  `.trim();

  const smsContent = `Hi ${order.customer.name}, your order ${order.orderId} for ₹${order.total.toLocaleString()} has been placed. We'll ship within 2-3 days. - Saajivana`;

  try {
    console.log('📧 Sending order confirmation email to:', order.customer.email);
    
    // Send email
    const emailResult = await sendEmail(
      order.customer.email,
      `Order Confirmation - ${order.orderId}`,
      emailContent
    );

    console.log('📱 Sending order confirmation SMS to:', order.customer.phone);
    
    // Send SMS
    const smsResult = await sendSMS(order.customer.phone, smsContent);

    return {
      email: emailResult,
      sms: smsResult
    };

  } catch (error) {
    console.error('Error sending order confirmation:', error);
    return {
      email: { success: false, error },
      sms: { success: false, error }
    };
  }
};

// Send immediate checkout notification
export const sendCheckoutNotification = async (phoneNumber) => {
  const message = `Hi! You're checking out from Saajivana. Please complete your order details. - Saajivana`;
  
  try {
    const result = await sendSMS(phoneNumber, message);
    return result;
  } catch (error) {
    console.error('Error sending checkout notification:', error);
    return { success: false, error };
  }
};

// Test function to verify EmailJS configuration
export const testEmailJS = async (testEmail = 'test@example.com') => {
  try {
    console.log('🧪 Testing EmailJS configuration...');
    console.log('📧 Service ID:', EMAILJS_CONFIG.SERVICE_ID);
    console.log('📧 Template ID:', EMAILJS_CONFIG.TEMPLATE_ID);
    console.log('📧 User ID:', EMAILJS_CONFIG.USER_ID);
    
    const testParams = {
      to_email: testEmail,
      to_name: 'Test User',
      subject: 'Test Email from Saajivana',
      message: 'This is a test email to verify EmailJS configuration is working correctly.',
      from_name: 'Saajivana Team',
      reply_to: 'support@saajivana.com'
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      testParams
    );

    console.log('✅ EmailJS test successful:', response);
    return { success: true, message: 'EmailJS test successful', response };
    
  } catch (error) {
    console.error('❌ EmailJS test failed:', error);
    if (error.text) {
      console.error('❌ Error details:', error.text);
    }
    return { success: false, message: 'EmailJS test failed', error: error.text || error.message };
  }
}; 