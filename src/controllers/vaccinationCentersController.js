const mongoose = require('mongoose');
const District = mongoose.model('District');
const VaccinationCenter = mongoose.model('VaccinationCenter');

// Show VaccinationCenter action
exports.show = function(req, res, next) {
  VaccinationCenter.findOne({ _id: req.params.id })
    .populate('district')
    .then(vaccinationCenter => {
      return res.status(200).send(vaccinationCenter);
    })
    .catch(error => {
      return res.status(400).send({ error: 'Unable to find this resource' });
    })
}

// Create VaccinationCenter action
exports.create = function(req, res, next) {
  // Find district
  District.findOne({ _id: req.body.district })
    .then(district => {
      // Create vaccinationCenter
        const vaccinationCenter = new VaccinationCenter({
          district: district,
          name: req.body.name,
          pincode: req.body.pincode,
          address: req.body.address,
          isActive: req.body.isActive
        })
        vaccinationCenter.save(function(error, savedObject) {
          if(error) {
            return res.status(422).send({ message: 'Unable to save this vaccination center', error: error })
          } else {
            return res.status(200).send(savedObject)
          }
        })
    })
    .catch(error => {
      return res.status(400).send({ error: 'Invalid District' });
    })
}

// Update VaccinationCenter action
exports.update = function(req, res, next) {
  // TODO
}

// Delete VaccinationCenter action
exports.destroy = function(req, res, next) {
  // TODO
}
