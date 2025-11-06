const Order = require('../models/Order');
const Cart = require('../models/Cart');

// Checkout controller - creates an order from the user's cart
exports.checkout = async (req, res) => {
  try {
    // Find the cart for the current user and populate product info
    const cart = await Cart.findOne({ user: req.user._id }).populate('items.product');
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }

    // Prepare order items and total price
    const items = cart.items.map(i => ({
      product: i.product._id,
      quantity: i.quantity,
    }));

    const total = cart.items.reduce((sum, i) => sum + (i.product.price * i.quantity), 0);

    // Create a new order
    const order = new Order({
      user: req.user._id,
      items,
      total,
      paymentMethod: 'pending',
      paidAt: new Date(),
      status: 'Placed',
    });

    await order.save();

    // Clear the cart
    cart.items = [];
    await cart.save();

    res.json({ message: 'Order placed successfully', orderId: order._id });
  } catch (err) {
    console.error('Order Checkout Error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
