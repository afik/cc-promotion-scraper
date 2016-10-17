 
var express = require('express');
var promotion = require('promotion')

var app = express();

const baseUrl = 'https://m.bnizona.com/index.php/category/index/promo';


app.get('/', function(req, res) {
	res.send('send GET request on {server}:8000/all to get all promo');
});

app.get('/all', function(req, res) {
	promotion.getAllPromo(baseUrl).then(function(result) {
		res.setHeader('Content-Type', 'application/json');
		res.status(200).send(JSON.stringify(result), null, 4);
	}).catch(function(err) {
		console.error(err);
		var errMsg = {
			'error' : 'Error has been encountered, check log for further info.'
		}
		res.status(500).send(errMsg);
	});
});

var server = app.listen(8000, function(){
	var port = server.address().port;
	console.log('App listening at port %s', port);
});


