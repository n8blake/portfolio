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
	}]
	},
	{'name':'Weather App',
	'description':'A web app that uses the OpenWeather API to display general weather data.',
	'link':'localhost:8899',
	'github':'',
	'image':'WeatherApp-1024.png',
	'badges':[{
		'label':'View on GitHub',
		'showLabel':true,
		'color':'#000',
		'link':'github.com'
		},
		{
		'label':'View Live Demo',
		'showLabel':true,
		'color':'#000',
		'link':'github.com'
		}
		]
	},

];

const portfolioItemsList = document.querySelector('#portfolio-items-list');
portfolioItemsList.innerHTML = "";

const IMAGE_RESOURCE_BASE = './resources/';

// make portfolio items

const makePortfoliItem = (item) => {
	const itemListElement = document.createElement('li');
	itemListElement.classList.add('portfolio-item');
	// const itemImageLink = document.createElement('a');
	// itemImageLink.target = "_blank";
	// itemImageLink.href = item.link;
	// const itemImage = document.createElement('img');
	// itemImage.src = IMAGE_RESOURCE_BASE + item.image;
	// itemImageLink.appendChild(itemImage);
	// itemListElement.appendChild(itemImageLink);
	// const itemTextDiv = document.createElement('div');
	// itemTextDiv.classList.add('item-text');
	// const itemTextTitle = document.createElement('h2');
	// itemTextTitle.classList.add('item-title');
	// itemTextTitle.textContent = item.name;
	// itemTextDiv.appendChild(itemTextTitle);
	// itemListElement.appendChild(itemTextDiv);
	let itemListElementInnerHTML = `
			<a href="${item.link}">
				<img src=".${IMAGE_RESOURCE_BASE + item.image}" >
			</a>
			<div class="item-text">
				<h2 class="item-title">${item.name}</h2>
				<p class="item-description">${item.description}</p>
				`;
	let itemBadges = `<div class="item-badges">`
	item.badges.forEach(badge => {
		//console.log(makeBadge(badge));
		itemBadges = itemBadges + makeBadge(badge);	
		console.log(itemListElementInnerHTML);	
	});
	itemBadges = itemBadges + `</div>`;
	itemListElementInnerHTML = itemListElementInnerHTML + itemBadges + `
			</div>
		
	`;
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
	console.log(badgeHTML);
	return badgeHTML;
};

PORTFOLIO_ITEMS.forEach(item => {
	const itemListElement = makePortfoliItem(item);
	portfolioItemsList.appendChild(itemListElement);
});