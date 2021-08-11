const plants = [];

exports.getPlantsController = (req, res, next) => {
    res.render('add-plants',{pageTitle : 'Please Add Plants', path: '/add-plats'})
}

exports.postPlantsController = (req, res, next) => {
    plants.push({Type : req.body.Type,Color : req.body.Color,Price : req.body.Price})
    const plantss = plants;
    res.render('view-plants',{pageTitle : 'Please View Plants',plan : plantss,path: '/view-plants'})
}