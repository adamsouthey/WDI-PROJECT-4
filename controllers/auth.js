const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');
const User = require('../models/user');

function register(req, res, next) {
  User
    .create(req.body)
    .then(user => {
      const token = jwt.sign({ userId: user.id, type: user.type }, secret, { expiresIn: '1hr' });

      return res.json({ message: `Welcome ${user.username}`, token, userId: user.id });
    })
    .catch(next);
}

function login(req, res, next) {
  User
    .findOne({ email: req.body.email })
    .then((user) => {
      if(!user || !user.validatePassword(req.body.password)) return res.status(401).json({ message: 'Unauthorized credentials provided' });

      const token = jwt.sign({ userId: user.id, type: user.type}, secret, { expiresIn: '1hr' });
      return res.json({ message: `Welcome back ${user.username}`, token, userId: user.id });
    })
    .catch(next);
}

module.exports = {
  register,
  login
};
