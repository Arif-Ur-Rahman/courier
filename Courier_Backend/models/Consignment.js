const mongoose = require('mongoose');

const consignmentSchema = new mongoose.Schema({
  sphone: { type: Number, required: true },
  rphone: { type: Number, required: true },
  sname: { type: String, required: true },
  rname: { type: String, required: true },
  semail: { type: String, required: true },
  remail: { type: String, required: true },
  saddress: { type: String, required: true },
  raddress: { type: String, required: true },
  sdistrict: { type: String, required: true },
  rdistrict: { type: String, required: true },
  codAmount: { type: Number, required: true },
  invoice: { type: Number, required: true },
  note: { type: String },
  weight: { type: Number, required: true },
  dtype: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Consignment = mongoose.model('Consignment', consignmentSchema);

module.exports = Consignment;
