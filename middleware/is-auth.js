const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.get("auth");
    console.log(authHeader);
    if (!authHeader) {
        const error = new Error('Not authenticated (No auth header?).');
        error.statusCode = 401;
        throw error;
    }
    
    const token = authHeader.split(' ')[1];
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, process.env.SECRET_STRING);
    } catch (err) {
        err.statusCode = 500;
        throw err;
    }
    if (!decodedToken) {
        const error = new Error('Not authenticated.');
        error.statusCode = 401;
        throw error;
    }
    req.userId = decodedToken.userId; // The decoded user's ID
    next();
};