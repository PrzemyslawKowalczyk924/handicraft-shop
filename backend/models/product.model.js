const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  email: { type: String },
  author: { type: String },
  status: { type: String },
  title: { type: String, require: true },
  text: { type: String },
  photo: { type: String, require: true },
  price: { type: Number, require: true },
  phone: { type: String },
  location: { type: String },
  addres: { type: String },
  category: { type: String }
});

module.exports = mongoose.model('Product', productSchema);
