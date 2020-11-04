"use strict";
const faker = require("faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          category_name: faker.commerce.productAdjective(),
        },
        {
          category_name: faker.commerce.productAdjective(),
        },
        {
          category_name: faker.commerce.productAdjective(),
        },
        {
          category_name: faker.commerce.productAdjective(),
        },
        {
          category_name: faker.commerce.productAdjective(),
        },
        {
          category_name: faker.commerce.productAdjective(),
        },
        {
          category_name: faker.commerce.productAdjective(),
        },
        {
          category_name: faker.commerce.productAdjective(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
