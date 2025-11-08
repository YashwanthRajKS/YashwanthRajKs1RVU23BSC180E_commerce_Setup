require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ✅ Connect MongoDB
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce_db';
connectDB(MONGO_URI);

// ✅ Route Imports
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');
const orderRoutes = require('./routes/orders');
const paymentRoutes = require('./routes/payment');
const adminRoutes = require('./routes/admin');  // newly added admin routes
const userRoutes = require('./routes/users');  // new user get route

// ✅ Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/admin', adminRoutes);   // admin CRUD endpoint
app.use('/api/users', userRoutes);    // users GET endpoint

// ✅ Base route
app.get('/', (req, res) => res.send('🛍 E-commerce API is up and running 🚀'));

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
