
"use strict";

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

		await queryInterface.bulkInsert(
			"projects",
			[
				{
					name: "TinCat",
					description: "Dating for cats!",
					manager_id: 1,
					employee_id: 1,
					createdAt: "2021-02-22 16:31:26",
					updatedAt: "2021-02-22 16:31:26",
				},
				{
					name: "Winery",
					description: "New Winery in town, needs a website",
					manager_id: 2,
					employee_id: 2,
					createdAt: "2021-02-22 16:31:47",
					updatedAt: "2021-02-22 16:31:47",
				},
				{
					name: "Brewery",
					description: "Brewery websites need revamping",
					manager_id: 1,
					employee_id: 3,
					createdAt: "2021-02-22 16:32:23",
					updatedAt: "2021-02-22 16:32:23",
				},
				{
					name: "Amazon",
					description: "Buy and sell items",
					manager_id: 3,
					employee_id: 4,
					createdAt: "2021-02-22 16:32:40",
					updatedAt: "2021-02-22 16:32:40",
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

		await queryInterface.bulkDelete("projects", null, {});
	},
};