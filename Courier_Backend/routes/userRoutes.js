const express = require('express');
const router = express.Router();
const { getUserById, updateUser, getAllUsers, deleteUser } = require('../controllers/userController');
router.get('/user', getAllUsers);
// GET user by ID
router.get('/user/:id', getUserById);

// PATCH update user by ID
router.patch('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

module.exports = router;
