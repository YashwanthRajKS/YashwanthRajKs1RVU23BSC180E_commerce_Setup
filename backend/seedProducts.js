// backend/seedProducts.js
require('dotenv').config(); // ✅ must be the first line

const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Product = require('./models/Product');

const seedProducts = async () => {
  try {
    // Connect to DB using MONGO_URI from .env
    await connectDB();

    // Delete old data
    await Product.deleteMany();

    // Insert sample data
    const products = [
      { name: 'Apple AirPods Pro', price: 249, stock: 25, image: '/images/airpods.jpg' },
      { name: 'Fitbit Charge 6', price: 159, stock: 40, image: '/images/fitbit.jpg' },
      { name: 'Sony WH-1000XM5', price: 399, stock: 15, image: '/images/sony.jpg' },
      { name: 'iPhone 15 Pro', price: 999, stock: 10, image: '/images/iphone.jpg' },
    ];

    await Product.insertMany(products);
    console.log('✅ Products seeded successfully!');
    process.exit();
  } catch (error) {
    console.error('❌ Seeding error:', error.message);
    process.exit(1);
  }
};

seedProducts();
