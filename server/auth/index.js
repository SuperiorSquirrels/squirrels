const router = require("express").Router();
const {
  models: { User },
} = require("../db");
module.exports = router;


router.post('/login', async (req, res, next) => {
  try {
    res.send({ token: await User.authenticate(req.body) });
  } catch (err) {
    next(err);
  }
});

router.post('/signup', async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.send({ token: await user.generateToken() });
  } catch (err) {
    //shows us what the error is
    let errorName = err.errors[0].message;

    if (errorName === "username must be unique") {
      res.status(401).send("Username already in use");
    } else if (errorName === "email must be unique") {
      res.status(401).send("Email already in use");
    } else {
      next(err);
    }
  }
});

router.get("/me", async (req, res, next) => {
  try {
    res.send(await User.findByToken(req.headers.authorization));
  } catch (ex) {
    next(ex);
  }
});
