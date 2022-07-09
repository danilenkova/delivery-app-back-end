const { Conflict } = require("http-errors");

const { Product } = require("../models");

const checkProduct = async (name, shop) => {
  const user = await Product.findOne({ name, shop });
  if (user) {
    throw new Conflict(`Product ${name} already exists`);
  }
};

module.exports = {
  checkProduct,
};
