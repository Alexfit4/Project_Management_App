
// Grabbing our models

const db = require('../models');

// Routes
module.exports = (app) => {
  // GET route for getting all of the todos
  app.get('/api/employees', (req, res) => {
    // findAll returns all entries for a table when used with no options
    db.Employee.findAll({include:[db.Manager]}).then((Employee) => res.json(Employee));
  });

  // POST route for saving a new todo
  app.post('/api/employees', (req, res) => {
    db.Employee.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      role_id:req.body.role_id,
      project_id: req.body.project_id,
      manager_id: req.body.manager_id,
      email: req.body.email,
      password: req.body.password,
    
    }).then((dbEmployee) => res.json(dbEmployee));
  });

  // DELETE route for deleting todos using the ID (req.params.id)
  app.delete('/api/employees:id', (req, res) => {
    // We just have to specify which todo we want to destroy with "where"
    db.Employee.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbEmployee) => res.json(dbEmployee));
  });
};
// PUT route for updating todos. We can get the updated todo data from req.body
//   app.put('/api/employees', (req, res) => {
//     db.Manager.update(
//       {
//         first_name: req.body.first_name,
//         last_name: req.body.last_name,
//         project_id: req.body.project_id,
//         email: req.body.email,
//         password: req.body.password,
//       },
//       {
//         where: {
//           id: req.body.id,
//         },
//       }
//     ).then((dbManager) => res.json(dbManager));
//   });
// };
