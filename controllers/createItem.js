const Joi = require("joi");
const db = require("../models");
const Op = db.Sequelize.Op;
const Items = db.items;
const Categories = db.categories;

const schema = Joi.object({
  item_name: Joi.string().alphanum().min(1).max(50).required(),
  item_note: Joi.string().alphanum().min(1).max(1000),
  imgURL: Joi.string().alphanum().min(1).max(100),
  category_id: Joi.number().integer().min(1).max(2013).required(),
  category_name: Joi.string().alphanum().min(1).max(50),
});
exports.createItem = (request, response) => {
  if (!schema.validate(request.body).error) {
    var condition = request.body.category_id
      ? { category_id: { [Op.eq]: `${request.body.category_id}` } }
      : null;
    Categories.findAll({ where: condition })
      .then((data) => {
        if (data.length) {
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
        } else {
          const createdCtaegory = Categories.create({
            category_id: request.body.category_id,
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
        }
      })
      .catch((err) => {
        response.status(500).send({
          message: err.message || "Some error occurred.",
        });
      });
  } else {
    console.log(schema.validate(request.body).error);
    response.status(300).send(schema.validate(request.body)).end();
  }
};
