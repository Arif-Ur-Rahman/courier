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
