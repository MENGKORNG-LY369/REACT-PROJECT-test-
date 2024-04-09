const express = require('express');
const cors = require('cors');

const HomeRouter = require('./Router/HomeRoute');
const RestaurantRouter = require('./Router/RestaurantRoute');
const AdminRouter = require('./Router/AdminRoute');
const DeliveryRouter = require('./Router/DeliveryRoute');

const app = express();
const port = 8000;

app.use(cors());

// Home routes
app.use('/', HomeRouter);

// Restaurant routes
app.use('/', RestaurantRouter);

// Admin routes
app.use('/', AdminRouter);

// Delivery routes
app.use('/', DeliveryRouter);


app.listen(port, (req, res) => console.log(`App listening on: http://localhost:${port}`));