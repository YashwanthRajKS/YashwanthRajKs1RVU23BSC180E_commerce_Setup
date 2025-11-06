const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.verifyToken = async (req, res, next) => {
  let token = req.headers['authorization'];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  if (token.startsWith('Bearer ')) token = token.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password');
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token is not valid' });
  }
};
