const Joi = require("joi");

const NotePayloadSchema = Joi.object({
  title: Joi.string().required().messages({
    "string.base": "Title e kudu string broo.",
    "any.required": "Title e urung kok isi.",
  }),
  body: Joi.string().required(),
  tags: Joi.array().items(Joi.string()).required(),
});

module.exports = { NotePayloadSchema };
