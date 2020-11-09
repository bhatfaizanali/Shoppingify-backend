const db = require("../models");
const Lists = db.lists;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
  const id = req.params.id;
  var condition = id ? { list_id: { [Op.eq]: `${id}` } } : null;

  Lists.findAll({
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
