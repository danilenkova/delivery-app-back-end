const asyncHandler = require("express-async-handler");
const { NotFound } = require("http-errors");
const { Product } = require("../../models");

const getProductsList = asyncHandler(async () => {
  const shops = await Product.find({});
  if (!shops) {
    throw new NotFound("Shops not found");
  }
  return shops;
});

module.exports = getProductsList;
