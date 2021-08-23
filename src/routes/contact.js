// Contact route
const express = require('express');
const router = express.Router();
const controller = require('../controllers/contact');

router.get('/', controller.index);

module.exports = router;