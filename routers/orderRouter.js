const express = require('express');
const { Order } = require('../models/order');
const authorize = require('../middlewares/authorize');

const router = express.Router();

const newOrder = async (req, res) => {
    const order = new Order(req.body);
    try {
        await order.save();
        return res.status(201).send("Order Placed Succesfully!");
    } catch (err) {
        return res.status(400).send("Sorry Something Went Wrong!");
    }
}

const orderList = async (req, res) => {
    const orders = await Order.find({ userId: req.user.id_ });
    res.send(orders);
}

router.route('/')
    .get(authorize, orderList)
    .post(authorize, newOrder);

module.exports = router;