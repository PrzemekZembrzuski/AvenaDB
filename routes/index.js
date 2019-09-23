const Router = require('express').Router()


const dashboard = require('./dashboard');
const login = require('./login');
const logout = require('./logout');
const rx = require('./rx');


Router.use('/',dashboard);
Router.use('/login',login);
Router.use('/logout',logout);
Router.use('/rx',rx)

module.exports = Router