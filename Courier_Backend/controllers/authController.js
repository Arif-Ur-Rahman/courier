// controllers/authController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');

dotenv.config();

// জেনারেট টোকেন
const generateToken = (userId, role) => {
    return jwt.sign({ userId, role }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// রেজিস্ট্রেশন
const registerUser = async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const user = await User.create({
            name,
            email,
            password,
            role,
        });

        const token = generateToken(user._id, user.role);

        res.status(201).json({
            token,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// // লগইন
// const loginUser = async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(400).json({ message: 'Invalid credentials' });
//         }

//         const isMatch = await user.matchPassword(password);
//         if (!isMatch) {
//             return res.status(400).json({ message: 'Invalid credentials' });
//         }

//         const token = generateToken(user._id, user.role, user.name, user.email);

//         res.json({
//             token,
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server Error' });
//     }
// };

// module.exports = { registerUser, loginUser };
const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Find user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password.' });
      }
  
      // Compare passwords (assuming you're using bcrypt)
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password.' });
      }
  
      // Generate JWT token with additional fields
      const token = jwt.sign(
        {
          userId: user._id,
          role: user.role,
          name: user.name,    // Include name
          email: user.email,  // Include email
        },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
  
      res.status(200).json({
        message: 'Login successful.',
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      });
    } catch (error) {
      console.error('Login Error:', error);
      res.status(500).json({ message: 'Server error during login.' });
    }
  };
  module.exports = { registerUser, loginUser };