module.exports = (sequelize, DataTypes) => {
  const project = sequelize.define('project', {
    project: DataTypes.STRING,
  });
  return project;
};
