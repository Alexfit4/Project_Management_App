"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Project extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate({ Manager, Employee, Employee_Projects }) {
			this.belongsTo(Manager, { foreignKey: "manager_id" });

			// this.hasMany(Employee, { foreignKey: "project_id" });
			
			// this.belongsTo(Employee, { foreignKey: "employee_id" });


			this.hasMany(Manager, { foreignKey: "manager_id" });

			this.belongsTo(Employee, { foreignKey: "employee_id" })
			
		}

		// * Decides which fields are returned
		toJSON() {
			return {
				...this.get(),
				//id: undefined,
				// createdAt: undefined,
				// updatedAt: undefined
			};
		}
	}
	Project.init(
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			description: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			manager_id: {
				type: DataTypes.INTEGER
			},
			employee_id: {
				type: DataTypes.INTEGER
			}
		},
		{
			sequelize,
			tableName: "projects",
			modelName: "Project",
		}
	);
	return Project;
};