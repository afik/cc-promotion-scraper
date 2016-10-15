var request = require('request-promise');
var cheerio = require('cheerio');

function listCategory(url) {
	return request(url)
		.then(function(result) {
			var category = [];
			var $ = cheerio.load(result);

			$('.menu').find('li').each(function(idx, elem) {
				category.push({
					'link': $(elem).find('a').attr('href'),
					'title': $(elem).find('a').text()
				});
			});

			return category;
		});
}

function listPromo(category) {
	return request(category.link)
		.then(function(result) {
			var promo = [];
			var $ = cheerio.load(result);

			$('.list2').find('li').each(function(idx, elem) {
				var detail = $(elem).find('a');

				var link = $(detail).attr('href');
				console.log(link);
				var detail = detailPromo(link).then(function(result) {
					return result;
				});

				console.log(detail);

				promo.push({	
					'detailLink' : link,
					'imgTumb' : $(detail).find('img').attr('src'),
					'merchantName' : $(detail).children('.merchant-name').text(),
					'promoTitle' : $(detail).children('.promo-title').text(),
					'validUntil' : $(detail).children('.valid-until').text(),
					'detail' : detail
				});
			});	

			var categoryDetail = {};
			categoryDetail[category.title] = JSON.stringify(promo);
			return categoryDetail;
		});
}

function detailPromo(promo) {
	return request(promo)
		.then(function(result) {
			var detail = {}
			var $ = cheerio.load(result);

			detail.image = $('#banner').find('img').attr('src');
			detail.detail = $('#merchant-detail').find('p').text();
			detail.merchant_location = {
				'logo' : $('.merchant').find('img').attr('src'),
				'name' : $('.merchant').find('h5').text(),
				'location' : $('.merchant').find('p').text(),
				'phone' : $('.merchant').find('p').next('p').text()
			};
			return detail;
		});
}


exports.findAll = function getAllPromo(url) {
	return listCategory(url)
		.then(function(category) {
			var catPromo = [];
			for(var i=0; i<category.length; i++) {
				var detail = listPromo(category[i])
					.then(function(categoryDetail) {
						categoryDetail.detail = detailPromo()
					});
				catPromo.push(categoryDetail);
			}
			return catPromo;
		});
}
