const express = require("express");
const {
  postProduct,
  getProduct,
  deleteProduct,
  editProduct,
} = require("../controllers/controllers");

const router = express.Router();

router.route("/post").post(postProduct);
router.route("/get").get(getProduct);
// router.route("/delete/:id").delete(deleteProduct)
router.route("/delete/:id").delete(deleteProduct);
router.route("/get/:id").put(editProduct);
// router.route("/filter/:id").get(filterProduct)
// router.route("/register").post(registerUser)

module.exports = router;
