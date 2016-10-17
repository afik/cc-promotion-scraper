 
var express = require('express');
var promotion = require('promotion')

var app = express();

const baseUrl = 'https://m.bnizona.com/index.php/category/index/promo';


app.get('/', function(req, res) {
	res.send('send GET request on {server}:8000/all to get all promo');
});

app.get('/all', function(req, res) {
	promotion.findAll(baseUrl).then(function(result) {
		res.setHeader('Content-Type', 'application/json');
		res.status(200).send(JSON.stringify(result), null, 4);
	});
});



var server = app.listen(8000, function(){
	var port = server.address().port;
	console.log('App listening at port %s', port);
});


