const db = require("../models");
const Categories = db.categories;
const Items = db.items;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
  Categories.findAll({
    attributes: ["category_name"],
    include: [
      {
        model: Items,
        as: "Category",
      },
    ],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred.",
      });
    });
};
