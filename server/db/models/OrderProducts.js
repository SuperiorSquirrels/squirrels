const Sequelize = require('sequelize')
const db = require('../db')

const Order_Products = db.define('order_products', {
    isCart: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    }
})

module.exports = Order_Products