const { orders: services } = require("../../services");

const addOrder = async (req, res) => {
  const result = await services.addOrder({ ...req.body });
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      order: {
        result,
      },
    },
  });
};

module.exports = addOrder;
