const Router = require('express').Router()
const isProtected = require('../middlewares/isProtected');

Router.get('/',isProtected,(req, res) => {
    res.render('pages/dashboard')
})
module.exports = Router