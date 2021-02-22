// Grabbing our models

const db = require('../models');

// Routes
module.exports = (app) => {
    app.get('/api/roles', (req, res) => {
        // findAll returns all entries for a table when used with no options
        db.Role.findAll({include:[db.Employee]}).then((Employee) => res.json(Employee));
      });



      app.post('/api/roles', (req, res) => {
        db.Role.create({
          title: req.body.title,
          salary: req.body.salary,
          employee_id:req.body.employee_id        
        }).then((dbEmployee) => res.json(dbEmployee));
      });


}