const animals = []

exports.getAnimalsController = (req, res, next) => {
    res.render('add-animals',{pageTitle : ' Please Add Animals',path : '/add-animals'});
}

exports.postAnimalsController = (req, res, next) => {
    animals.push({Type :req.body.Type,Color : req.body.Color});
    const animalls = animals
    res.render('view-animals',{pageTitle : 'Please View Animals',anim :animalls, path: '/view-animals'});
}