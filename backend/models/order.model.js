const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  chosenProducts: { type: Object, require: true},
  client: { type: String, required: true, ref: 'Client' },
  price: { type: Number },
  comment: { type: String },
});

module.exports = mongoose.model('Order', orderSchema);