const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const shopRouter = require("./routes/api/shops");
const productRouter = require("./routes/api/products");
const orderRouter = require("./routes/api/orders");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/", function (req, res) {
  res.send("Hello from Server");
});
app.use("/api/shops", shopRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
