const Router = require('express').Router()


Router.get('/', (req, res) => {  
    res.status(204).clearCookie('token').end();
})



module.exports = Router