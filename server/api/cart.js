const router = require("express").Router();
const { filter } = require("compression");
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
    const newOrder = await Order.create({ userId: req.body.userId });

    const orderDetail = req.body.orderDetail;
    orderDetail.orderId = newOrder.id;

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
    const activeOrderDetails = await Order.findAll({
      where: {
        userId: req.params.id,
        isCart: true,
      },
      include: Product,
    });
    const products = activeOrderDetails[0].products;
    const newProduct = req.body.orderDetail;
    newProduct.orderId = activeOrderDetails[0].id;
    const oldProduct = products.filter((product) => {
      if (product.id === newProduct.productId) {
        return product;
      }
    });
    if (oldProduct.length) {
      const productNeedsUpdate = await Order_Products.findAll({
        where: {
          orderId: newProduct.orderId,
          productId: newProduct.productId,
        },
      });
      newProduct.singleProductTotalQuantity +=
        productNeedsUpdate[0].singleProductTotalQuantity;

      newProduct.singleProductTotalPrice +=
        productNeedsUpdate[0].singleProductTotalPrice;
      await productNeedsUpdate[0].update(newProduct);
    } else {
      await Order_Products.create(newProduct);
    }
    // if we want to edit the quantity we need to check if the productId is an id is already in use.
    // Then we use update method.

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

router.put("/checkout/:id", async (req, res, next) => {
  try {
    const currentCart = await Order.findAll({
      where: {
        userId: req.params.id,
        isCart: true,
      },
    });
    currentCart.isCart = false;
    const updatedCart = await currentCart[0].update(currentCart);

    res.json(updatedCart);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id/:productId", async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: { userId: req.params.id, isCart: true },
    });
    const product = await Order_Products.findAll({
      where: {
        productId: req.params.productId,
        orderId: order.id,
      },
    });
    await product[0].destroy();
    res.json(product);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
