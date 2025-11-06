require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Product = require('./models/Product');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce_db';
connectDB(MONGO_URI);

const products = [
  {
    name: 'Apple iPhone 15 Pro',
    price: 129999,
    stock: 10,
    description: 'Apple flagship smartphone with A17 Pro.',
    image: 'images/default.jpg'
  },
  {
    name: 'Sony WH-1000XM5 Headphones',
    price: 29999,
    stock: 15,
    description: 'Noise-cancelling premium headphones.',
    image: 'images/default.jpg'
  },
  {
    name: 'Fitbit Charge 6',
    price: 14999,
    stock: 25,
    description: 'Fitness tracker with heart rate and GPS.',
    image: 'images/default.jpg'
  },
  {
    name: 'Apple AirPods Pro',
    price: 24999,
    stock: 20,
    description: 'Noise-cancelling earbuds with MagSafe case.',
    image: 'images/default.jpg'
  }
];

async function seed() {
  try {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log('✅ Products added successfully!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Seed error', err);
    process.exit(1);
  }
}

seed();
