"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Orders",
      [
        {
          quantity: 2,
          cartID: 1,
          productID: 1,
        },
        {
          quantity: 3,
          cartID: 1,
          productID: 2,
        },
        {
          quantity: 2,
          cartID: 1,
          productID: 3,
        },
        {
          quantity: 1,
          cartID: 2,
          productID: 1,
        },
        {
          quantity: 1,
          cartID: 2,
          productID: 4,
        },
        {
          quantity: 2,
          cartID: 2,
          productID: 6,
        },
        {
          quantity: 1,
          cartID: 3,
          productID: 4,
        },
        {
          quantity: 2,
          cartID: 4,
          productID: 2,
        },
        {
          quantity: 1,
          cartID: 4,
          productID: 3,
        },
        {
          quantity: 2,
          cartID: 4,
          productID: 5,
        },
        {
          quantity: 1,
          cartID: 5,
          productID: 1,
        },
        {
          quantity: 1,
          cartID: 5,
          productID: 3,
        },
        {
          quantity: 1,
          cartID: 5,
          productID: 5,
        },
        {
          quantity: 3,
          cartID: 6,
          productID: 3,
        },
        {
          quantity: 3,
          cartID: 6,
          productID: 4,
        },
        {
          quantity: 5,
          cartID: 6,
          productID: 5,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
