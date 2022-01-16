const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define our model
const modelSchema = new Schema({
  district: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'District',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  pincode: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt : { type : Date, default: Date.now },
  updatedAt : { type : Date, default: Date.now }
}, {
  usePushEach: true
});

mongoose.model('VaccinationCenter', modelSchema);
