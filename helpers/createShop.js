const { Conflict } = require("http-errors");

const { Shop } = require("../models");

const checkShop = async (name) => {
  const user = await Shop.findOne({ name });
  if (user) {
    throw new Conflict(`Store ${name} already exists`);
  }
};

module.exports = {
  checkShop,
};
