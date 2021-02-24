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

    await queryInterface.bulkInsert('managers', [{
      first_name: "Lue",
      last_name: "Hao",
      role_id: 1,
      project_id: 1,
      email: "luH@gmail.com",
      password: "1234?",
      updatedAt: "2021-02-22 16:32:49",
      createdAt: "2021-02-22 16:32:49"
     },{
      first_name: "Johnnie",
      last_name: "Simpson",
      role_id: 2,
      project_id: 2,
      email: "johnnieS@gmail.com",
      password: "1234?!",
      createdAt: '2021-02-22 16:32:56',
      updatedAt: '2021-02-22 16:32:56',
     },
     {
      first_name: "Mengyue",
      last_name: "Zhang",
      role_id: 3,
      project_id: 3,
      email: "mengyueZ@gmail.com",
      password: "1234?!Wow",
      createdAt: '2021-02-22 16:33:05',
      updatedAt: '2021-02-22 16:33:05',
     },
     {
      first_name: "Amir",
      last_name: "Ashtiany",
      role_id: 4,
      project_id: 4,
      email: "AmirA@gmail.com",
      password: "1234?!WowThisIsSecret",
      createdAt: '2021-02-22 16:33:07',
      updatedAt: '2021-02-22 16:33:07',
     }
     ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     * 
     */

    await queryInterface.bulkDelete('managers', null, {});
  }
};