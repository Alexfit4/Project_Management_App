// Dependencies

// Grabbing our models

const db = require("../models");

// Routes
module.exports = (app) => {
	// * GET route for getting all of the managers
	app.get("/api/managers", (req, res) => {
		// findAll returns all entries for a table when used with no options
		db.Manager.findAll({
			include: [
				{
					model: db.Project,
				},
				{
					model: db.Role,
				},
			],
		}).then((Manager) => res.json(Manager))
	});

	// * Finding one Manager and project associated with that manager
	app.get("/api/managers/:id", (req, res) => {
		// Here we add an "include" property to our options in our findOne query
		// We set the value to an array of the models we want to include in a left outer join
		// In this case, just db.Post
		db.Manager.findOne({
			where: {
				id: req.params.id,
			},
			include: [
				{
					model: db.Project,
				},
				{
					model: db.Role,
				},
			],
		}).then((dbAuthor) => res.json(dbAuthor));
	});

	// * POST route for saving a new manager
	app.post("/api/managers", (req, res) => {
		db.Manager.create({
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			role_id: req.body.role_id,
			project_id: req.body.project_id,
			email: req.body.email,
			password: req.body.password,
		}).then((dbManager) => res.json(dbManager));
	});

	// * DELETE route for deleting todos using the ID (req.params.id)
	app.delete("/api/managers:id", (req, res) => {
		// We just have to specify which todo we want to destroy with "where"
		db.Manager.destroy({
			where: {
				id: req.params.id,
			},
		}).then((dbManager) => res.json(dbManager));
	});

	// * PUT route for updating managers. We can get the updated manager data from req.body
	app.put("/api/managers", (req, res) => {
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

// Testing my link to the repo
