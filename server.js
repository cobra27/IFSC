var express = require('express');
var path = require('path');
var app = express();
const port = process.env.PORT || 5000;

var router = require('./app/routes');
app.set('view engine', 'ejs');
app.use('/', router);

// app.use(express.static(path.join(__dirname + 'public')));
app.use(express.static( __dirname + '/public/'));
app.listen(port, function(){
    console.log("app started");
});
