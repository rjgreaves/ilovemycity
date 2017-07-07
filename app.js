/**
 * Created by re375525 on 07/07/2017.
 */
var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('home', {
        headline: 'We believe that every city has something to say',
        title: 'iLoveMyCity!'
    });
});

app.get('/:city', function(req, res) {
    var cityName = req.param.city;
    var title, header
    var imageCount = 4;
    var headline = 'We believe that every city has something to say';

    switch(cityName) {
        case 'berlin':
            title = 'Berlin';
            header = 'Berlin: Where love is in the air';
            break;
        case 'paris' :
            title = 'Paris';
            header = 'Paris: Good talkers are only found in Paris';
            break;
        case 'madrid':
            title = 'Madrid';
            header = 'Madrid: Buzz, beautiful architecture and football';
            break;
        case 'london' :
            title = 'London';
            header = 'London: Sparkling, Still, Food, Gorgeous';
            break;
        case 'newyork' :
            title = 'New York';
            header = 'New York: come to New York to become someone new';
            break;

    }

    res.render('city', {
        title: title,
        headline: headline,
        city: cityName,
        numberOfImages: imageCount
    });

});

var port = process.env.PORT || 3000;

var server = app.listen(port, function(req, res) {
    console.log("Catch the action at http://localhost:" + port);
});