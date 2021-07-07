const express = require('express');
const Product = require('../models/product.model');
const router = express.Router();

router.get('/products', async (req, res) => {
  try {
    const result = await Product
      .find({status: 'published'})
      .select('title photo price created')
      .sort({created: -1});
    if(!result) res.status(404).json({ product: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.get('/products/:id', async (req, res) => {
  try {
    const result = await Product
      .findById(req.params.id);
    if(!result) res.status(404).json({ product: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.post('/products/add', async (req, res) => {
  const {email, author, status, title, text, price, phone, location} = req.fields;
  const photo = req.files.photo;
  const fileName = photo.path.split('/').slice(-1)[0];
  try {
    const newProduct = new Product({ 
      email: email, author: author, 
      status: status, 
      title: title, text: text, 
      photo: fileName, price: price, 
      phone: phone, location: location });
    await newProduct.save();
    res.json(newProduct);
  } 
  catch (err) {
    res.status(500).json(err);  
  }
});

module.exports = router;
