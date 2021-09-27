const router = require("express").Router();
const {
  models: { Order, Product },
} = require("../db");

router.get("/:id", async (req, res, next) => {
  try {
    const activeOrderDetails = await Order.findAll({
      where: {
        userId: req.params.id,
        isCart: true
      },
      include: Product
    })
    res.json(activeOrderDetails)
  } catch (err) {
    next(err);
  }
});

module.exports = router;
