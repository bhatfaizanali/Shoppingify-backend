const Joi = require("joi");
const db = require("../models");
const Lists = db.lists;

const schema = Joi.object({
  list_name: Joi.string().alphanum().min(1).max(50).required(),
  list_status: Joi.string().alphanum().min(1).max(10).required(),
  list_date: Joi.date().required(),
});
exports.createList = async (request, response) => {
  if (!schema.validate(request.body).error) {
    try {
      const created = await Lists.create({
        list_name: request.body.list_name,
        list_status: request.body.list_status,
        list_date: request.body.list_date,
      });
      if (created) {
        response.send(created).end();
      } else {
        response.status(400).send("Error in insert new record");
      }
    } catch (err) {
      response.status(500).send({
        message: err.message || "Some error occurred.",
      });
    }
  } else {
    console.log(schema.validate(request.body).error);
    response.status(300).send(schema.validate(request.body)).end();
  }
};
