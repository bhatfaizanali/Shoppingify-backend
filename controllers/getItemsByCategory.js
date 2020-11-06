const db = require("../models");
const Categories = db.categories;
const Items = db.items;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
  Categories.findAll({
    attributes: ["category_id", "category_name"],
    include: [
      {
        model: Items,
        as: "Item",
      },
    ],
  })
    .then((data) => {
      let resObj = {};
      data.forEach((element) => {
        resObj[element.category_id] = element;
      });
      res.send(resObj);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred.",
      });
    });
};
