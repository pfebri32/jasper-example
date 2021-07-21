"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "Beng Beng",
          price: 1000,
        },
        {
          name: "Teh Pucuk",
          price: 3500,
        },
        {
          name: "Pocari Sweat",
          price: 6000,
        },
        {
          name: "Indomie Goreng",
          price: 2500,
        },
        {
          name: "Kapal Api Mix",
          price: 1500,
        },
        {
          name: "Nestle Bear Brand",
          price: 1000000,
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
