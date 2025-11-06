// run with: node seed.js
require('dotenv').config();
const connectDB = require('./config/db');
const User = require('./models/User');
const Product = require('./models/Product');

(async () => {
  await connectDB(process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce_db');
  await User.deleteMany({});
  await Product.deleteMany({});
  const admin = new User({ name: 'Admin', email: 'admin@example.com', password: 'admin123', role: 'admin' });
  await admin.save();
  await Product.create([
    { name: 'Apple AirPods', description: 'Wireless earbuds with charging case', price: 24999, stock: 15 },
    { name: 'Fitbit Versa', description: 'Smart fitness watch', price: 19999, stock: 25 },
    { name: 'iPhone 14', description: 'Latest iPhone model', price: 79999, stock: 10 },
    { name: 'Sony WH-1000XM4', description: 'Noise cancelling headphones', price: 29999, stock: 20 }
  ]);
  console.log('Seeded');
  process.exit();
})();
