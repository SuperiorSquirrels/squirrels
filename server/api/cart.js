const router = require("express").Router();
const {
  models: { Order, Product, Order_Products },
} = require("../db");


router.get("/:id", async (req, res, next) => {
  try {
    const activeOrderDetails = await Order.findAll({
      where: {
        userId: req.params.id,
        isCart: true,
      },
      include: Product,
    });

    res.json(activeOrderDetails);
  } catch (err) {
    next(err);
  }
});


router.post("/", async (req, res, next) => {

  try {
    const newOrder = await Order.create({ userId: req.body.userId});

    const orderDetail = req.body.orderDetail;
    orderDetail.orderId = newOrder.id

    await Order_Products.create(orderDetail);

    const activeOrderDetails = await Order.findAll({
      where: {
        userId: req.body.userId,
        isCart: true,
      },
      include: Product,
    });
    res.json(activeOrderDetails);
  } catch (error) {
    next(error);
  }
});

router.put("/update/:id", async (req, res, next) => {
  try {
    // we need to get the whole information of the user's active order
    const activeOrderDetails = await Order.findAll({
      where: {
        userId: req.params.id,
        isCart: true,
      },
      include: Product,
    });

    const wholeNewUpdate = await Order.findAll({
      where: {
        userId: req.params.id,
        isCart: true,
      },
      include: Product,
    });

    res.json(wholeNewUpdate);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const product = await Order_Products.findAll({
      where: {
        productId: req.body.productId,
        orderId: req.body.orderId,
      },
    });
    await product.destory();
    res.json(product);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
