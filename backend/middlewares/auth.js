// middleware to verify the user token
const jwt = require('jsonwebtoken');

const verifyUser = function (req, res, next) {
    let token = req.cookies['auth-token'];
    if(!token){
        token = req.headers['auth-token']; 
    }

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        console.log(error);
        return res.redirect('/users/login')
    }
}

module.exports = verifyUser;