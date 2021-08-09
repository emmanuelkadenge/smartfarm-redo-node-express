const express = require('express');
const router  = express.Router();
const animals = [];

router.get('/add-animals',(req, res, next) => {
    res.render('add-animals',{pageTitle : ' Please Add Animals'});
})
router.post('/view-animals',(req, res, next) => {
    animals.push({Type :req.body.Type,Color : req.body.Color});
    const animalls = animals
    res.render('view-animals',{pageTitle : 'Please View Animals',anim :animalls});
})

module.exports = router;