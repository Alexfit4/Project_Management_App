// Grabbing our models

const db = require("../models");

// Routes
module.exports = (app) => {
	app.get("/api/roles", (req, res) => {
		// * GET route for getting all of the roles
		db.Role.findAll({
			include: [
				{
					model: db.Employee,
				},
				{
					model: db.Manager,
				},
			],
		}).then((dbRoles) => res.json(dbRoles));
	});

	// * Find One
	app.get("/api/roles/:id", (req, res) => {
		// Here we add an "include" property to our options in our findOne query
		// We set the value to an array of the models we want to include in a left outer join
		db.Role.findOne({
			where: {
				id: req.params.id,
			},
			include: [
				{
					model: db.Employee,
				},
				{
					model: db.Manager,
				},
			],
		}).then((dbRoles) => res.json(dbRoles));
	});

	// * POST route for saving a new role
	app.post("/api/roles", (req, res) => {
		db.Role.create({
			title: req.body.title,
			salary: req.body.salary,
		}).then((dbRoles) => res.json(dbRoles));
	});

	// * DELETE route for deleting todos using the ID (req.params.id)
	app.delete("/api/roles:id", (req, res) => {
		// We just have to specify which todo we want to destroy with "where"
		db.Role.destroy({
			where: {
				id: req.params.id,
			},
		}).then((dbRoles) => res.json(dbRoles));
	});

	// * PUT route for updating roles. We can get the updated Roles data from req.body
	app.put("/api/roles", (req, res) => {
		db.Roles.update(
			{
				title: req.body.title,
				salary: req.body.salary,
			},
			{
				where: {
					id: req.body.id,
				},
			}
		).then((dbRoles) => res.json(dbRoles));
	});
};
