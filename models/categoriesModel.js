const Sequelize = require("sequelize");
const sequelize = require("../connection");

module.exports = sequelize.define(
  "categories",
  {
    category_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    category_name: {
      type: Sequelize.STRING(25),
      allowNull: false,
    },
  },
  { timestamps: false },
);
