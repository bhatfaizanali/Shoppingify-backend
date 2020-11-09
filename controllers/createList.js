const Joi = require("joi");
const db = require("../models");
const Lists = db.lists;
const ListItems = db.listItems;

const schema = Joi.object({
  list_name: Joi.string().alphanum().min(1).max(50).required(),
  list_status: Joi.string().alphanum().min(1).max(10).required(),
  list_date: Joi.date().required(),
  list_items: Joi.any(),
});
exports.createList = async (request, response) => {
  if (!schema.validate(request.body).error) {
    try {
      const createdList = await Lists.create({
        list_name: request.body.list_name,
        list_status: request.body.list_status,
        list_date: request.body.list_date,
      });
      Object.entries(request.body.list_items).map(async (item) => {
        return await ListItems.create({
          list_id: createdList.list_id,
          item_id: item[0],
          qty: item[1].qty,
          bought: item[1].bought,
        });
      });
      if (createdList) {
        response.send(createdList).end();
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
