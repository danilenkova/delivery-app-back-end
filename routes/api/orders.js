const express = require("express");

const { ctrlWrapper, validation } = require("../../middlewares");
const { orderJoiSchema } = require("../../schemas");
const { orders: ctrl } = require("../../controllers");

const router = express.Router();

router.post("/add", ctrlWrapper(ctrl.addOrder));

router.get("/", validation(orderJoiSchema), ctrlWrapper(ctrl.getOrdersList));

module.exports = router;
