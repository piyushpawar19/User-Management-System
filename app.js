const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const mysql = require('mysql');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//parsing middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//static files
app.use(express.static('public'));

//templates engine

app.engine('handlebars', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    }))

    app.set('view engine','handlebars');
//navigation
app.get('',(req, res)=>{
    res.render('home')
})

app.listen(port, ()=>{
    console.log(`listening on ${port}`);
});