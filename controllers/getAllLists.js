const db = require("../models");
const Lists = db.lists;
const ListItems = db.listItems;
const Items = db.items;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
  Lists.findAll({
    attributes: ["list_id", "list_name", "list_status", "list_date"],
    include: [
      {
        model: ListItems,
        attributes: ["qty", "bought", "item_id"],
        as: "ListItem",
        include: [
          {
            model: Items,
            attributes: ["item_name"],
            as: "ListItem",
          },
        ],
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
// exports.findAll = (req, res) => {
//   ListItems.findAll({
//     attributes: ["qty", "bought"],
//     include: [
//       {
//         model: Lists,
//         attributes: ["list_id", "list_name", "list_status", "list_date"],
//         as: "ListItem",
//       },
//       {
//         model: Items,
//         attributes: ["item_name"],
//         as: "Item",
//       },
//     ],
//   })
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: err.message || "Some error occurred.",
//       });
//     });
// };
