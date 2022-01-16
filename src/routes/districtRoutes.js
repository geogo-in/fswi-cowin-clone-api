const req = require('express/lib/request');

const districtsController = require('../controllers/districtsController');

module.exports = (app) => {
  //adaptive practive routes 
  app.get('/districts/:id', districtsController.show);
  app.post('/districts', districtsController.create);
  app.put('/districts/:id', districtsController.update);
  app.delete('/districts/:id', districtsController.destroy);
  app.get('/districts/:id/vaccinationcenters', districtsController.vaccinationCenters);
}
