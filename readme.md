# Credit Card Promotion Scraper

This project is a scraper for credit card promotion in https://m.bnizona.com/index.php/category/index/promo

## How to run

* Clone this repository
* Run `npm install`
* Run `npm start`
* Send GET request to `http://localhost:8000/all` to get all promotion

## Response 

Response will be presented as JSON data with format as follow:
```
[{
	"Category-1"	: [
		{
			"title" : 
			"link" : 
			"validUntil" :
			"thumbnail" :
			"image" :
			"merchant" : {
				"name" : 
				"logo" :
				"location" :
				"phone" :
			},
			"detail"
		},
		{
			"title" : 
			"link" : 
			"validUntil" :
			"thumbnail" :
			"image" :
			"merchant" : {
				"name" : 
				"logo" :
				"location" :
				"phone" :
			},
			"detail"
		}, etc

	]
},
{
	"Category-2"	: [
		{
			"title" : 
			"link" : 
			"validUntil" :
			"thumbnail" :
			"image" :
			"merchant" : {
				"name" : 
				"logo" :
				"location" :
				"phone" :
			},
			"detail"
		},
		{
			"title" : 
			"link" : 
			"validUntil" :
			"thumbnail" :
			"image" :
			"merchant" : {
				"name" : 
				"logo" :
				"location" :
				"phone" :
			},
			"detail"
		}, etc

	]
}, etc]
```

## License

[MIT license](http://opensource.org/licenses/MIT).