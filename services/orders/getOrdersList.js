const asyncHandler = require("express-async-handler");
const { NotFound } = require("http-errors");
const { Order } = require("../../models");

const getOrdersList = asyncHandler(async () => {
  const orders = await Order.find({});
  if (!orders) {
    throw new NotFound("Shops not found");
  }
  return orders;
});

module.exports = getOrdersList;
