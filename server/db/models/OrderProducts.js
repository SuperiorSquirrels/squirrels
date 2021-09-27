const Sequelize = require('sequelize')
const db = require('../db')

const Order_Products = db.define('order_products', {
    singleProductTotalPrice: {
        type: Sequelize.INTEGER,
    },
    singleProductTotalQuantity: {
        type: Sequelize.INTEGER,
    },
})

module.exports = Order_Products
