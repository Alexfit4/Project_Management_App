"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Role extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate({ Employee, Manager }) {
			// define association here
			// this.belongsTo(Employee, {foreignKey: 'employee_id'})

			this.hasMany(Employee, { foreignKey: "role_id" });

			this.hasMany(Manager, { foreignKey: "role_id" });
		}

		// * Decides which fields are returned
		toJSON() {
			return {
				...this.get(),
				id: undefined,
				createdAt: undefined,
				updatedAt: undefined
			};
		}
	}
	Role.init(
		{
			title: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			salary: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
		},
		{
			sequelize,
			tableName: "roles",
			modelName: "Role",
		}
	);
	return Role;
};
