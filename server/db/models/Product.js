const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  species: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue: "Details information come soon..."
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://st2.depositphotos.com/1001248/8423/v/950/depositphotos_84238526-stock-illustration-pets-shop.jpg"
  }
})

module.exports = Product
