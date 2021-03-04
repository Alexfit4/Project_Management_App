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
      this.hasMany(Project ,{ foreignKey: "project_id" })
      this.hasMany(Employee, { foreignKey: "employee_id" })
    }
  };
  Employee_Projects.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    ProjectId:  {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    EmployeeId: {
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