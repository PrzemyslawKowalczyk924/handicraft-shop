const express = require('express');
const router = express.Router();

const Order = require('../models/order.model');
const Client = require('../models/client.model');

router.get('/orders', async (req, res) => {
  try {
    const result = await Order
      .find()
      .select('chosenProducts client comment price')
      .sort({created: -1})
      .populate('client');
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
      .findById(req.params.id)
      .populate('client');
    if(!result) res.status(404).json({ order: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.post('/orders', async (req, res) => {
  console.log('req.body', req.body);
  const { chosenProducts, price, comment, author, email, phone, location } = req.body;
  try {
    const clientData = req.session.client || {author, phone, location, email};
    const newClient = new Client(clientData);
    await newClient.save();
    req.session.client = {...clientData};
    const newOrder = new Order({ 
      chosenProducts: chosenProducts,
      price: price, 
      comment: comment, 
      client: newClient._id,
    });
    await newOrder.save();
    res.json(newOrder);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

//in case of delete & edit, remember to remove client also

module.exports = router;
