require("dotenv").config();
const express = require("express");
const path = require("path");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");

// Sets up the Express App
const app = express();

if (process.env.JAWSDB_URL) {
	var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	var connection = mysql.createConnection({
		host: "localhost",
		user: "root",
		passwor: "password",
		database: "projectManagement_db",
	});
}

const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
const db = require("./models");
const expbs = require("express-handlebars");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

app.engine(
	"handlebars",
	expbs({
		defaultLayout: "main",
		layoutsDir: path.join(__dirname, "views/layouts"),
	})
);
app.set("view engine", "handlebars");

// Passport
app.use(
	session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Routes
require("./routes/html-routes")(app);
require("./routes/manager-api-routes.js")(app);
require("./routes/project-api-routes.js")(app);
require("./routes/employee-api-routes.js")(app);
require("./routes/roles-api-routes.js")(app);
require("./routes/api-routes.js")(app);
require("./routes/users-api-routes.js")(app);
require("./routes/employee_projects-api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync().then(() => {
	app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
});
