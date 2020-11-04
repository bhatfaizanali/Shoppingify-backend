"use strict";
const faker = require("faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "lists",
      [
        {
          list_name: faker.lorem.word(),
          list_status: "completed",
          list_date: faker.date.recent(),
        },
        {
          list_name: faker.lorem.word(),
          list_status: "completed",
          list_date: faker.date.recent(),
        },
        {
          list_name: faker.lorem.word(),
          list_status: "completed",
          list_date: faker.date.recent(),
        },
        {
          list_name: faker.lorem.word(),
          list_status: "cancelled",
          list_date: faker.date.recent(),
        },
        {
          list_name: faker.lorem.word(),
          list_status: "completed",
          list_date: faker.date.recent(),
        },
        {
          list_name: faker.lorem.word(),
          list_status: "cancelled",
          list_date: faker.date.recent(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("lists", null, {});
  },
};
