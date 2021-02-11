function activate(element){
	let target = element.getAttribute('data-target');
	targetSection = document.getElementById(target + '-section');
	if(target === 'about'){
		document.getElementById('projects-link').classList.remove('active');
		document.getElementById('projects-section').classList.remove('active');
	} else {
		document.getElementById('about-link').classList.remove('active');
		document.getElementById('about-section').classList.remove('active');
	}
	element.classList.add("active");
	targetSection.classList.add("active");
}