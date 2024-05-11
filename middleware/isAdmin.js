const jwt = require('jsonwebtoken');

require('dotenv').config();
const isAdmin = (req, res, next) => {
    const token = req.cookies?.admin_token;
    

    // Check if the token exists
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized you have no access' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Check if the role is "user"
        if (decoded.Role !== 'Admin') {
            return res.status(403).json({ message: 'Forbidden' });
        }

        // If everything is valid, move to the next middleware
        req.admin=decoded;
         next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized you are not admin' });
    }
};

// Export the middleware function
module.exports = isAdmin;