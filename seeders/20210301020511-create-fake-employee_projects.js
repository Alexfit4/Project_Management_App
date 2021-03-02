'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  

      Example:
      await queryInterface.bulkInsert('employee_projects', [{
        project_id: 1,
        employee_id: 1,
        createdAt: '2021-02-22 16:33:07',
        updatedAt: '2021-02-22 16:33:07',
      }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
     
      Example:
      await queryInterface.bulkDelete('employee_projects', null, {});
     
  }
};
