(function(){
	var app = angular.module('store',[]);

	app.controller('StoreController',function(){
		this.products = gems;
	});

	var gems = [
	{
		name		: 'gem1',
		price		: 2.95,
		description	: ".  .  .",
		images		: [
			{
				full	: 'pics/gem1-1-full.jpg',
				thumb	: 'pics/gem1-1-thumb.jpg'
			},
			{
				full	: 'pics/gem1-2-full.jpg',
				thumb	: 'pics/gem1-2-thumb.jpg'
			}			
		],
		canPurchase	: true,  	 
	},
	{
		name		: 'gem2',
		price		: 5.95,
		description	: ".  .  .",
		images		: [
			{
				full	: 'pics/gem2-1-full.jpg',
				thumb	: 'pics/gem2-1-thumb.jpg'
			},
			{
				full	: 'pics/gem2-2-full.jpg',
				thumb	: 'pics/gem2-2-thumb.jpg'
			}			
		],
		canPurchase	: true,  	 
	},
	{
		name		: 'gem3',
		price		: 1.95,
		description	: ".  .  .",
		images		: [
			{
				full	: 'pics/gem3-1-full.jpg',
				thumb	: 'pics/gem3-1-thumb.jpg'
			},
			{
				full	: 'pics/gem3-2-full.jpg',
				thumb	: 'pics/gem3-2-thumb.jpg'
			}			
		],
		canPurchase	: false,  	 
	}]
})();


