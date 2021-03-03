"use strict";
var bcrypt = require("bcryptjs");
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class Employee extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate({ Project, Manager, Role, Employee_Projects }) {
			// define association here
			// this.belongsTo(Project, { foreignKey: "project_id" });

			// this.belongsTo(Manager, { foreignKey: "manager_id" });

			// this.hasMany(Project, { foreignKey: "employee_id" });

			

			this.belongsTo(Role, { foreignKey: "role_id" });

			this.belongsTo(Project, { foreignKey: "project_id" })


		
			
		}

		// * Decides which fields are returned
		toJSON() {
			return {
				...this.get(),
				role_id: undefined,
				manager_id: undefined,
				project_id: undefined,
				password: undefined,
				createdAt: undefined,
				updatedAt: undefined,
			};
		}
	}

	Employee.init(
		{
			first_name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			last_name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			role_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			project_id: {
				type: DataTypes.INTEGER,

				allowNull: true,
			 },
			manager_id: {
				type: DataTypes.INTEGER,
				allowNull: true,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				validate: {
					isEmail: true,
				},
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			sequelize,
			tableName: "employees",
			modelName: "Employee",
		}
	);

	// Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
	Employee.prototype.validPassword = function (password) {
		return bcrypt.compareSync(password, this.password);
	};
	// Hooks are automatic methods that run during various phases of the User Model lifecycle
	// In this case, before a User is created, we will automatically hash their password
	Employee.addHook("beforeCreate", function (employee) {
		employee.password = bcrypt.hashSync(
			employee.password,
			bcrypt.genSaltSync(10),
			null
		);
	});
	return Employee;
};