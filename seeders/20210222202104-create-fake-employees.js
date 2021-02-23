'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {



      await queryInterface.bulkInsert('employees', [{
        first_name: "Young",
        last_name: "Ji",
        role_id: 5,
        project_id: 1,  
        email: "jeezyH@gmail.com",
        password: "1234?BoseHeadPhones",
        updatedAt: "2021-02-22 16:32:49",
        createdAt: "2021-02-22 16:32:49"
       },{
        first_name: "Gabe ",
        last_name: "Perry",
        role_id: 6,
        project_id: 2,
        email: "gabeP@gmail.com",
        password: "1234?!BowFlex",
        createdAt: '2021-02-22 16:32:56',
        updatedAt: '2021-02-22 16:32:56',
       },
       {
        first_name: "Frankie",
        last_name: "Rosado",
        role_id: 7,
        project_id: 3,
        email: "FrankKy@gmail.com",
        password: "1234?!PAPI",
        createdAt: '2021-02-22 16:33:05',
        updatedAt: '2021-02-22 16:33:05',
       },
       {
        first_name: "Rachel",
        last_name: "Wanke",
        role_id: 8,
        project_id: 4, 
        email: "rachelW@gmail.com",
        password: "1234?!bAM",
        createdAt: '2021-02-22 16:33:07',
        updatedAt: '2021-02-22 16:33:07',
       }], {});

  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkDelete('employees', null, {});
     
  }
};
