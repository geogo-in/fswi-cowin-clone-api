const mongoose = require('mongoose');
const State = mongoose.model('State');
const District = mongoose.model('District');

// List States action
exports.index = function(req, res, next) {
  State.find({}, function(error, objects) {
    if(error) {
      res.status(422).send({ error: 'Unable to fetch categories '})
    } else {
      res.status(200).send(objects)
    }
  })
}

// Show State action
exports.show = function(req, res, next) {
  State.findOne({ _id: req.params.id })
    .then(state => {
      return res.status(200).send(state);
    })
    .catch(error => {
      return res.status(400).send({ error: 'Unable to find this resource' });
    })
}
// Create State action
exports.create = function(req, res, next) {
  const state = new State({
    name: req.body.name,
    isActive: req.body.isActive
  })
  state.save(function(error, savedObject) {
    if(error) {
      return res.status(422).send({ message: 'Unable to save this state', error: error })
    } else {
      return res.status(200).send(savedObject)
    }
  })
}

// Update State action
exports.update = function(req, res, next) {
  // TODO
}

// Delete State action
exports.destroy = function(req, res, next) {
  // TODO
}

// State Districts
exports.districts = function(req, res, next) {
  console.log(req.params.id)
  // Find state
  State.findOne({ _id: req.params.id })
  .then(state => {
    District.find({ state: state }, function(error, objects) {
      if(error) {
        res.status(422).send({ error: 'Unable to fetch Districts '})
      } else {
        res.status(200).send(objects)
      }
    })  
  })
  .catch(error => {
    return res.status(400).send({ error: 'Unable to find this resource' });
  })
}