const { Schema, model } = require("mongoose");

const orderSchema = Schema(
  {
    user: {
      type: Object,
      required: [true, "User is required"],
    },
    order: {
      type: Object,
      required: [true, "User is required"],
    },
    total: {
      type: Number,
      required: [true, "Total is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

const Order = model("order", orderSchema);

module.exports = Order;
