"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Employee extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate({ Project, Manager }) {
			// define association here
			this.belongsTo(Project, { foreignKey: 'project_id'})

			this.belongsTo(Manager, { foreignKey: 'manager_id'});

			// this.hasMany(Employee, { foreignKey: "manager_id" });

			
		}
	}

	Employee.init(
		{
			first_name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			last_name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			role_id: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			project_id: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			manager_id: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false
			},
		},
		{
			sequelize,
			tableName: 'employees',
			modelName: "Employee",
		}
	);
	return Employee;
};
