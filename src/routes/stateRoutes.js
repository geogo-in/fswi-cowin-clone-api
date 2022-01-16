const statesController = require('../controllers/statesController');

module.exports = (app) => {
  //adaptive practive routes 
  app.get('/states', statesController.index);
  app.get('/states/:id', statesController.show);
  app.post('/states', statesController.create);
  app.put('/states/:id', statesController.update);
  app.delete('/states/:id', statesController.destroy);
  app.get('/states/:id/districts', statesController.districts);
}
