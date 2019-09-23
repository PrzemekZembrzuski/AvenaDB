const jwt =  require('jsonwebtoken');
const tokenExtract = require('../utils/tokenExtract');

const {encode} = require('../utils/message');

const isProtected = async (req, res, next) => {
    const encodedMsg = encode('zaloguj się')
    const token = tokenExtract(req)
    if(!token){
       return res.status(403).redirect(`/login?msg=${encodedMsg}`);
    }
    try {
        const tokenVerified = jwt.verify(token,process.env.JWTSECRET)
        if(tokenVerified.exp > Math.floor(Date.now()/1000)){
            return next()
        }
        return res.status(403).redirect(`/login?msg=${encodedMsg}`);
    } catch (error) {
        next({ message: error, status: 400 })
    }
}

module.exports = isProtected
