const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
<<<<<<< HEAD
    const authHeader = req.get("auth");
    console.log(authHeader);
    if (!authHeader) {
        const error = new Error('Not authenticated RIP.');
        error.statusCode = 401;
        throw error;
    }
    
    const token = authHeader.split(' ')[1];
=======
    const token = req.get('Authorization').split(' ')[1];  // req.get('Authorization') is undefined during testing -Chris
    
>>>>>>> 6628e1e5f7b456b5f7b58400ed3cd803126bc762
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, 'somesupersecretstring');
    } catch (err) {
        err.statusCode = 500;
        throw err;
    }
    if (!decodedToken) {
        const error = new Error('Not authenticated.');
        error.statusCode = 401;
        throw error;
    }
    req.userId = decodedToken.userId;
    next();
};