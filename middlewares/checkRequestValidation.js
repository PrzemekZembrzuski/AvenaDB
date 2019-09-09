const { validationResult } = require('express-validator')


module.exports = (req,res,next)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return next({
            message:errors.array(),
            status:422
        })
    }
    next()
}