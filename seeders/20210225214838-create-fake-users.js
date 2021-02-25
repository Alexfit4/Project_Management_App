"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"users",
			[
				{
					email: "luH@gmail.com",
					password: "$2a$10$ClU4feneFV85HXS1R3k4H.tntCxcWgWZktVavkpcHn5zw6IvL.qSu",
					updatedAt: "2021-02-22 16:32:49",
					createdAt: "2021-02-22 16:32:49",
				},
				{
					email: "johnnieS@gmail.com",
					password: "$2a$10$YGb3THnp2r4ljCX3qLdNNuQnTni673Fwftin90ewqo8O0BJq/8Jyu",
					createdAt: "2021-02-22 16:32:56",
					updatedAt: "2021-02-22 16:32:56",
				},
				{
					email: "mengyue@gmail.com",
					password: "$2a$10$gWhZlEMmflw.fIQbKIrqouWIhOKJQScYxGANmzvhMd2Tl0o8yKsOa",
					createdAt: "2021-02-22 16:32:57",
					updatedAt: "2021-02-22 16:32:57",
				},
				{
					email: "amir@gmail.com",
					password: "$2a$10$a0Ym.y0tfkUaXPVV7eQquOTyo.8giPEBHP/BHq9KsQWPo51S18Cxe",
					createdAt: "2021-02-22 16:32:58",
					updatedAt: "2021-02-22 16:32:58",
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("users", null, {});
	},
};
