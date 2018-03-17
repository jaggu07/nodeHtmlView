var express = require("express");
var swig = require("swig");
var bodyParser = require("body-parser");
var cons = require('consolidate');

var app = express();
app.engine('html', cons.swig)
app.set('view engine','html');
app.set('views',__dirname+'/views');
//app.use(bodyParser.urlencoded({extended: false}));

app.get('/',function(req,res){
    res.render('index');
})


app.listen(2018,function(req,res){
    console.log("listening...")
})