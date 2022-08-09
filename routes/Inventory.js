const express = require('express');

const getItems = require('../controllers/getItems');
const deleteItem = require('../controllers/deleteItem');
const addItem = require('../controllers/addItem');
const router = express.Router();


router.get('/inventory',getItems);
router.delete('/inventory',deleteItem);
router.post('/inventory',addItem);
module.exports = router;