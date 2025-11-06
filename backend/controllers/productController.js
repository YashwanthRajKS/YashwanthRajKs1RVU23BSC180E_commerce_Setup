const Product = require('../models/Product');

exports.getAll = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.create = async (req, res) => {
  try {
    const { name, price, stock, description, image } = req.body;
    const product = new Product({ name, price, stock, description, image });
    await product.save();
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.addReview = async (req, res) => {
  try {
    const { user, rating, comment } = req.body;
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Not found' });
    product.reviews.push({ user, rating, comment });
    await product.save();
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Admin: update product
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, stock, description, image } = req.body;
    const product = await Product.findByIdAndUpdate(
      id,
      { name, price, stock, description, image },
      { new: true }
    );
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    console.error('Product update error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Admin: remove product
exports.remove = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    console.error('Product delete error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
