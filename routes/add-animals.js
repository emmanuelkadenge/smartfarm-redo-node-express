const express = require('express');
const router  = express.Router();
const myControllers = require('../controllers/animals')

router.get('/add-animals',myControllers.getAnimalsController)
router.post('/view-animals',myControllers.postAnimalsController)

module.exports = router;