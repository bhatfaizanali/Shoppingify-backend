const db = require("../config/db.config");
const Sequelize = require("sequelize");

const categories = require("./categoriesModel");
const items = require("./itemsModel");
const lists = require("./listsModel");
const listItems = require("./listItemsModel");

const sequelize = new Sequelize(db.DB, db.USER, db.PASSWORD, {
  host: db.HOST,
  dialect: db.dialect,
});

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
};
