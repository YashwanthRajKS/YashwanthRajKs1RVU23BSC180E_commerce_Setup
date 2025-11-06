const express = require('express');
const router = express.Router();
const { getAll, create, addReview } = require('../controllers/productController');

router.get('/', getAll);
router.post('/', create);
router.post('/:id/review', addReview);

module.exports = router;
