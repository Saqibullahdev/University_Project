// utils/email.js

const nodemailer = require('nodemailer');

// Create a Nodemailer transporter using SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com', // Replace with your Gmail email address
        pass: 'your-password' // Replace with your Gmail password or application-specific password
    }
});

// Function to send an email
async function sendEmail(recipient, subject, message) {
    try {
        // Send email
        await transporter.sendMail({
            from: 'your-email@gmail.com', // Replace with your Gmail email address
            to: recipient,
            subject: subject,
            text: message
        });
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

module.exports = {
    sendEmail
};
