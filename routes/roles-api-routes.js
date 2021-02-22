// Grabbing our models

const db = require("../models");

// Routes
module.exports = (app) => {
	app.get("/api/roles", (req, res) => {
		// findAll returns all entries for a table when used with no options
		db.Role.findAll({
			include: [
				{
					model: db.Employee,
					
				},
				{
					model: db.Manager,
				},
			],
		}).then((Employee) => res.json(Employee));
	});

	// * Find One
	app.get("/api/roles/:id", (req, res) => {
		// Here we add an "include" property to our options in our findOne query
		// We set the value to an array of the models we want to include in a left outer join
		// In this case, just db.Post
		db.Role.findOne({
			where: {
				id: req.params.id,
			},
			include: [
				{
					model: db.Employee,
					required: true,
				},
				{
					model: db.Manager,
				},
			],
		}).then((dbProject) => res.json(dbProject));
	});

	app.post("/api/roles", (req, res) => {
		db.Role.create({
			title: req.body.title,
			salary: req.body.salary,
			employee_id: req.body.employee_id,
		}).then((dbEmployee) => res.json(dbEmployee));
	});
};
