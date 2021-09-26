const router = require("express").Router();
const {
  models: { User },
} = require("../db");
module.exports = router;

// router.get('/', async (req, res, next) => {
//   try {
//     const users = await User.findAll({
//       // explicitly select only the id and username fields - even though
//       // users' passwords are encrypted, it won't help if we just
//       // send everything to anyone who asks!
//       attributes: ['id', 'username']
//     })
//     res.json(users)
//   } catch (err) {
//     next(err)
//   }
// })

router.post("/", async (req, res, next) => {
  try {
    //find the email that was requested

    const findEmail = await User.findAll({
      where: { email: req.body.email },
    });

    //find the username that was requested

    const findUsername = await User.findAll({
      where: { username: req.body.username },
    });

    //create an object to store the information

    const userInfo = {
      isEmail: "",
      isUsername: "",
    };
    //if email exists then set the useInfo object's isEmail to "email already in use"
    if (findEmail.length > 0) {
      userInfo.isEmail = "email already in use";
    }
    //if username exists then set the useInfo object's isUsername to "username already in use"
    if (findUsername.length > 0) {
      userInfo.isUsername = "username already in use";
    }

    //if neither the username nor the email are in use then we create a new user
    if (userInfo.isEmail.length === 0 && userInfo.isUsername.length === 0) {
      const newUser = await User.create(req.body);
      res.json(newUser);
    } else {
      //else give send the userInfo object up the chain to tell the user what is wrong
      res.json(userInfo);
    }
  } catch (error) {
    next(error);
  }
});
