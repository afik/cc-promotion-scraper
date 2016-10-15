 
var express = require('express');
var promotion = require('promotion')

var app = express();

const baseUrl = 'https://m.bnizona.com/index.php/category/index/promo';


app.get('/', function(req, res) {
	res.send('Try server:8000/all or server:8000/promo/{category}');
});

app.get('/all', function(req, res) {
	promotion.findAll(baseUrl).then(function(result) {
		res.status(200).send(result);
	});
});



var server = app.listen(8000, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('App listening at http://%s:%s', host, port);
});


