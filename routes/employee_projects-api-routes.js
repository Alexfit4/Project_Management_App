// // Grabbing our models
// // const { body, validationResult } = require('express-validator');

// const db = require("../models");

// // Routes
// module.exports = (app) => {
// 	// * GET route for getting all of the employees
// 	app.get("/api/employee_projects", (req, res) => {
// 		// findAll returns all entries for a table when used with no options
// 		db.Employee_Projects.findAll({
// 			include: [
// 				{
// 					model: db.Project,
// 				},
// 				{
// 					model: db.Employee,
// 				},
// 			]
// 		}).then((Employee) => res.json(Employee));
// 	});

// 	app.get("/api/employee_projects/:id", (req, res) => {
// 		// Here we add an "include" property to our options in our findOne query
// 		// We set the value to an array of the models we want to include in a left outer join
// 		// In this case, just db.Post
// 		db.Employee_Projects.findOne({
// 			where: {
// 				email: req.params.id,
// 			},
// 			include: [
// 				{
// 					model: db.Project,
// 				},
// 				{
// 					model: db.Role,
// 				},
// 			],
// 		}).then((dbEmployee) => res.json(dbEmployee));
// 	});

// 	//* POST route for saving a new employee
// 	app.post("/api/employee_projects", (req, res) => {
// 		db.Employee_Projects.create({
// 			ProjectId: req.body.ProjectId,
// 			EmployeeId: req.body.EmployeeId,
// 		})
// 			.then((dbEmployee) => res.json(dbEmployee))
// 			.catch(function (err) {
// 				// print the error details
// 				console.log(err);
// 			});
// 	});

// 	//* DELETE route for deleting todos using the ID (req.params.id)
// 	app.delete("/api/employee_projects/:id", (req, res) => {
// 		//* We just have to specify which todo we want to destroy with "where"
// 		db.Employee_Projects.destroy({
// 			where: {
// 				id: req.params.id,
// 			},
// 		}).then((dbEmployee) => res.json(dbEmployee));
// 	});

// 	app.delete("/api/employee_projects/:id", (req, res) => {
// 		//* We just have to specify which todo we want to destroy with "where"
// 		db.Employee_Projects.destroy({
// 			where: {
// 				id: req.params.id,
// 			},
// 		}).then((dbEmployee) => res.json(dbEmployee));
// 	});


	//* PUT route for updating Employees. We can get the updated Employee data from req.body
	app.put("/api/employee_projects", (req, res) => {
		db.Employee_Projects.update(
			{
				ProjectId: req.body.ProjectId,
				EmployeeId: req.body.EmployeeId,
			},
			{
				where: {
					id: req.body.id,
				},
			}
		).then((dbEmployee) => res.json(dbEmployee));
	});

};

// 	// * PUT route for updating Employees. We can get the updated Employee data from req.body
// 	app.put("/api/employee_projects", (req, res) => {
// 		db.Employee_Projects.update(
// 			{
// 				ProjectId: req.body.ProjectId,
// 				EmployeeId: req.body.EmployeeId,
// 			},
// 			{
// 				where: {
// 					id: req.body.id,
// 				},
// 			}
// 		).then((dbEmployee) => res.json(dbEmployee));
// 	});
// };

