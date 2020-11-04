const Sequelize = require("sequelize");
const sequelize = require("../connection");

module.exports = (sequelize, Sequelize) => {
  const Items = sequelize.define(
    "items",
    {
      item_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      item_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      item_note: {
        type: Sequelize.TEXT,
      },
      imgURL: {
        type: Sequelize.STRING(100),
      },
    },
    { timestamps: false },
  );
  Items.associate = (models) => {
    Items.belongsTo(models.Categories, {
      as: "Item",
      foreignKey: "category_id",
    });
  };

  return Items;
};
