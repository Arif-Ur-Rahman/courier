const Consignment = require('../models/Consignment');

exports.addConsignment = async (req, res) => {
    try {
      const consignmentData = req.body; // Array of consignment objects
      console.log(consignmentData);
  
      // Use insertMany to add multiple consignment records at once
      await Consignment.insertMany(consignmentData);
  
      res.status(200).json({ message: 'Consignment data uploaded successfully' });
    } catch (error) {
      console.error('Error processing consignment data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

 
exports.getAllConsignments = async (req, res) => {
    try {
        const consignments = await Consignment.find({});
        res.status(200).json(consignments);
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching consignment',
            error: error.message,
        });
    }
};

// get consignment by ID;
exports.getConsignmentById = async (req, res) => {
    try {
        const consignmentId = req.params.id;
        const consignment = await Consignment.findById(consignmentId);

        if (!consignment) {
            return res.status(404).json({
                message: 'Consignment  not found'});
            }
        res.status(200).json(consignment); 
        } catch (error) {
            res.status(500).json({
                message: 'Error fetching consignment',
                error: error.message,
            });
        }
    };
//  consignment update by ID
exports.updateConsignment = async (req, res) => {
    const consignmentId = req.params.id;
    const updates = req.body;
    try {
        const consignment = await Consignment.findByIdAndUpdate(consignmentId, updates, {
            new: true,
            runValidators: true,
            context: 'query'
        });
        if (!consignment) {
            return res.status(404).json({message: 'Consign not found.'});

        }
        res.status(200).json({
            message: 'Consignment updated successfully.',consignment
        });
      

         
    } catch (error) {
        console.error('Error updating consignment:', error);
        // invalid objectError
        if (error.kind === 'ObjectId') {
            return res.status(400).json({ message: 'Invalid consignment ID.' });
          }
      
          // Handle validation errors
          if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({ message: 'Validation Error.', errors: messages });
          }
      
          // Generic server error
          res.status(500).json({ message: 'Server Error. Unable to update consignment.' });
        }
      };