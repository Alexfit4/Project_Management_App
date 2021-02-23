require('dotenv').config()
const express = require('express');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
const db = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static('public'));

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

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
});
