const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/auth');
const { getCart, addToCart, removeFromCart, clearCart } = require('../controllers/cartController');

router.post('/add', verifyToken, addToCart);
router.get('/', verifyToken, getCart);
router.post('/remove', verifyToken, removeFromCart);
router.post('/clear', verifyToken, clearCart);

module.exports = router;
