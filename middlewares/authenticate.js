const bcrypt = require('bcrypt');

const User = require('../models/Users');
const jwt = require('jsonwebtoken');

const {encode} = require('../utils/message');


const authenticate = async (req, res, next) => {
  try {
    const response = await User.findOne({ login: req.body.login });
    const authUser = response.password ? await bcrypt.compare(req.body.password, response.password) : false;
    if (authUser) {
      const token = jwt.sign({ userID: response._id }, process.env.JWTSECRET, { expiresIn: 3600 });
      res.cookie('token',token, {expires:new Date(Date.now()+3600000)})
      res.status(200).redirect('/')
    } else {
      const encodedMsg = encode('Zły login lub hasło')
      res.status(403).redirect(`/login?msg=${encodedMsg}`)
    }
  } catch (error) {
    next({ message: error, status: 400 })
  }

}


module.exports = authenticate