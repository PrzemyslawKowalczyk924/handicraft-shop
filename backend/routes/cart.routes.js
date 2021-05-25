const express = require('express');
const router = express.Router();

const Cart = require('../models/cart.model');

router.get('/cart', async (req, res) => {
  try {
    const result = await Cart
      .find()
      .select('chossenProducts email author location phone')
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
  console.log('req.body', req.body);
  const { chossenProducts, price, author, email, phone, location } = req.body;
  //const { author, email, phone, location } = req.fields;
  try {
    const newCart = new Cart({ 
      chossenProducts: chossenProducts,
      price: price, 
      author: author, 
      email: email,
      phone: phone, 
      location: location });
    await newCart.save();
    res.json(newCart);
  }
  catch(err) {
    res.status(500).json(err);
  }
});


module.exports = router;
