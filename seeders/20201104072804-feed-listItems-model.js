"use strict";
const faker = require("faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "listItems",
      [
        {
          item_id: faker.random.number(),
          list_id: faker.random.number(),
          qty: faker.random.number(),
          bought: true,
        },
        {
          item_id: faker.random.number(),
          list_id: faker.random.number(),
          qty: faker.random.number(),
          bought: true,
        },
        {
          item_id: faker.random.number(),
          list_id: faker.random.number(),
          qty: faker.random.number(),
          bought: false,
        },
        {
          item_id: faker.random.number(),
          list_id: faker.random.number(),
          qty: faker.random.number(),
          bought: true,
        },
        {
          item_id: faker.random.number(),
          list_id: faker.random.number(),
          qty: faker.random.number(),
          bought: false,
        },
        {
          item_id: faker.random.number(),
          list_id: faker.random.number(),
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
