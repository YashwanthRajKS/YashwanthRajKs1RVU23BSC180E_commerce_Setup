const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/auth');
const { checkout } = require('../controllers/orderController');

router.post('/checkout', verifyToken, checkout);

module.exports = router;
