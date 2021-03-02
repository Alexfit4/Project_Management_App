'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee_Projects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Employee, Project}) {
      // define association here
      this.belongsTo(Project, { foreignKey: "project_id" })
      this.belongsTo(Employee, { foreignKey: "employee_id" })
    }
  };
  Employee_Projects.init({
    project_id:  {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    tableName: 'employee_projects',
    modelName: 'Employee_Projects',
  });
  return Employee_Projects;
};