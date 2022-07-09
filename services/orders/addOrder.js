const asyncHandler = require("express-async-handler");

const { Order } = require("../../models");

const addOrder = asyncHandler(async (order) => {
  const newOrder = await Order.create(order);
  return newOrder;
});

module.exports = addOrder;
