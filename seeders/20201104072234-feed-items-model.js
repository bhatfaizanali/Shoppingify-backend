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
          category_id: 1,
        },
        {
          item_name: faker.commerce.productName(),
          item_note: faker.commerce.productDescription(),
          imgURL: faker.image.imageUrl(),
          category_id: 2,
        },
        {
          item_name: faker.commerce.productName(),
          item_note: faker.commerce.productDescription(),
          imgURL: faker.image.imageUrl(),
          category_id: 2,
        },
        {
          item_name: faker.commerce.productName(),
          item_note: faker.commerce.productDescription(),
          imgURL: faker.image.imageUrl(),
          category_id: 3,
        },
        {
          item_name: faker.commerce.productName(),
          item_note: faker.commerce.productDescription(),
          imgURL: faker.image.imageUrl(),
          category_id: 2,
        },
        {
          item_name: faker.commerce.productName(),
          item_note: faker.commerce.productDescription(),
          imgURL: faker.image.imageUrl(),
          category_id: 2,
        },
        {
          item_name: faker.commerce.productName(),
          item_note: faker.commerce.productDescription(),
          imgURL: faker.image.imageUrl(),
          category_id: 2,
        },
        {
          item_name: faker.commerce.productName(),
          item_note: faker.commerce.productDescription(),
          imgURL: faker.image.imageUrl(),
          category_id: 4,
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("items", null, {});
  },
};
