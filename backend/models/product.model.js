const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  author: { type: String },
  created: { type: String },
  updated: { type: String },
  status: { type: String },
  title: { type: String, require: true },
  text: { type: String },
  photo: { type: String, require: true },
  price: { type: Number, require: true },
  phone: { type: String },
  location: { type: String },
  addres: { type: String },
  email: { type: String },
  category: { type: String }
});

module.exports = mongoose.model('Product', productSchema);
