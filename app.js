/**
 * Created by re375525 on 07/07/2017.
 */
var express = require('express');
var app = express();

var routes = require('./routes/route');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', routes.home);

app.get('/:city', routes.city);

var port = process.env.PORT || 8080;

var server = app.listen(port, function(req, res) {
    console.log("Catch the action at http://localhost:" + port);
});