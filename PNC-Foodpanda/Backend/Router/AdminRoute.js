const express = require('express');
const AdminRouter = express.Router();
const connection = require('../Database/database')

// Dashboard routes
AdminRouter.get("/admin", (req, res) => {
    const sql = [
        'SELECT * FROM categories LIMIT 6',
        'SELECT * FROM restaurants',
        `SELECT orders.order_id, orders.delivery_id, orders.order_status, orders.order_date, orders.restaurant_name, orders.deliver_date, 
            orders.restaurant_img, orders.address_id, users.first_name, users.last_name, users.email, users.profile, payments.payment_amount, 
            address.address_name, address.latitude,  address.longitude FROM users 
            INNER JOIN orders ON orders.customer_id = users.user_id 
            INNER JOIN payments ON users.user_id = payments.user_id
            INNER JOIN address ON address.address_id = orders.address_id 
            GROUP BY orders.order_id;`
    ];
    const result = [];
    connection.query(sql[0], (err, data) => {
        if (err) return res.status(404).send({status: 'error', message: err.message});
        result.categories = data;
        connection.query(sql[1], (err, data) => {
            if (err) return res.status(404).send({status: 'error', message: err.message});
            result.restaurants = data;
            connection.query(sql[2], (err, data) =>  {
                if (err) return res.status(404).send({ status: 'error', message: err.message});
                result.orders = data;
                return res.status(202).send({ status: "success", data: {categories: result.categories, restaurants: result.restaurants, orders: result.orders }});
            })
        })
    })
})

// Onwer routes
AdminRouter.get('/admin/owner', (req, res) => {
    const sql = [
        `SELECT * FROM users WHERE role_id = 2`
    ]
    result = [];
    connection.query(sql[0], (err, data) => {
        if (err) return res.status(404).send({ status: "error", message: err.message});
        result.owner = data;
        return res.status(202).send({ status: "ok", data: result.owner });
    });
})



module.exports = AdminRouter;