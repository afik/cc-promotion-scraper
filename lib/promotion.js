var request = require('request-promise');
var cheerio = require('cheerio');
var Promise = require('bluebird');

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
		})
		.catch(function(err) {
			return Promise.reject(err);
		});
}

function listPromo(category) {
	return request(category.link)
		.then(function(result) {
			var promoList = [];
			var $ = cheerio.load(result);

			$('.list2').find('li').each(function(idx, elem) {
				var detail = $(elem).find('a');
				promoList.push({
					'link' : $(detail).attr('href'),
					'thumbnail' : $(detail).find('img').attr('src'),
					'merchantName' : $(detail).children('.merchant-name').text(),
					'promoTitle' : $(detail).children('.promo-title').text(),
					'validUntil' : $(detail).children('.valid-until').text()
				});				
			});	

			
			return Promise.map(promoList, getDetail).then(function(result) {
				var categoryDetail = {};
				categoryDetail[category.title] = JSON.stringify(result);
				return categoryDetail;	
			});
		})
		.catch(function(err) {
			return Promise.reject(err);
		});
}

function getDetail(promo) {
	return request(promo.link)
		.then(function(result) {
			var detail = {}
			var $ = cheerio.load(result);

			detail.title = promo.promoTitle;
			detail.link = promo.link;
			detail.validUntil = promo.validUntil.replace('valid until ', '');
			detail.thumbnail = promo.thumbnail;
			detail.image = $('#banner').find('img').attr('src');
			detail.merchant = {
				'name' : promo.name,
				'logo' : $('.merchant').find('img').attr('src'),
				'location' : $('.merchant').find('p').text(),
				'phone' : $('.merchant').find('p').next('p').text()
			},
			detail.detail = $('#merchant-detail').find('p').text();
			
			return detail;
		})
		.catch(function(err) {
			return Promise.reject(err);
		});
}

exports.getAllPromo = function getAllPromo(url) {
	return listCategory(url)
		.then(function(category) {
			return Promise.map(category, listPromo);
		})
		.catch(function(err) {
			return Promise.reject(err);
		});
}
