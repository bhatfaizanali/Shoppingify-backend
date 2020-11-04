"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("items", {
      item_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      item_name: {
        type: Sequelize.STRING(25),
        allowNull: false,
      },
      item_note: {
        type: Sequelize.TEXT,
      },
      imgURL: {
        type: Sequelize.STRING(25),
      },
      category_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("items");
  },
};
