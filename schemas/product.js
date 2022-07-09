const Joi = require("joi");

const productJoiSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "name cannot be an empty field",
    "any.required": "missing required name field",
  }),
  price: Joi.string().required().messages({
    "string.empty": "price cannot be an empty field",
    "any.required": "missing required price field",
  }),
  image: Joi.string().required().messages({
    "string.empty": "image cannot be an empty field",
    "any.required": "missing required image field",
  }),
});

module.exports = {
  productJoiSchema,
};
