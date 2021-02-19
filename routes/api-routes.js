// Dependencies

// Grabbing our models

const db = require('../models');

// Routes
module.exports = (app) => {
  // GET route for getting all of the todos
  app.get('/api/managers', (req, res) => {
    // findAll returns all entries for a table when used with no options
    db.Manager.findAll({}).then((Manager) => res.json(Manager));
  });

  // POST route for saving a new todo
  app.post('/api/managers', (req, res) => {
    db.Manager.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      project_id: req.body.project_id,
      email: req.body.email,
      password: req.body.password,
    
    }).then((dbManager) => res.json(dbManager));
  });

  // DELETE route for deleting todos using the ID (req.params.id)
  app.delete('/api/managers:id', (req, res) => {
    // We just have to specify which todo we want to destroy with "where"
    db.Manager.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbManager) => res.json(dbManager));
  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put('/api/managers', (req, res) => {
    db.Manager.update(
      {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        project_id: req.body.project_id,
        email: req.body.email,
        password: req.body.password,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    ).then((dbManager) => res.json(dbManager));
  });
};


