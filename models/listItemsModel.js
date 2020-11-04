const Sequelize = require("sequelize");
const sequelize = require("../connection");

module.exports = (sequelize, Sequelize) => {
  const ListItems = sequelize.define(
    "listItems",
    {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      item_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      list_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      qty: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      bought: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
    },
    { timestamps: false },
  );
  return ListItems;
};
