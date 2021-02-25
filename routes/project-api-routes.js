const db = require("../models");

// Routes
module.exports = (app) => {
	// * GET route for getting all of the projects
	app.get("/api/project", (req, res) => {
		// const query = {};
		// if (req.query.employee_id) {
		// 	query.EmployeeId = req.query.employee_id;
		// }
		// findAll returns all entries for a table when used with no options
		db.Project.findAll({
			include: [
				{
					model: db.Employee,
					required: true,
				},
				{
					model: db.Manager,
				},
			],
		}).then((Project) => res.json(Project));
	});

	// * Finding one project
	app.get("/api/project/:id", (req, res) => {
		// Here we add an "include" property to our options in our findOne query
		// We set the value to an array of the models we want to include in a left outer join
		// In this case, just db.Post
		db.Project.findOne({
			where: {
				id: req.params.id,
			},
			include: [
				{
					model: db.Employee,
					required: true,
				},
				{
					model: db.Manager
				},
			],
		}).then((dbProject) => res.json(dbProject));
	});

	//* POST route for saving a new project
	app.post("/api/project", (req, res) => {
		db.Project.create({
			name: req.body.name,
			description: req.body.description,
		}).then((dbPost) =>
			res.json(dbPost)
		);
	});

	// * DELETE route for deleting Project using the ID (req.params.id)
	app.delete("/api/project:id", (req, res) => {
		// We just have to specify which project we want to destroy with "where"
		db.Project.destroy({
			where: {
				id: req.params.id,
			},
		}).then((dbProject) => res.json(dbProject));
	});

	// * PUT route for updating Projects. We can get the updated Project data from req.body
	app.put("/api/project", (req, res) => {
		db.Project.update(
			{
				name: req.body.name,
				description: req.body.description
			},
			{
				where: {
					id: req.body.id,
				},
			}
		).then((dbProject) => res.json(dbProject));
	});
};
