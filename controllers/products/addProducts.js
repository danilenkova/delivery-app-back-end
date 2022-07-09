const { products: services } = require("../../services");

const addProduct = async (req, res) => {
  const result = await services.addProduct({
    ...req.body,
    shop: req.params.shopId,
  });
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      product: {
        result,
      },
    },
  });
};

module.exports = addProduct;
