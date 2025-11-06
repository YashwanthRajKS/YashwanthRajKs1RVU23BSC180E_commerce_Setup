const mongoose = require('mongoose');
const Product = require('./models/Product');
const connectDB = require('./config/db');

connectDB();

const seedProducts = async () => {
  try {
    await Product.deleteMany();

    const products = [
      {
        name: 'Apple AirPods Pro',
        price: 249,
        description: 'Noise-cancelling wireless earbuds with adaptive sound.',
        image: '/images/airpods.jpg',
        category: 'Electronics',
        countInStock: 25
      },
      {
        name: 'Fitbit Charge 6',
        price: 159,
        description: 'Fitness tracker with heart rate, sleep, and activity monitoring.',
        image: '/images/fitbit.jpg',
        category: 'Wearables',
        countInStock: 40
      },
      {
        name: 'Sony WH-1000XM5',
        price: 399,
        description: 'Premium wireless noise-cancelling headphones.',
        image: '/images/sony_wh1000xm5.jpg',
        category: 'Audio',
        countInStock: 15
      },
      {
        name: 'iPhone 15 Pro',
        price: 999,
        description: 'Apple flagship smartphone with A17 Pro chip and advanced camera.',
        image: '/images/iphone15pro.jpg',
        category: 'Mobiles',
        countInStock: 10
      }
    ];

    await Product.insertMany(products);
    console.log('✅ Products seeded successfully!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedProducts();
