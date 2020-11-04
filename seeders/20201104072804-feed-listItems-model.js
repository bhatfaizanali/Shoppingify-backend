"use strict";
const faker = require("faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "listItems",
      [
        {
          item_id: 17,
          list_id: 1,
          qty: faker.random.number(),
          bought: true,
        },
        {
          item_id: 18,
          list_id: 1,
          qty: faker.random.number(),
          bought: true,
        },
        {
          item_id: 19,
          list_id: 1,
          qty: faker.random.number(),
          bought: false,
        },
        {
          item_id: 20,
          list_id: 2,
          qty: faker.random.number(),
          bought: true,
        },
        {
          item_id: 21,
          list_id: 2,
          qty: faker.random.number(),
          bought: false,
        },
        {
          item_id: 22,
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
