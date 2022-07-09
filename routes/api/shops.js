const express = require("express");

const { ctrlWrapper, validation } = require("../../middlewares");
const { shopJoiSchema } = require("../../schemas");
const { shops: ctrl } = require("../../controllers");

const router = express.Router();

router.post("/add", validation(shopJoiSchema), ctrlWrapper(ctrl.addShop));

router.get("/", ctrlWrapper(ctrl.getShopList));

module.exports = router;
