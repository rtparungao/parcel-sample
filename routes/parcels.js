var express = require('express');
var router = express.Router();

var parcelController = require('../app/controllers/ParcelController');

/* GET users listing. */
router.post('/postage', parcelController.getPostage);

module.exports = router;
