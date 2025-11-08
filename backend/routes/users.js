const express = require('express');
const router = express.Router();

// Example route – list all users
router.get('/', (req, res) => {
  res.json({ message: 'User routes working ✅' });
});

module.exports = router;
