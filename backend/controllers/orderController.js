const Order = require('../models/Order');
const Cart = require('../models/Cart');

exports.checkout = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate('items.product');
    if (!cart || cart.items.length === 0) return res.status(400).json({ message: 'Cart empty' });

    const items = cart.items.map(i => ({ product: i.product._id, quantity: i.quantity }));
    const total = cart.items.reduce((s, i) => s + (i.product.price * i.quantity), 0);

    const order = new Order({ user: req.user._id, items, total, paymentMethod: 'pending', paidAt: new Date(), status: 'Placed' });
    await order.save();

    // clear cart
    cart.items = [];
    await cart.save();

    res.json({ message: 'Order placed', orderId: order._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
const Order = require('../models/Order');
const Cart = require('../models/Cart');

exports.checkout = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate('items.product');
    if (!cart || cart.items.length === 0) return res.status(400).json({ message: 'Cart empty' });

    const items = cart.items.map(i => ({ product: i.product._id, quantity: i.quantity }));
    const total = cart.items.reduce((s, i) => s + (i.product.price * i.quantity), 0);

    const order = new Order({ user: req.user._id, items, total, paymentMethod: 'pending', paidAt: new Date(), status: 'Placed' });
    await order.save();

    // clear cart
    cart.items = [];
    await cart.save();

    res.json({ message: 'Order placed', orderId: order._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
