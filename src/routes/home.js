// Home route
const express = require('express');
const router = express.Router();
const controller = require('../controllers/home');

router.get("/nodejs", controller.nodejs);

router.get("/", controller.index);

module.exports = router;
