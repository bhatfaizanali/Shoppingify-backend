"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("listItems", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      item_id: {
        type: Sequelize.INTEGER(11),
        references: { model: "items", key: "item_id" },
        allowNull: false,
      },
      list_id: {
        type: Sequelize.INTEGER(11),
        references: { model: "lists", key: "list_id" },
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
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("listItems");
  },
};
