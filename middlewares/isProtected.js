const jwt =  require('jsonwebtoken');



const protected = async (req, res, next) => {
    const cookies  = req.headers.cookie ? req.headers.cookie : undefined;
    const cookiesArray = cookies ? cookies.split('=') : undefined;
    const token = cookiesArray ? cookiesArray[cookiesArray.indexOf('token')+1] : null
    if(!token){
       return res.status(403).redirect('/login');
    }
    try {
        const tokenVerified = jwt.verify(token,process.env.SECRETKEY)
        if(tokenVerified.exp > Math.floor(Date.now()/1000)){
            return next()
        }
        res.status(403).redirect('/login')
    } catch (error) {
        console.log(error)
    }
}

module.exports = protected
