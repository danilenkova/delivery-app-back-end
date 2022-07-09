const { shops: service } = require("../../services");

const getShopList = async (req, res) => {
  const result = await service.getShopList();
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getShopList;
