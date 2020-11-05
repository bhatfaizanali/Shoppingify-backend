const db = require("../models");
const Items = db.items;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
  const id = req.baseUrl.slice(7);
  console.log(id);
  var condition = id ? { item_id: { [Op.eq]: `${id}` } } : null;

  Items.findAll({
    where: condition,
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
