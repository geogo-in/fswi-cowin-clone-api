const vaccinationCentersController = require('../controllers/vaccinationCentersController');

module.exports = (app) => {
  app.get('/', function(req, res, next) {
    res.send({ ping: 'FSWI CoWin Clone API' });
  });
  //adaptive practive routes 
  app.get('/vaccinationcenters/:id', vaccinationCentersController.show);
  app.post('/vaccinationcenters', vaccinationCentersController.create);
  app.put('/vaccinationcenters/:id', vaccinationCentersController.update);
  app.delete('/vaccinationcenters/:id', vaccinationCentersController.destroy);
}
