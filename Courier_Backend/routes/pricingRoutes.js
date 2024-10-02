const express = require('express');
const { addPrice } = require('../controllers/pricingController')
const router = express.Router();

router.post('/pricing-cal', addPrice);

module.exports = router;

