
// Grabbing our models
// const { body, validationResult } = require('express-validator');

const db = require('../models');

// Routes
module.exports = (app) => {
	// * GET route for getting all of the employees
  app.get('/api/users', (req, res) => {
    // findAll returns all entries for a table when used with no options
    db.User.findAll({}).then((Employee) => res.json(Employee));
  });



  app.get("/api/users/:id", (req, res) => {
		// Here we add an "include" property to our options in our findOne query
		// We set the value to an array of the models we want to include in a left outer join
		// In this case, just db.Post
		db.User.findOne({
			where: {
				id: req.params.id,
			}			
		}).then((dbEmployee) => res.json(dbEmployee));
	});

  //* POST route for saving a new employee
  app.post('/api/users', (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    
    }).then((dbUser) => res.json(dbUser));
  });

  //* DELETE route for deleting todos using the ID (req.params.id)
  app.delete('/api/users/:id', (req, res) => {
    //* We just have to specify which todo we want to destroy with "where"
    db.User.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbUser) => res.json(dbUser));
  });

  app.delete('/api/users/:id', (req, res) => {
    //* We just have to specify which todo we want to destroy with "where"
    db.Manager.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbManager) => res.json(dbManager));
  });

  	// * PUT route for updating Users. We can get the updated User data from req.body
	app.put("/api/users", (req, res) => {
		db.User.update(
			{
        email: req.body.email,
        password: req.body.password
			},
			{
				where: {
					id: req.body.id,
				},
			}
		).then((dbUser) => res.json(dbUser));
	});
};




