const sequelize = require("../connection");
const categories = require("./categoriesModel");
const items = require("./itemsModel");
const lists = require("./listsModel");
const listItems = require("./listItemsModel");

categories.hasMany(items, {
  as: "Category",
  foreignKey: "category_id",
});
items.belongsTo(categories, {
  as: "Item",
  foreignKey: "category_id",
});
lists.hasMany(listItems, {
  as: "List",
  foreignKey: "list_id",
});
listItems.belongsTo(items, {
  as: "ListItem",
  foreignKey: "item_id",
});

sequelize.sync({ force: true }).then(() => {
  console.log(`Database & tables created!`);
});

module.exports = {
  categories,
  items,
  lists,
  listItems,
  sequelize,
};
