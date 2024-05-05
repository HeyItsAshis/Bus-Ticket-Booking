const express = require('express');
const router = express.Router();
const CustomerController = require('../controllers/CustomerController');

router.get('/get-all-customers', CustomerController.getAllCustomers);
router.post('/create-customer', CustomerController.createCustomer);
// router.get('/users/:id', UserController.getUserById);
// router.put('/users/:id', UserController.updateUser);
// router.delete('/users/:id', UserController.deleteUser);
// router.post('/login', UserController.loginUser);

module.exports = router;