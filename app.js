const path = require('path');
const express = require('express');

const animalRouter = require('./routes/add-animals');
const plantsRouter = require('./routes/add-plants');
const indexPage = require('./routes/index-page');

const bodyParser = require('body-parser');
const app = express();

app.set('view engine','ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname,'public')));

app.use(animalRouter);
app.use(plantsRouter);
app.use(indexPage);

app.use((req, res, next) => {
    res.status(404).render('404',{pagetitle : '404 Nginx'})
})

app.listen('4000');
