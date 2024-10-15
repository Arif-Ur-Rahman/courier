
// Controller to add a parcel
 
  //   const parcelData = req.body;

  //   // Create a new parcel using Mongoose model
  //   const newParcel = new Parcel({parcelData, userId: req.user.id,});
  //   await newParcel.save();

  //   res.status(201).json({
  //     message: 'Parcel added successfully',
  //     parcel: newParcel,
  //   });
  // } catch (error) {
  //   res.status(500).json({
  //     message: 'Error adding parcel',
  //     error: error.message,
  //   });
  // }
  // controllers/parcelController.js
  const Parcel = require('../models/Parcel');

  // Controller to add a parcel
  exports.addParcel = async (req, res) => {
    try {
      const {
        sphone,
        rphone,
        sname,
        rname,
        semail,
        remail,
        saddress,
        raddress,
        sdistrict,
        rdistrict,
        codAmount,
        invoice,
        note,
        weight,
        exchange,
        dtype
      } = req.body;
  
      // Validate required fields
      if (
        !sphone || !rphone || !sname || !rname ||
        !semail ||
        !remail || !saddress || !raddress ||
        !sdistrict || !rdistrict || !weight
      ) {
        return res.status(400).json({ message: 'Please provide all required fields.' });
      }
  
      const newParcel = new Parcel({
        sphone,
        rphone,
        sname,
        rname,
        semail,
        remail,
        saddress,
        raddress,
        sdistrict,
        rdistrict,
        codAmount,
        invoice,
        note,
        weight,
        exchange,
        dtype,
        userEmail: req.user.email, // Ensure req.user is populated
      });
  
      const savedParcel = await newParcel.save();
  
      res.status(201).json({ parcel: savedParcel });
    } catch (error) {
      console.error('Error adding parcel:', error);
      res.status(500).json({ message: 'Server error while adding parcel.', error: error.message });
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

// Find parcel based on user ID .......
exports.getParcelByUserId = async (req, res) => {
  try {
    const parcels = await Parcel.find({ userEmail: req.user.email }).sort({ createdAt: -1});
    res.json({ parcels });
  } catch (error) {
    console.error('Error fetching parcels:', error);
    res.status(500).json({ message: 'Server error while fatching parcels'});
  }

}

 


