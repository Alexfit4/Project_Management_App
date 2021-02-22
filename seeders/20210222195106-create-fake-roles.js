'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('roles', [{
      title: "Lead Engineer",
      salary: 800000,
      employee_id: 1,
      createdAt: '2021-02-22 16:31:26',
      updatedAt: '2021-02-22 16:31:26', 
     },
    {
      title: "Sales Lead",
      salary: 800000,
      employee_id: 2,
      createdAt: '2021-02-22 16:31:47',
      updatedAt: '2021-02-22 16:31:47', 
    },
  {
    title: "Lead Designer ",
      salary: 700000,
      employee_id: 3,
      createdAt: '2021-02-22 16:32:23',
      updatedAt: '2021-02-22 16:32:23'
  }, {
    title: "Lead Financial Manager",
      salary: 900000,
      employee_id: 4,
      createdAt: '2021-02-22 16:31:50',
      updatedAt: '2021-02-22 16:31:50'
  }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('roles', null, {});
  }
};

