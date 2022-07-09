const { Schema, model } = require("mongoose");

const shopSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
  },
  { versionKey: false }
);

const Shop = model("shop", shopSchema);

module.exports = Shop;
