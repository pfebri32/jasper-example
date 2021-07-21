const router = require("express").Router();
const { demo, getDemo } = require("../../controllers/DemoController");
const {
  getCartById,
  getTemplateB,
  getExampleA,
  getExampleB,
  getContohJSON,
  getContohURL,
} = require("../../controllers/CartController");
const {
  getUserById,
  getTemplateA,
} = require("../../controllers/UserController");

router.get("/demo", demo);
router.get("/getdemo", getDemo);

// User.
router.get("/user/:id", getUserById);
router.get("/templatea/:id", getTemplateA);

// Cart.
router.get("/cart", getCartById);
router.get("/templateb/:id", getTemplateB);
router.get("/example/a/:id", getExampleA);
router.get("/example/b/:id", getExampleB);
router.get("/contohjson/:id", getContohJSON);
router.get("/contohurl/:id", getContohURL);

module.exports = router;
