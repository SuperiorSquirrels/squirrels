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
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 10,
    validate: {
      min: 1
    }
  },
  stock: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
    validate: {
      min: 0
    }
  },
  animalType: {
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
  color: {
    type: Sequelize.STRING,
    allowNull: true
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "http://clipart-library.com/img/1934177.png"
  }
})

module.exports = Product
