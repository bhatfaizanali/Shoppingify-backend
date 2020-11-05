"use strict";
const faker = require("faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "listItems",
      [
        {
          item_id: 1,
          list_id: 1,
          qty: faker.random.number(),
          bought: true,
        },
        {
          item_id: 2,
          list_id: 1,
          qty: faker.random.number(),
          bought: true,
        },
        {
          item_id: 3,
          list_id: 1,
          qty: faker.random.number(),
          bought: false,
        },
        {
          item_id: 4,
          list_id: 2,
          qty: faker.random.number(),
          bought: true,
        },
        {
          item_id: 5,
          list_id: 2,
          qty: faker.random.number(),
          bought: false,
        },
        {
          item_id: 6,
          list_id: 2,
          qty: faker.random.number(),
          bought: true,
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("listItems", null, {});
  },
};
