require('dotenv').config()
const express = require('express');
const path = require('path');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
const db = require('./models');
const expbs = require('express-handlebars')

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static('public'));

<<<<<<< HEAD
// Import handlebars
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Set the route
const routes = require('./controllers/controller')

app.use(routes);

// Routes
require('./routes/html-routes.js')(app);
require('./routes/api-routes.js')(app);
require('./routes/project-routes.js')(app);
require('./routes/employee-routes.js')(app);
=======
app.engine('handlebars', expbs({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views/mainLayout' )
}))



// Routes
require('./routes/html-routes')(app);
require('./routes/manager-api-routes.js')(app);
require('./routes/project-api-routes.js')(app);
require('./routes/employee-api-routes.js')(app);
require('./routes/roles-api-routes.js')(app);
>>>>>>> 9fafe08a2febfad569f3ea08cc51c27da4bb0939

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
});
