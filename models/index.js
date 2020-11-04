const Sequelize = require("sequelize");
const sequelize = require("../connection");

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.categories = require("./categoriesModel")(sequelize, Sequelize);
db.items = require("./itemsModel")(sequelize, Sequelize);
db.lists = require("./listsModel")(sequelize, Sequelize);
db.listItems = require("./listItemsModel")(sequelize, Sequelize);

sequelize.sync({ force: true }).then(() => {
  console.log(`Database & tables created!`);
});

module.exports = db;
