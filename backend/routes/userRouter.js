const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.get('/users', UserController.getAllUsers);
router.post('/users', UserController.createUser);
router.get('/users/:id', UserController.getUserById);
router.put('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);
router.post('/login', UserController.loginUser);

module.exports = router;