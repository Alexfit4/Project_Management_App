// Dependencies
const path = require('path');

// Routes
module.exports = (app) => {
    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads view.html
    app.get('/', (req, res) =>
        res.sendFile(path.join(__dirname, '../views/login.html'))
    );

    // project route loads project.html
    app.get('/project', (req, res) =>
        res.sendFile(path.join(__dirname, '../views/project.html'))
    );

    app.get('/employee', (req, res) =>
        res.sendFile(path.join(__dirname, '../views/employeeTracker.html'))
    );

    app.get('/dashboard', (req, res) =>
        res.sendFile(path.join(__dirname, '../views/dashboard.html'))
    );

    app.get('/about', (req, res) => {
        const dev = {
            contributors : [
                {
                    name: "Johnnie Simpson",
                    github: "balokdecoy",
                    email: "johnniesimpson88@gmail.com",
                    avatar: "insert file path",
                },
                {
                    name: "Amir Ashtiany",
                    github: "Alexfit4",
                    email: "amir@gmail.com",
                    avatar: "insert file path",
                }
            ],
        }
        res.render('about', dev)
    }
    );

    // insert app.get() hbsObject function contributors: data, avatar loop, 

};
