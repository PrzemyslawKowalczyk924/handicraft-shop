const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  author: { type: String },
  created: { type: Date },
  updated: { type: Date },
  status: { type: String },
  title: { type: String },
  text: { type: String },
  photo: { type: String },
  price: { type: Number },
  phone: { type: String },
  location: { type: String },
  addres: { type: String },
  email: { type: String },
  category: { type: String }
});

module.exports = mongoose.model('Product', productSchema);
