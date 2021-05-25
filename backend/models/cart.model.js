const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  chossenProducts: { type: Object, require: true},
  author: { type: String, require: true },
  created: { type: Date },
  updated: { type: Date },
  status: { type: String },
  title: { type: String },
  text: { type: String },
  photo: { type: String },
  price: { type: Number },
  phone: { type: String, require: true },
  location: { type: String, require: true },
  addres: { type: String },
  email: { type: String, require: true },
  category: { type: String }
});

module.exports = mongoose.model('Cart', cartSchema);