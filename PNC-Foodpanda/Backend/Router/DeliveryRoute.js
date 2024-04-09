const express = require('express');
const DeliveryRouter = express.Router();
const connection = require("../Database/database");
const sql = [
    `SELECT orders.order_id, orders.delivery_id, orders.order_status, orders.order_date, orders.restaurant_name, orders.deliver_date, 
        orders.restaurant_img, orders.address_id, users.first_name, users.last_name, users.email, users.profile, payments.payment_amount, 
        address.address_name, address.latitude,  address.longitude FROM users 
        INNER JOIN orders ON orders.customer_id = users.user_id 
        INNER JOIN payments ON users.user_id = payments.user_id
        INNER JOIN address ON address.address_id = orders.address_id`,
    `SELECT * FROM orders`
]
const results = [];

DeliveryRouter.get("/delivery", (req, res) => {
    try {
        connection.query(sql[0], (err, data) => {
            if (err) return res.status(404).send({ status: "errro", message: err.message });
            results.notifications = data;
            connection.query(sql[1], (err, data) => {
                if (err) return res.status(404).send({ status: "error", message: err.message });
                results.orders = data;
                return res.status(200).send({ status: "success", data: { notifications: results.notifications, orders: results.orders }})
            })
        })
    } catch (error) {
        
    }
})


module.exports = DeliveryRouter