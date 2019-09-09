const Router = require('express').Router()


Router.get('/', (req, res) => {
    res.status(200).cookie('token',undefined).redirect('/login')
})



module.exports = Router