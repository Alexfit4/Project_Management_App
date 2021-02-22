const db = require("../models");

// Routes
module.exports = (app) => {
  app.get('/api/project', (req, res) => {
    // findAll returns all entries for a table when used with no options
    db.Project.findAll({include:[db.Manager]}).then((Manager) => res.json(Manager));
  });

	app.get("/api/project/:id", (req, res) => {
		// Here we add an "include" property to our options in our findOne query
		// We set the value to an array of the models we want to include in a left outer join
		// In this case, just db.Post
		db.Project.findOne({
			where: {
				id: req.params.id,
			},
			include: [db.Post],
		}).then((dbProject) => res.json(dbProject));
	});


  app.get('/api/project/:id', (req, res) => {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Project.findOne({
      where: {
        id: req.params.id,
      },
      include: [db.Manager],
    }).then((result) => res.json(dbAuthor));
  });

  // POST route for saving a new post
  app.post("/api/project", (req, res) => {
    db.Project.create({ name: req.body.name }).then((dbPost) =>
      res.json(dbPost)
    );
  });
};


