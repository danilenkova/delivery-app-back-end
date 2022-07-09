const { Schema, model } = require("mongoose");

const productSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    price: {
      type: String,
      required: [true, "Price is required"],
    },
    image: {
      type: String,
      required: [true, "Image is required"],
    },
    shop: {
      type: Schema.Types.ObjectId,
      ref: "shop",
    },
  },
  { versionKey: false }
);

const Product = model("product", productSchema);

module.exports = Product;
