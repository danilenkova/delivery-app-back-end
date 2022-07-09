const { shops: services } = require("../../services");

const addShop = async (req, res) => {
  const result = await services.addShop(req.body);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      shop: {
        result,
      },
    },
  });
};

module.exports = addShop;
