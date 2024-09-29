const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ParcelSchema = new Schema({
  phone: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    default: 'Dhaka City',
  },
  thana: {
    type: String,
    required: true,
  },
  codAmount: {
    type: Number,
    required: true,
  },
  invoice: {
    type: String,
    default: '',
  },
  note: {
    type: String,
    maxlength: 400,
  },
  weight: {
    type: Number,
    required: true,
  },
  exchange: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Parcel', ParcelSchema);
 
