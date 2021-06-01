const express = require('express');
const router = express.Router();

const Order = require('../models/order.model');

router.get('/orders', async (req, res) => {
  try {
    const result = await Order
      .find()
      .select('chosenProducts email author location phone comment')
      .sort({created: -1});
    if(!result) res.status(404).json({ order: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.get('/orders/:id', async (req, res) => {
  try {
    const result = await Order
      .findById(req.params.id);
    if(!result) res.status(404).json({ order: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.post('/orders', async (req, res) => {
  console.log('req.body', req.body);
  const { chosenProducts, price, author, email, phone, location } = req.body;
  try {
    const newOrder = new Order({ 
      chosenProducts: chosenProducts,
      price: price, 
      author: author, 
      email: email,
      phone: phone, 
      location: location });
    await newOrder.save();
    res.json(newOrder);
  }
  catch(err) {
    res.status(500).json(err);
  }
});


module.exports = router;
