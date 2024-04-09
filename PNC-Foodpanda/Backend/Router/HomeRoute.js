const express = require('express');
const HomeRouter = express.Router();
const connection = require('../Database/database');
const sql = [
    'SELECT * FROM foods',
    'SELECT * FROM categories',
    'SELECT * FROM food_info'
]
const result = [];

HomeRouter.get("/", (req, res) => {
    try {
        connection.query(sql[0], (err, data) => {
            if (err) return res.status(err).json({status: 'error', message: 'Something went wrong!'});
            result.food = data;
            
            connection.query(sql[1], (err, data) => {
                if (err) return res.status(err).json({status: 'error', message: 'Something went wrong!'});
                result.category = data

                connection.query(sql[2], (err, data) => {
                    if (err) return res.status(err).json({status: 'error', message: 'Something went wrong!'});
                    result.foodInfo = data
                    return res.status(202).send({ status: "success", data: {foods: result.food, categories: result.category, foodInfo: result.foodInfo}});
                })
            })
        })
    } catch (error) {
        return res.status(404).json({ status: "error", message: 'something went wrong!'});
    }
})

module.exports = HomeRouter;
