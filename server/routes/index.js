const routes = require('express').Router();
const ObjectID = require('mongodb').ObjectID;
const User = require('./../model/user').User;

// GET /api/users
routes.get('/api/users', (req, res) => {
  User.find().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

// POST /api/users
routes.post('/api/users', (req, res) => {
   const user = new User({
     firstname: req.body.firstname,
     lastname: req.body.lastname,
     email: req.body.email
   });
   
  user.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

// DELETE /api/users
routes.delete('/api/users', (req, res) => {
  const id = req.body.id;
  
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  User.findOneAndRemove({_id: id}).then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
  
});

module.exports = routes;