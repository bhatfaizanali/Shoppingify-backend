const Sequelize = require("sequelize");
const sequelize = require("../connection");

module.exports = sequelize.define(
  "lists",
  {
    list_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    list_name: {
      type: Sequelize.STRING(25),
      allowNull: false,
    },
    list_status: {
      type: Sequelize.STRING(25),
      allowNull: false,
    },
    item_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  },
  { timestamps: false },
);
