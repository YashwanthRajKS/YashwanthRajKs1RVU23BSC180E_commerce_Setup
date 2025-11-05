const Order = require('../models/Order');
const Cart = require('../models/Cart');
const Product = require('../models/Product');

exports.checkout = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate('items.product');
    if (!cart || cart.items.length === 0) return res.status(400).json({ message: 'Cart empty' });

    const items = cart.items.map(i => ({
      product: i.product._id,
      name: i.product.name,
      price: i.product.price,
      quantity: i.quantity
    }));
    const total = items.reduce((s, it) => s + it.price * it.quantity, 0);

    // Reduce product stock
    for (const it of cart.items) {
      const prod = await Product.findById(it.product._id);
      if (prod) {
        prod.stock = Math.max(0, prod.stock - it.quantity);
        await prod.save();
      }
    }

    const order = new Order({
      user: req.user._id,
      items,
      total,
      status: 'created',
      address: req.body.address || ''
    });
    await order.save();

    // Clear cart
    cart.items = [];
    await cart.save();

    res.status(201).json(order);
  } catch (err) { console.error(err); res.status(500).json({ message: 'Server error' }); }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).populate('items.product');
    res.json(orders);
  } catch (err) { res.status(500).json({ message: 'Server error' }); }
};
