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

const viewEmployee = () => {
	const query = "SELECT * FROM employee";
	connection.query(query, (err, res) => {
		console.table(res);
	});
};

viewEmployee()