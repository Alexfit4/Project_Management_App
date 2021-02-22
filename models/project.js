"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Project extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate({ Manager }) {
			// define association here
			// Project.belongsTo(models.Manager, {
			// 	foreignKey: "project_id",
			// 	constraints: false,
			// });
			// Project.belongsTo(models.Employee, {
			// 	// through: 'id',
			// });
			this.hasMany(Manager, { foreignKey: "project_id" });
		}
	}
	Project.init(
    {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
  },
    {
		sequelize,
		tableName: "projects",
		modelName: "Project",
    }
	);
	return Project;
};
