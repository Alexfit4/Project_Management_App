const cTable = require("console.table");
const mysql = require("mysql");
const inquirer = require("inquirer");


//* Connection
const connection = mysql.createConnection({
	host: "localhost",

	port: 3306,

	user: "root",

	password: "password",
	database: "projectManagement_db",
});

//* Starter Questions.
const runSearch = () => {
	inquirer
		.prompt({
			name: "action",
			type: "rawlist",
			message: "What would you like to do?",
			choices: [
				"View View",
				"View Employee",
				"View Log in",
			],
		})
		.then((answer) => {
			switch (answer.action) {
				case "View Data":
					viewAll();
					break;
				case "View Employee":
					viewEmployee();
					break;
				case "View Log in":
					viewLogIn();
					break;
				default:
					console.log(`Invalid action: ${answer.action}`);
					break;
			}
		});
};

const viewEmployee = () => {
	const query = "SELECT * FROM employee";
	connection.query(query, (err, res) => {
		console.table(res);
	});
};




const viewAll = () => {
	const query = "SELECT employee.id, employee.first_name, employee.last_name, role.title, project.project, role.salary, CONCAT(e.first_name, ' ', e.last_name) AS Manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN project ON project.id = role.project_id LEFT JOIN employee e ON e.id = employee.manager_id";
	connection.query(query, (err, res) => {
		console.table(res);
	});
};


const viewLogIn = () => {
	const query = "SELECT first_name, last_name, email, password FROM employee";
	connection.query(query, (err, res) => {
		console.table(res);
	});
};

