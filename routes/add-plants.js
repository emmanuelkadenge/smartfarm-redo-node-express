const express = require('express');
const router = express.Router();
const plants = [];

router.get('/add-plants',(req, res, next) => {
    res.render('add-plants',{pageTitle : 'Please Add Plants'})
})

router.post('/view-plants',(req, res, next) => {
    plants.push({Type : req.body.Type,Color : req.body.Color})
    const plantss = plants;
    res.render('view-plants',{pageTitle : 'Please View Plants'})
})

module.exports = router;