'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  

      Example:
      await queryInterface.bulkInsert('employee_projects', 
      [
        {
        ProjectId: 1,
        EmployeeId: 1,
        createdAt: '2021-02-22 16:33:07',
        updatedAt: '2021-02-22 16:33:07',
      },
       {
        ProjectId: 2,
        EmployeeId: 1,
        createdAt: '2021-02-22 16:33:08',
        updatedAt: '2021-02-22 16:33:08',
      }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
     
      Example:
      await queryInterface.bulkDelete('employee_projects', null, {});
     
  }
};
