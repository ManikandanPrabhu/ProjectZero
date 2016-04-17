var express = require('express');
var app = express();
var path = require('path');

// __dirname will use the current path from where you run this file 

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, '/views')));

//set view engine as JADE TEMplate engine
//

app.listen(8000);
console.log('Listening on port 8000');

// START::: To load the template engine as Jade from views directory
// set the template engine to jade
app.set('view engine', 'jade');

  //app.set('view engine', 'html');
app.get('/parallax', function (req,res) {
  res.render('parallax');
});
app.get('/isolate', function (req,res) {
  res.render('isolate');
});
app.get('/sample', function (req,res) {
  res.render('sample');
});

// END :: to load the template engine as jade