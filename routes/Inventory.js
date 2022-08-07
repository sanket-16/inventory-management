const express = require('express');

const inventoryController = require('../controllers/inventoryController');


const router = express.Router();


router.get('/inventory',inventoryController)

module.exports = router;