const db = require("../models");
const Items = db.items;

exports.createItem = (request, response) => {
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
};
