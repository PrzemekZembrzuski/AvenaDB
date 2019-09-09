const Router = require('express').Router()


const dashboard = require('./dashboard');
const login = require('./login');
const logout = require('./logout');

Router.use('/',dashboard);
Router.use('/login',login);
Router.use('/logout',logout);


module.exports = Router