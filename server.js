
var express = require('express');
var app = express();

var request = require('request');
var path = require('path');

app.use(express.static(path.join(__dirname,'dist')));


var url = "https://offersvc.expedia.com/offers/v2/getOffers?scenario=deal-finder&page=foo&uid=foo&productType=Hotel"

app.get('/api/offers',function(req,res) {
  request(url, function(error, response, body) {
    var data=JSON.parse(body);
    res.json(data);
  });

});


var port = process.env.PORT || 4000;
app.listen(port, function () {
    console.log('...Server now listening on port ' + port);
  });