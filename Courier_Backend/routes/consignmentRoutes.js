const express = require('express');
const { addConsignment, getAllConsignments, getConsignmentById } = require('../controllers/consignmentController');
const router = express.Router();

// Add a new consignment
router.post('/consignment', addConsignment);
// Get all consignments
router.get('/consignment', getAllConsignments);
router.get('/consignment/:id', getConsignmentById);

module.exports = router;


 
   