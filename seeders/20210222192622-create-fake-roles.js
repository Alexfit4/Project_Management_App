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
			"roles",
			[
				{
					title: "Lead Engineer",
					salary: 800000,
					createdAt: "2021-02-22 16:31:26",
					updatedAt: "2021-02-22 16:31:26",
				},
				{
					title: "Sales Lead",
					salary: 800000,
					createdAt: "2021-02-22 16:31:47",
					updatedAt: "2021-02-22 16:31:47",
				},
				{
					title: "Lead Designer ",
					salary: 700000,
					createdAt: "2021-02-22 16:32:23",
					updatedAt: "2021-02-22 16:32:23",
				},
				{
					title: "Lead Financial Manager",
					salary: 900000,
					createdAt: "2021-02-22 16:31:50",
					updatedAt: "2021-02-22 16:31:50",
				},
				{
					title: "Software Engineer",
					salary: 600000,
					createdAt: "2021-02-22 16:33:31",
					updatedAt: "2021-02-22 16:33:31",
				},
				{
					title: "Sales Person",
					salary: 700000,
					createdAt: "2021-02-22 16:34:43",
					updatedAt: "2021-02-22 16:34:43",
				},
				{
					title: "UI/UX Designer",
					salary: 500000,
					createdAt: "2021-02-22 16:35:52",
					updatedAt: "2021-02-22 16:35:52",
				},
				{
					title: "Accountant",
					salary: 600000,
					createdAt: "2021-02-22 16:36:55",
					updatedAt: "2021-02-22 16:36:55",
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

		await queryInterface.bulkDelete("roles", null, {});
	},
};
