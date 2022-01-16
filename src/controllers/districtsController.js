const mongoose = require('mongoose');
const State = mongoose.model('State');
const District = mongoose.model('District');
const VaccinationCenter = mongoose.model('VaccinationCenter');

// Show District action
exports.show = function(req, res, next) {
  District.findOne({ _id: req.params.id })
    .then(district => {
      return res.status(200).send(district);
    })
    .catch(error => {
      return res.status(400).send({ error: 'Unable to find this resource' });
    })
}

// Create District action
exports.create = function(req, res, next) {
  // Find state
  State.findOne({ _id: req.body.state })
    .then(state => {
      // Create district
        const district = new District({
          state: state,
          name: req.body.name,
          isActive: req.body.isActive
        })
        district.save(function(error, savedObject) {
          if(error) {
            return res.status(422).send({ message: 'Unable to save this vaccination center', error: error })
          } else {
            return res.status(200).send(savedObject)
          }
        })
    })
    .catch(error => {
      return res.status(400).send({ error: 'Invalid State' });
    })
}
// Update District action
exports.update = function(req, res, next) {
  // TODO
}

// Delete District action
exports.destroy = function(req, res, next) {
  // TODO
}

// District vaccinationCenters
exports.vaccinationCenters = function(req, res, next) {
  console.log(req.params.id)
  // Find district
  District.findOne({ _id: req.params.id })
    .then(district => {
      VaccinationCenter.find({ district: district }, function(error, objects) {
        if(error) {
          res.status(422).send({ error: 'Unable to fetch vaccination centers '})
        } else {
          res.status(200).send(objects)
        }
      })  
    })
    .catch(error => {
      return res.status(400).send({ error: 'Unable to find this resource' });
    })
}