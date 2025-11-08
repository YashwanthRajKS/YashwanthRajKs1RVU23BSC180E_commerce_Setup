const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');

// ✅ Create admin
router.post('/', async (req, res) => {
  try {
    const admin = new Admin(req.body);
    await admin.save();
    res.status(201).json(admin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ✅ Get all admins
router.get('/', async (req, res) => {
  const admins = await Admin.find();
  res.json(admins);
});

// ✅ Get single admin
router.get('/:id', async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id);
    if (!admin) return res.status(404).json({ message: 'Admin not found' });
    res.json(admin);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ✅ Update admin
router.put('/:id', async (req, res) => {
  try {
    const admin = await Admin.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(admin);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ✅ Delete admin
router.delete('/:id', async (req, res) => {
  try {
    await Admin.findByIdAndDelete(req.params.id);
    res.json({ message: 'Admin deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
