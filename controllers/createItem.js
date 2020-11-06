const Joi = require("joi");
const db = require("../models");

const Items = db.items;
const Categories = db.categories;

const schema = Joi.object({
  item_name: Joi.string().alphanum().max(50).required(),
  item_note: Joi.string().alphanum().max(1000),
  imgURL: Joi.string().alphanum().max(100),

  category_id: Joi.number().integer().min(1900).max(2013).required(),
  category_name: Joi.string().alphanum().max(50).required(),
});

exports.createItem = (request, response) => {
  if (schema.validate(request.body)) {
    if (request.body.category_name) {
      const createdCtaegory = Categories.create({
        category_name: request.body.category_name,
      }).then((createdCategory) => {
        const created = Items.create({
          item_name: request.body.item_name,
          item_note: request.body.item_note,
          imgURL: request.body.imgURL,
          category_id: createdCategory.category_id,
        }).then((created) => {
          if (created) {
            response.send(created).end();
          } else {
            response.status(400).send("Error in insert new record");
          }
        });
      });
    } else {
      var condition = id
        ? { category_id: { [Op.like]: `${request.body.id}` } }
        : null;
      Categories.findAll({ where: condition })
        .then((data) => {
          if (data.length() > 0) {
            const created = Items.create({
              item_name: request.body.item_name,
              item_note: request.body.item_note,
              imgURL: request.body.imgURL,
              category_id: request.body.category_id,
            }).then((created) => {
              if (created) {
                response.send(created).end();
              } else {
                response.status(400).send("Error in insert new record");
              }
            });
          }
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || "Some error occurred.",
          });
        });
    }
  } else {
    response.send("Invalid Data!").end();
  }
};
