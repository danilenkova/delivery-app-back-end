const Joi = require("joi");

const shopJoiSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "name cannot be an empty field",
    "any.required": "missing required name field",
  }),
});

module.exports = {
  shopJoiSchema,
};
