"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Employee extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Employee.belongsTo(models.Role, {as: 'Role'});

			Employee.belongsTo(models.Project, {as: 'Project'});

			Employee.belongsTo(models.Manager, {as: 'Manager'})
		}
	}

	Employee.init(
		{
			first_name: DataTypes.STRING,
			last_name: DataTypes.STRING,
			role_id: DataTypes.INTEGER,
			project_id: DataTypes.INTEGER,
			manager_id: DataTypes.INTEGER,
			email: DataTypes.STRING,
			password: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Employee",
		}
	);
	return Employee;
};
