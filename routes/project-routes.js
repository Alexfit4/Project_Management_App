const db = require('../models');

// Routes
module.exports = (app) => {
  app.get('/api/project', (req, res) => {
    const query = {};
    if (req.query.project_id) {
      query.ProjectId = req.query.project_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Project.findAll({
      where: {project_id: req.body.project_id},
      include: [db.Project],
    }).then((dbPost) => res.json(dbPost));
  });

    // POST route for saving a new post
    app.post('/api/project', (req, res) => {
        db.Project.create({name: req.body.name}).then((dbPost) => res.json(dbPost));
      });
}