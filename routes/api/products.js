const express = require("express");

const { ctrlWrapper, validation } = require("../../middlewares");
const { productJoiSchema } = require("../../schemas");
const { products: ctrl } = require("../../controllers");

const router = express.Router();

router.post(
  "/:shopId/add",
  validation(productJoiSchema),
  ctrlWrapper(ctrl.addProduct)
);

router.get("/", ctrlWrapper(ctrl.getProductsList));

module.exports = router;
