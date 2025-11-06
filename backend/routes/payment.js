const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { amount, method } = req.body;
  if (!amount) return res.status(400).json({ message: 'Amount required' });
  // simulate
  res.json({ message: 'Payment success', transactionId: Date.now() });
});

module.exports = router;
