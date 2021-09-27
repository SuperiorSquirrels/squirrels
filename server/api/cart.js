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

router.put("/update/:id", async (req, res, next) => {
  try {
    const activeOrderDetails = await Order.findAll({
      where: {
        userId: req.params.id,
        isCart: true
      },
      include: Product
    })

    const dummyBody = {
      id: 1,
      isCart: true,
      createdAt: "2021-09-27T20:44:22.262Z",
      updatedAt: "2021-09-27T20:44:22.262Z",
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
          imageUrl: "https://cdn.dribbble.com/users/1044993/screenshots/12436018/media/4af5b5c62eba141322e11e2747a1d9fd.png?compress=1&resize=1600x1200",
          createdAt: "2021-09-27T20:44:21.952Z",
          updatedAt: "2021-09-27T20:44:21.952Z",
          order_products: {
            singleProductTotalPrice: 120,
            singleProductTotalQuantity: 3,
            createdAt: "2021-09-27T20:44:22.311Z",
            updatedAt: "2021-09-27T20:44:22.311Z",
            productId: 7,
            orderId: 1
          }
        }
      ]
    }

    // const dummyBody = {
    //   id: 8,
    //   name: "plush cat agian",
    //   price: 10,
    //   singleProductTotalPrice: 120,
    //   singleProductTotalQuantity: 3,
    // }

    // once we finished the frontEnd, we need to use req.body instead of below dummyBody as the parameter of the update function.
    const updateOrder = await activeOrderDetails[0].update(dummyBody)
    res.send(updateOrder)
  } catch (err) {
    next(err);
  }
});

module.exports = router;
