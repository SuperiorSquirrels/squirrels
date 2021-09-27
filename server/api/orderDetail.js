const router = require("express").Router();
const {
  models: { Order_Products },
} = require("../db");

router.get("/", async (req, res, next) => {
  try {
    // const products = await Product.findAll();
    // res.json(products);
    const order = await Order_Products.findAll({
      where: {
        orderId: 2
      }
    })
    res.json(order)
  } catch (err) {
    next(err);
  }
});

module.exports = router;
