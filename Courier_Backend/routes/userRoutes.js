const express = require('express');
const router = express.Router();
const { getUserById, updateUser, getAllUsers, deleteUser, getUserByEmail, updateUserProfile } = require('../controllers/userController');
router.get('/user', getAllUsers);
// GET user by ID
router.get('/user/:id', getUserById);
router.get('/user/email/:email', getUserByEmail);
router.patch('/user/update/:email', updateUserProfile);

// PATCH update user by ID
router.patch('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

module.exports = router;
