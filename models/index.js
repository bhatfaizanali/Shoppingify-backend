const Sequelize = require("sequelize");
const sequelize = require("../connection");

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.categories = require("./categoriesModel")(sequelize, Sequelize);
db.items = require("./itemsModel")(sequelize, Sequelize);
db.lists = require("./listsModel")(sequelize, Sequelize);
db.listItems = require("./listItemsModel")(sequelize, Sequelize);

db.categories.hasMany(db.items, {
  as: "Item",
  foreignKey: "category_id",
});
db.items.belongsTo(db.categories, {
  as: "Item",
  foreignKey: "category_id",
});
db.lists.hasMany(db.listItems, {
  as: "List",
  foreignKey: "list_id",
});
db.listItems.belongsTo(db.items, {
  as: "ListItem",
  foreignKey: "item_id",
});

sequelize.sync().then(() => {
  console.log(`Database & tables created!`);
});

module.exports = db;
