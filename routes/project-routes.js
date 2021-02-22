const db = require("../models");

// Routes
module.exports = (app) => {
<<<<<<< HEAD
	app.get("/api/project", async (req, res) => {
		db.Project.findAll({
			include: [db.Manager],
		}).then((dbPost) => res.json(dbPost));
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
=======
  app.get("/api/project", async (req, res) => {

    db.Project.findAll({})
      .then((dbPost) =>
        res.json(dbPost)
      );;
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
>>>>>>> 227ce2a90ecb6093259c50eadbf21832e746056a

  // POST route for saving a new post
  app.post("/api/project", (req, res) => {
    db.Project.create({ name: req.body.name }).then((dbPost) =>
      res.json(dbPost)
    );
  });
};
<<<<<<< HEAD
=======



// Routes
module.exports = (app) => {
  app.get('/api/project', (req, res) => {
    const query = {};

    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Project.findAll({
      where: query,
      include: [db.Author],
    }).then((result) => res.json(result));
  });

  // Get route for retrieving a single post
  app.get('/api/project/:id', (req, res) => {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Project.findOne({
      where: {
        id: req.params.id,
      },
      include: [db.Manager],
    }).then((result) => res.json(result));
  });

  // POST route for saving a new post
  app.post('/api/project', (req, res) => {
    db.Project.create({ name: req.body.name }).then((result) => res.json(result));
  });

  // DELETE route for deleting posts
  // app.delete('/api/project/:id', (req, res) => {
  //   db.Project.destroy({
  //     where: {
  //       id: req.params.id,
  //     },
  //   }).then((result) => res.json(result));
  // });

  // PUT route for updating posts
  app.put('/api/project', (req, res) => {
    db.Project.update(req.body, {
      where: {
        id: req.body.id,
      },
    }).then((result) => res.json(result));
  });
};
>>>>>>> 227ce2a90ecb6093259c50eadbf21832e746056a
