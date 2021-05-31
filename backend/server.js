const express = require('express');
const cors = require('cors');
const path = require('path');
const connectToDB = require('./db');

const productsRoutes = require('./routes/products.routes');
const cartRoutes = require('./routes/cart.routes');

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// add routes
//app.use('/api', require('./routes/products.routes'));

/* API ENDPOINTS */
app.use('/api', productsRoutes);
app.use('/api', cartRoutes);

/* API ERROR PAGES */
app.use('/api', (req, res) => {
  res.status(404).send({ product: 'Not found...' });
});

/* REACT WEBSITE */
app.use(express.static(path.join(__dirname, '../build')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

// connect to DB
connectToDB();

/* START SERVER */
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('Server is running on port: '+port);
});
