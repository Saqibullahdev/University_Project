const jwt = require('jsonwebtoken');

require('dotenv').config();
const isVerifyUser = (req, res, next) => {
    const token = req.cookies?.user_token;
    

    // Check if the token exists
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Check if the role is "user"
        if (decoded.Role !== 'User') {
            return res.status(403).json({ message: 'Forbidden' });
        }

        // If everything is valid, move to the next middleware
            req.user=decoded;
         next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
};

// Export the middleware function
module.exports = isVerifyUser;