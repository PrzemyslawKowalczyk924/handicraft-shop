const express = require('express');
const cors = require('cors');
const path = require('path');
const connectToDB = require('./db');

const productsRoutes = require('./routes/products.routes');
const ordersRoutes = require('./routes/orders.routes');

/* SESSIONS */
const session = require('express-session');
const MongoStore = require('connect-mongo');

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// add routes
//app.use('/api', require('./routes/products.routes'));

// connect to DB
const startSession = async () => {
  const db = connectToDB();
  
  app.use(session({
    secret: 'shhh!',
    store: new MongoStore({ mongoUrl: 'mongodb://localhost:27017/handicraftShop' }),
  }));
}

startSession();

/* API ENDPOINTS */
app.use('/api', productsRoutes);
app.use('/api', ordersRoutes);


/* API ERROR PAGES */
app.use('/api', (req, res) => {
  res.status(404).send({ product: 'Not found...' });
});

/* REACT WEBSITE */
app.use(express.static(path.join(__dirname, '../build')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});


/* START SERVER */
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('Server is running on port: '+port);
});
