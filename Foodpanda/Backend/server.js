const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
const port = 9000;
const routes = require("./Routes/routes");

// mysql connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Foodpanda",
});

app.use(cors());

app.get("/", (req, res) => {
  return res.status(202).send({ message: "Welcome to Foodpanda" });
});


app.get("/foodpanda", (req, res) => {
    db.connect();
    const foods = `SELECT * FROM foods`;
    const cate = `SELECT * FROM categories`;
    const foodInfo = `SELECT * FROM food_info`;
    let data = [];
    
    db.query(foods, (err, result) => {
        if (err) return res.status(404).send(err.message);
        data.food = result;
        db.query(cate, (err, result) => {
            if (err) return res.status(404).send(err.message);
            data.cate = result;
            db.query(foodInfo, (err, result) => {
                if (err) return res.status(404).send(err.message);
                data.foodInfo = result;
                return res.status(202).send({status: "success", data: [{Food: data.food, Categories: data.cate, FoodInfo: data.foodInfo}]});
            })
        })
    })
});


app.listen(port, (req, res) => {
  console.log(`App is listening on port: http://localhost:${port}`);
});
