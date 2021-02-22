// Dependencies
const path = require('path');

// Routes
module.exports = (app) => {
    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads view.html
    app.get('/', (req, res) =>
        res.sendFile(path.join(__dirname, '../public/index.html'))
    );

    // project route loads project.html
    app.get('/project', (req, res) =>
        res.sendFile(path.join(__dirname, '../public/project.html'))
    );

    app.get('/employee', (req, res) =>
        res.sendFile(path.join(__dirname, '../public/employeeTracker.html'))
    );

    app.get('/dashboard', (req, res) =>
        res.sendFile(path.join(__dirname, '../public/dashboard.html'))
    );

};
