const express = require('express');
const router = express.Router();
const { getAll, create, addReview, update, remove } = require('../controllers/productController');
const { verifyToken } = require('../middleware/auth');
const isAdmin = require('../middleware/admin');

// Public
router.get('/', getAll);
router.post('/:id/review', addReview);

// Protected - admin only
router.post('/', verifyToken, isAdmin, create);
router.put('/:id', verifyToken, isAdmin, update);
router.delete('/:id', verifyToken, isAdmin, remove);

module.exports = router;
