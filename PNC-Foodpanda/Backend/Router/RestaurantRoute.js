const express = require('express');
const RestaurantRouter = express.Router();
const connection = require('../Database/database');
const sql = [
    'SELECT * FROM categories;',
    'SELECT * FROM orders;',
    'SELECT * FROM users WHERE role_id = 3'
]
const result = [];

RestaurantRouter.get("/restaurant", (req, res) => {
    connection.query(sql[0], (err, data) => {
        if (err) return res.status(404).send({ status: "error", message: err.message});
        result.categories = data;
        connection.query(sql[1], (err, data) => {
            if (err) return res.status(404).send({ status: "error", message: err.message });
            result.orders = data;
            connection.query(sql[2], (err, data) => {
                if (err) return res.status(404).send({ status: "error", message: err.message });
                result.deliveries = data
                return res.status(202).send({ status: "success", data: {categories: result.categories, orders: result.orders, deliveries: result.deliveries} });
            })
        })
    })
})

module.exports = RestaurantRouter;