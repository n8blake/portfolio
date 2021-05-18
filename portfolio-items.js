const PORTFOLIO_ITEMS = [
	{'name':'Radian Rule',
	'description':'A simple app that can aid in determining the required angle between two objects when the desired lateral separation and current distance between the two objects is know. This is useful in maritime operations such as stationing.',
	'link':'https://apps.apple.com/us/app/radian-rule/id1487263442#?platform=iphone',
	'image':'Radian-Rule-1024.png',
	'badges':[{
		'label':'Download on App Store',
		'showLabel':false,
		'color':'#000',
		'image':'Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg',
		'link':'https://apps.apple.com/us/app/radian-rule/id1487263442#?platform=iphone'
	}],
	'screenShots':[{
		'image':'radian_rule_screen.png',
	}],
	},
	{'name':'Weather App',
	'description':'A web app that uses the OpenWeather API to display general weather data.',
	'link':'https://github.com/n8blake/WeatherApp',
	'github':'https://github.com/n8blake/WeatherApp',
	'image':'WeatherApp-1024.png',
	'badges':[{
		'label':'View on GitHub',
		'showLabel':true,
		'color':'#000',
		'link':'https://github.com/n8blake/WeatherApp'
		},
		{
		'label':'View Live Demo',
		'showLabel':true,
		'color':'#000',
		'link':'https://n8blake.github.io/WeatherApp/'
		}
		],
	'screenShots':[{
		'image':'weather_app_screen.png',
	}],
	},
	{'name':'Bev-Films',
	'description':'This web application delivers recommended drink pairings for movies and tv series.',
	'link':'https://n8blake.github.io/bev-films/',
	'github':'https://github.com/n8blake/bev-films',
	'image':'Bev-films-1024.png',
	'badges':[{
		'label':'View on GitHub',
		'showLabel':true,
		'color':'#000',
		'link':'https://github.com/n8blake/bev-films'
		},
		{
		'label':'View Live Demo',
		'showLabel':true,
		'color':'#000',
		'link':'https://n8blake.github.io/bev-films/'
		}
		],
	'screenShots':[{
		'image':'Bev-Films_Demo.png',
	}],
	},
];

// const portfolioItemsURL = 'https://n8blake:8890/portfolio_items.php';
// fetch(portfolioItemsURL).then(response =>{
// 	return response.json();
// }).then(result => {
// 	console.log(result);
// 	result.forEach(item => {
// 		const itemListElement = makePortfoliItem(item);
// 		portfolioItemsList.appendChild(itemListElement);
// 	});
// });



const portfolioItemsList = document.querySelector('#portfolio-items-list');
portfolioItemsList.innerHTML = "";

const IMAGE_RESOURCE_BASE = 'resources/';



// make portfolio items

const makePortfoliItem = (item) => {
	if(item.links){
		item.links.forEach(link => {
			console.log(link);
			if(link.type === 'demo'){
				item.link = link.url;
			}
			if(link.type === 'icon'){
				item.image = link.url;
			}
			if(link.type === 'screenshot'){
				if(!item.screenShots){
					item.screenShots = [];
				}
				const screenShot = {};
				screenShot.image = link.url;
				item.screenShots.push(screenShot);
			}
		});
	}

	const itemListElement = document.createElement('li');
	itemListElement.classList.add('portfolio-item');
	let itemListElementInnerHTML = `
			<a href="${item.link}">
				<img src="${IMAGE_RESOURCE_BASE + item.image}" >
			</a>
			<div class="item-text">
				<h2 class="item-title">${item.name}</h2>
				<p class="item-description">${item.description}</p>
				`;
	if(item.badges){
		// add item badges
		let itemBadges = `<div class="item-badges">`
		item.badges.forEach(badge => {
			itemBadges = itemBadges + makeBadge(badge);		
		});
		itemBadges = itemBadges + `</div>`;
		itemListElementInnerHTML = itemListElementInnerHTML + itemBadges;
	}
	if(item.screenShots){
		// add screenshots
		let itemScreenShots = `<div class="item-screen-shots"> `;
		item.screenShots.forEach(screenShot => {
			//console.log(screenShot);
			itemScreenShots = itemScreenShots + makeScreenShotElement(screenShot);
			//console.log(itemScreenShots);
		});
		itemScreenShots = itemScreenShots + `</div>`;
		itemListElementInnerHTML = itemListElementInnerHTML + itemScreenShots;
	}
	//close div and return 
	itemListElementInnerHTML = itemListElementInnerHTML + `</div>`;
	itemListElement.innerHTML = itemListElementInnerHTML;
	return itemListElement;
};

// take a badge and return an html string of the badge
const makeBadge = (badge) => {
	//console.log(badge);
	let badgeHTML = `<a href="${badge.link}" `;
	if(badge.showLabel){
		badgeHTML = badgeHTML + ` class="portfolio-badge" >`;
		badgeHTML = badgeHTML + `
			<span>${badge.label}</span>
		`;
	} else {
		badgeHTML = badgeHTML + `>`;
	}
	if(badge.image){
		badgeHTML = badgeHTML + `<img src="${IMAGE_RESOURCE_BASE + badge.image}">`;
	}
	badgeHTML = badgeHTML +`</a>`;
	return badgeHTML;
};

// take a screenshot resource and make an html element string for it
const makeScreenShotElement = (screenShot) => {
	let screenShotElement = `<a href="#" class="screen-shot-link" >
		<img class="screen-shot-thumbnail" src="${IMAGE_RESOURCE_BASE + screenShot.image}" onclick="enlarge(this)"/>
	</a>
	`;
	return screenShotElement;
}

const enlarge = (screenShot) => {
	const body = document.querySelector('body');
	console.log(screenShot.src);
	const backdrop = document.createElement('div');
	backdrop.classList.add('modal-backdrop');
	backdrop.id = 'modal-backdrop';
	backdrop.addEventListener('click', close);
	body.appendChild(backdrop);
	const image = document.createElement('img');
	image.src = screenShot.src;
	image.classList.add('enlarged-screen-shot');
	image.id = 'active-enlarged-image';
	body.appendChild(image);
}

const close = () => {
	const backdrop = document.querySelector('#modal-backdrop');
	const image = document.querySelector('#active-enlarged-image');
	backdrop.remove();
	image.remove();
}

PORTFOLIO_ITEMS.forEach(item => {
	const itemListElement = makePortfoliItem(item);
	portfolioItemsList.appendChild(itemListElement);
});