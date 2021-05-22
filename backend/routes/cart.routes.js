const express = require('express');
const router = express.Router();

const Cart = require('../models/cart.model');

router.get('/cart', async (req, res) => {
  try {
    const result = await Cart
      .find()
      .select('title photo price')
      .sort({created: -1});
    if(!result) res.status(404).json({ cart: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.get('/cart/:id', async (req, res) => {
  try {
    const result = await Cart
      .findById(req.params.id);
    if(!result) res.status(404).json({ cart: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.post('/cart', async (req, res) => {
  const { author, created, updated, status, title, text, price, phone, location } = req.fields;
  const photo = req.files.photo;
  const fileName = photo.path.split('/').slice(-1)[0];
  try {
    const newCart = new Cart({ 
      author: author, created: created, 
      updated: updated, status: status, 
      title: title, text: text, 
      photo: fileName, price: price, 
      phone: phone, location: location });
    await newCart.save();
    res.json(newCart);
  }
  catch(err) {
    res.status(500).json(err);
  }
});


module.exports = router;
