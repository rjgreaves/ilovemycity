/**
 * Created by re375525 on 07/07/2017.
 */
exports.home = function(req, res) {
    res.render('home', {
        headline: 'We believe that every city has something to say',
        title: 'iLoveMyCity!'
    });
}


exports.city = function(req, res) {

    var cityName = req.params.city;
    var title
    var imageCount = 4;
    var headline = 'We believe that every city has something to say';

    switch (cityName) {
        case 'berlin':
            title = 'Berlin';
            headline = 'Berlin: Where love is in the air';
            break;
        case 'paris' :
            title = 'Paris';
            headline = 'Paris: Good talkers are only found in Paris';
            break;
        case 'madrid':
            title = 'Madrid';
            headline = 'Madrid: Buzz, beautiful architecture and football';
            break;
        case 'london' :
            title = 'London';
            headline = 'London: Sparkling, Still, Food, Gorgeous';
            break;
        case 'newyork' :
            title = 'New York';
            headline = 'New York: come to New York to become someone new';
            break;

    }

    res.render('city', {
        title: title,
        headline: headline,
        city: cityName,
        numberOfImages: imageCount
    });

}
