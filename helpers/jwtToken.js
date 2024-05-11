const jwt = require('jsonwebtoken');
require('dotenv').config();

function generateToken(payload) {
    try {
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
        return token;
    } catch (error) {
        console.error('Error generating JWT token:', error);
        throw new Error('Error generating JWT token');
    }
}

module.exports={
    generateToken
}