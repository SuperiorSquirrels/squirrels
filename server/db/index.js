//this is the access point for all things database related!

const db = require('./db')

const Product = require('./models/Product')
const User = require('./models/User')
const Order = require('./models/Order')
const Order_Products = require('./models/OrderProducts')

//associations could go here!
Order.belongsTo(User)
User.hasMany(Order)

Product.belongsToMany(Order, {through: Order_Products})
Order.belongsToMany(Product, {through: Order_Products})


module.exports = {
  db,
  models: {
    User,
    Product,
    Order,
    Order_Products
  },
}
