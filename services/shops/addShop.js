const asyncHandler = require("express-async-handler");

const { Shop } = require("../../models");

const { checkShop: check } = require("../../helpers");

const addShop = asyncHandler(async ({ name }) => {
  await check.checkShop(name);
  const newShop = await Shop.create({
    name,
  });
  return newShop;
});

module.exports = addShop;
