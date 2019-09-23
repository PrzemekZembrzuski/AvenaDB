const Router = require('express').Router()
const isProtected = require('../middlewares/isProtected');
const jwt = require('jsonwebtoken');
const tokenExtract = require('../utils/tokenExtract');

const dbList = require('../firebird/dbList.json');

const firebirdDB = require('../firebird/database');

const User = require('../models/Users')

Router.get('/:rxID',isProtected, async (req,res,next)=>{
    try {
        const token = tokenExtract(req);
        const userId = jwt.decode(token).userID;
        const user = await User.findById(userId);
        const dbPath = dbList[user.pharmacy].path;
        const firebirdInstance = new firebirdDB(process.env.FIREBIRDSERVER,dbPath,process.env.FIREBIRDUSERNAME,process.env.FIREBIRDPASSWORD);
        await firebirdInstance.connect()
        const result = await firebirdInstance.query(req.params.rxID);
        firebirdInstance.disconnect()
        res.status(200).json({data:result})
    } catch (error) {
        next({ message: error, status: 400 })
    }

})


module.exports = Router