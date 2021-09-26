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
    allowNull: true,
    defaultValue: "Details information come soon..."
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://cdn.dribbble.com/users/1044993/screenshots/12436018/media/4af5b5c62eba141322e11e2747a1d9fd.png?compress=1&resize=1600x1200"
  }
})

module.exports = Product
