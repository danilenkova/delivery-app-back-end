const { orders: service } = require("../../services");

const getOrdersList = async (req, res) => {
  const result = await service.getOrdersList();
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getOrdersList;
