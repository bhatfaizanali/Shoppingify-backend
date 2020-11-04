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
  ListItems.associate = (models) => {
    ListItems.belongsTo(models.Items, {
      as: "Item",
      foreignKey: "category_id",
    });
  };
  return ListItems;
};
