const express = require('express');
const { addParcel, getAllParcels } = require('../controllers/parcelController');
const router = express.Router();

// Add a new parcel
router.post('/parcels', addParcel);

// Get all parcels (optional)
router.get('/parcels', getAllParcels);

module.exports = router;
