// utils/passwordHash.js
const bcrypt = require('bcrypt');




// utils/jwtToken.js


module.exports = {
    generateToken
};


// utils/emailValidation.js
// utils/emailValidation.js

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@uetpeshawar\.edu\.pk$/;
    return emailRegex.test(email);
}

module.exports = {
    validateEmail
};



// utils/dataFormatting.js
function formatDate(date) {
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

module.exports = {
    formatDate
};


// utils/errorHandling.js
function createError(statusCode, message, errorCode) {
    const error = new Error(message);
    error.statusCode = statusCode;
    error.errorCode = errorCode;
    return error;
}

module.exports = {
    createError
};


// utils/authorization.js
function authorizeUser(userRole, allowedRoles) {
    return allowedRoles.includes(userRole);
}

module.exports = {
    authorizeUser
};


// utils/fileUpload.js
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

function saveUploadedFile(file) {
    try {
        const uniqueFileName = uuidv4() + path.extname(file.originalname);
        const uploadPath = path.join(__dirname, '..', 'uploads', uniqueFileName);
        fs.writeFileSync(uploadPath, file.buffer);
        return uniqueFileName;
    } catch (error) {
        console.error('Error saving uploaded file:', error);
        throw new Error('Error saving uploaded file');
    }
}

module.exports = {
    saveUploadedFile
};


// utils/pagination.js
function paginateData(data, page, limit) {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedData = data.slice(startIndex, endIndex);
    return paginatedData;
}

module.exports = {
    paginateData
};
