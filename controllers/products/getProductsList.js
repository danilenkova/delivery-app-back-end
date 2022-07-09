const { products: service } = require("../../services");

const getProductsList = async (req, res) => {
  const result = await service.getProductsList();
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getProductsList;
