const Parcel = require('../models/Parcel');


// Controller to add a parcel
exports.addParcel = async (req, res) => {
  try {
    const parcelData = req.body;

    // Create a new parcel using Mongoose model
    const newParcel = new Parcel(parcelData);
    await newParcel.save();

    res.status(201).json({
      message: 'Parcel added successfully',
      parcel: newParcel,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error adding parcel',
      error: error.message,
    });
  }
};

// Controller to get all parcels (optional)
exports.getAllParcels = async (req, res) => {
  try {
    const parcels = await Parcel.find({});
    res.status(200).json(parcels);
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching parcels',
      error: error.message,
    });
  }
};

// ............
// Controller to get parcel by ID
exports.getParcelById = async (req, res) => {
  try {
    const parcelId = req.params.id;
    const parcel = await Parcel.findById(parcelId);

    if (!parcel) {
      return res.status(404).json({ message: 'Parcel not found' });
    }

    res.status(200).json(parcel);
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching parcel',
      error: error.message,
    });
  }
};

 


