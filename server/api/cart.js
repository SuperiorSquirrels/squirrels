const router = require("express").Router();
const {
  models: { Order, Product, Order_Products },
  models,
} = require("../db");
const Order_Products = require("../db/models/OrderProducts");

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

router.post("/:id", async (req, res, next) => {
  try {
    const dummy = {
      isCart: true,
      userId: 2,
      products: [
        {
          id: 7,
          name: "plush dog agian",
          price: 40,
          stock: 4,
          animalType: "dog",
          description: "Details information come soon...",
          color: "Details information come soon...",
          imageUrl:
            "https://cdn.dribbble.com/users/1044993/screenshots/12436018/media/4af5b5c62eba141322e11e2747a1d9fd.png?compress=1&resize=1600x1200",
          order_products: {
            singleProductTotalPrice: 30,
            singleProductTotalQuantity: 3,
            productId: 7,
            orderId: 3,
          },
        },
      ],
    };

    const somethingElse = await Order.create({
      userId: dummy.userId,
      isCart: dummy.isCart,
    });

    // const products = await Order.create(dummy.products[0]);
    const products = await Order_Products.create({
      singleProductTotalPrice: 30,
      singleProductTotalQuantity: 3,
      productId: 7,
      orderId: 3,
    });

    res.json(products);
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

    // when we have a real frontEnd we will only use some parts of the request instead of the dummy data.
    const dummyOrder = {
      products: [
        {
          order_products: {
            singleProductTotalPrice: 80,
            singleProductTotalQuantity: 2,
            productId: 7,
            orderId: 1,
          },
        },
      ],
    };
    const dummyOrderProducts = {
      singleProductTotalPrice: 80,
      singleProductTotalQuantity: 2,
      productId: 7,
      orderId: 1,
    };

    // we need to filter to extract the correct product by productId
    const productIdShouldBeUpdate = activeOrderDetails[0].products.filter(
      (product) =>
        product.id === dummyOrder.products[0].order_products.productId
    )[0];

    // create the Order_Products table's instance that we can update
    const orderProducts = await Order_Products.findAll({
      where: {
        orderId: activeOrderDetails[0].id,
        productId: productIdShouldBeUpdate.id,
      },
    });

    // once we finished the frontEnd, we need to use part of req.body instead of below dummy data as the parameter of the update functions.
    await activeOrderDetails[0].update(dummyOrder);
    await orderProducts[0].update(dummyOrderProducts);

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
