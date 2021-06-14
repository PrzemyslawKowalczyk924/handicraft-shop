const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  author: { type: String, require: true },
  phone: { type: String, require: true },
  location: { type: String, require: true },
  addres: { type: String },
  email: { type: String, require: true },
});

module.exports = mongoose.model('Client', clientSchema);