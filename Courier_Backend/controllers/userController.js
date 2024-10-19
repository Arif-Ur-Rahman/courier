const User = require('../models/User');  // Adjust the path to your model


getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching users',
            error: error.message,
        });
    }
};
// get by user ID
getUserById = async (req, res) => {
    const userId = req.params.id;
    try {
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      }
      res.status(200).json(user);
    } catch (error) {
      if (error.kind === 'ObjectId') {
        return res.status(400).json({ message: 'Invalid user ID.' });
      }
      res.status(500).json({ message: 'Error fetching user data.' });
    }
  };
  
// update user..............
updateUser = async (req, res) => {
    const userId = req.params.id;
    const updates = req.body;
    try {
        const user = await User.findByIdAndUpdate(userId, updates, {
            new: true,
            runValidators: true,
            context: 'query'
        });
        if (!user) {
            return res.status(404).json({message: 'User not found.'});

        }
        res.status(200).json({
            message: 'User updated successfully.',user
        });
      

         
    } catch (error) {
        console.error('Error updating user:', error);
        // invalid objectError
        if (error.kind === 'ObjectId') {
            return res.status(400).json({ message: 'Invalid user ID.' });
          }
      
          // Handle validation errors
          if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({ message: 'Validation Error.', errors: messages });
          }
      
          // Generic server error
          res.status(500).json({ message: 'Server Error. Unable to update user.' });
        }
      };
    
// delete user by id....
// delete user by id
deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedUser = await User.findByIdAndDelete(id);  // Use 'User' instead of 'user'
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        // Handle Invalid ObjectId error
        if (error.kind === 'ObjectId') {
            return res.status(400).json({ message: 'Invalid user ID' });
        }
        // Generic server error
        res.status(500).json({ message: 'Server Error. Unable to delete' });
    }
};


module.exports = {
    getAllUsers,
    updateUser,
    getUserById,
    deleteUser
};
