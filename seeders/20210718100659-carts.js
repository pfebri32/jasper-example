"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Carts",
      [
        {
          userID: 1,
        },
        {
          userID: 1,
        },
        {
          userID: 2,
        },
        {
          userID: 3,
        },
        {
          userID: 4,
        },
        {
          userID: 4,
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
