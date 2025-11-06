const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  user: { type: String },
  rating: { type: Number },
  comment: { type: String }
}, { timestamps: true });

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  description: { type: String },
  image: { type: String, default: 'images/default.jpg' },
  reviews: [reviewSchema]
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
