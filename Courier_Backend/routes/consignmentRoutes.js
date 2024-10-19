const express = require('express');
const { addConsignment, getAllConsignments, getConsignmentById, updateConsignment, deleteConsignment, approveConsignment, rejectConsignment } = require('../controllers/consignmentController');
const router = express.Router();

// Add a new consignment
router.post('/consignment', addConsignment);
// Get all consignments
router.get('/consignment', getAllConsignments);
router.get('/consignment/:id', getConsignmentById);
router.patch('/consignment/:id', updateConsignment);
router.delete('/consignment/:id', deleteConsignment);
router.patch('/consignment/:id/approve', approveConsignment);
router.patch('/consignment/:id/reject', rejectConsignment);
module.exports = router;


 
   