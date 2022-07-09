const asyncHandler = require("express-async-handler");

const { Product } = require("../../models");

const { checkProduct: check } = require("../../helpers");

const addProduct = asyncHandler(async (params) => {
  await check.checkProduct(params.name, params.shop);
  const newProduct = await Product.create(params);
  return newProduct;
});

module.exports = addProduct;
