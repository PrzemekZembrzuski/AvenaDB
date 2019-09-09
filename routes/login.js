const Router = require('express').Router()
const authenticate = require('../middlewares/authenticate');
const isProtected = require('../middlewares/isProtected');

const checkRequestValidation = require('../middlewares/checkRequestValidation');
const { check } = require('express-validator');


Router.get('/', (req, res) => {
    const token = req.headers.cookie ? req.headers.cookie.includes('token') ? true : false : false  
    if(token){
       return res.status(200).redirect('/') 
    }
    res.render('pages/login')
})

Router.post('/',[check('login').exists({checkFalsy:true}),
                check('password').exists({checkFalsy:true}),
                checkRequestValidation,
                authenticate])


module.exports = Router