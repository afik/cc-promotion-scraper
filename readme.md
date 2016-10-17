# Credit Card Promotion Scrapper

This project 

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