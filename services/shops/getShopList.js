const asyncHandler = require("express-async-handler");
const { NotFound } = require("http-errors");
const { Shop } = require("../../models");

const getShopList = asyncHandler(async () => {
  const shops = await Shop.find({});
  if (!shops) {
    throw new NotFound("Shops not found");
  }
  return shops;
});

module.exports = getShopList;
