const Joi = require("joi");

const orderJoiSchema = Joi.object({
  user: Joi.object().required().messages({
    "string.empty": "User cannot be an empty field",
    "any.required": "missing required user field",
  }),
  products: Joi.object().required().messages({
    "string.empty": "Products cannot be an empty field",
    "any.required": "missing required products field",
  }),
  total: Joi.number().required().messages({
    "string.empty": "Total cannot be an empty field",
    "any.required": "missing required total field",
  }),
});

module.exports = {
  orderJoiSchema,
};
