"use strict";
const faker = require("faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "items",
      [
        {
          item_name: faker.commerce.productName(),
          item_note: faker.commerce.productDescription(),
          imgURL: faker.image.imageUrl(),
          category_id: faker.random.number(),
        },
        {
          item_name: faker.commerce.productName(),
          item_note: faker.commerce.productDescription(),
          imgURL: faker.image.imageUrl(),
          category_id: faker.random.number(),
        },
        {
          item_name: faker.commerce.productName(),
          item_note: faker.commerce.productDescription(),
          imgURL: faker.image.imageUrl(),
          category_id: faker.random.number(),
        },
        {
          item_name: faker.commerce.productName(),
          item_note: faker.commerce.productDescription(),
          imgURL: faker.image.imageUrl(),
          category_id: faker.random.number(),
        },
        {
          item_name: faker.commerce.productName(),
          item_note: faker.commerce.productDescription(),
          imgURL: faker.image.imageUrl(),
          category_id: faker.random.number(),
        },
        {
          item_name: faker.commerce.productName(),
          item_note: faker.commerce.productDescription(),
          imgURL: faker.image.imageUrl(),
          category_id: faker.random.number(),
        },
        {
          item_name: faker.commerce.productName(),
          item_note: faker.commerce.productDescription(),
          imgURL: faker.image.imageUrl(),
          category_id: faker.random.number(),
        },
        {
          item_name: faker.commerce.productName(),
          item_note: faker.commerce.productDescription(),
          imgURL: faker.image.imageUrl(),
          category_id: faker.random.number(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("items", null, {});
  },
};
