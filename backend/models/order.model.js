const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  chosenProducts: { type: Object, require: true},
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
  category: { type: String },
  comment: { type: String },
  quantity: { type: Number }
});

module.exports = mongoose.model('Order', orderSchema);