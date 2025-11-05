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
    { name: 'T-Shirt', description: 'Cotton tee', price: 399, stock: 20 },
    { name: 'Mug', description: 'Ceramic mug', price: 199, stock: 50 },
    { name: 'Notebook', description: 'A5 notebook', price: 149, stock: 100 }
  ]);
  console.log('Seeded');
  process.exit();
})();
