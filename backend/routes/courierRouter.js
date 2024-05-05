const express = require('express');
const router = express.Router();
const CouriersController = require('../controllers/CouriersController');

router.get('/count-couriers', CouriersController.countCouriers);
router.get('/get-all-couriers', CouriersController.getAllCouriers);
router.get('/get-delivered-couriers', CouriersController.getDeliveredCouriers);
router.post('/create-courier', CouriersController.createCourier);
router.get('/get-courier/:id', CouriersController.getCourierById);
router.put('/update-courier/:id', CouriersController.updateCourier);

module.exports = router;