const express = require('express');
const router = express.Router();
const myController = require('../controllers/plants')

router.get('/add-plants',myController.getPlantsController)

router.post('/view-plants',myController.postPlantsController)

module.exports = router;