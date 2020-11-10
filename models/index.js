const Sequelize = require("sequelize");
const sequelize = require("../connection");

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.categories = require("./categoriesModel")(sequelize, Sequelize);
db.items = require("./itemsModel")(sequelize, Sequelize);
db.lists = require("./listsModel")(sequelize, Sequelize);
db.listItems = require("./listItemsModel")(sequelize, Sequelize);
db.users = require("./usersModel")(sequelize, Sequelize);

db.categories.hasMany(db.items, {
  as: "Item",
  foreignKey: "category_id",
});
db.items.belongsTo(db.categories, {
  as: "Item",
  foreignKey: "item_id",
});
db.lists.hasMany(db.listItems, {
  as: "ListItem",
  foreignKey: "list_id",
});
db.listItems.belongsTo(db.items, {
  as: "ListItem",
  foreignKey: "item_id",
});

db.users.hasMany(db.categories, {
  as: "Category",
  foreignKey: "user_id",
});
db.categories.belongsTo(db.users, {
  as: "Category",
  foreignKey: "user_id",
});
db.users.hasMany(db.items, {
  as: "Product",
  foreignKey: "user_id",
});
db.items.belongsTo(db.users, {
  as: "Product",
  foreignKey: "user_id",
});
db.users.hasMany(db.lists, {
  as: "List",
  foreignKey: "user_id",
});
db.lists.belongsTo(db.users, {
  as: "List",
  foreignKey: "user_id",
});

sequelize.sync().then(() => {
  console.log(`Database & tables created!`);
});

module.exports = db;
