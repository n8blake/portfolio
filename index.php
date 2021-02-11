<?php
	//header("location: work.php");
	//exit;
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
	<title>n8blake</title>
	<link rel="stylesheet" type="text/css" href="reset.css">
	<link rel="stylesheet" type="text/css" href="base_style.css">
	<link rel="stylesheet" type="text/css" href="styles_sm.css">
</head>
<body>
	<header>
		<div>
			<h1 class="name-hero">n8blake</h1>
		</div>
	</header>
	<main>
		<nav>
			<a href="#" id="about-link" data-target="about" class="nav-link " onclick="activate(this)">about</a>
			<a href="#" id="projects-link" data-target="projects" class="nav-link active" onclick="activate(this)">projects</a>
		</nav>
		<section class="section " id="about-section">
			<img src="self_portrait_sm.png" />
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		</section>
		<section class="section active" id="projects-section">
			<ul>
				<li class="portfolio-item">
					<img src="./photos/ROR_sm.jpg">
					<div class="item-text">
						<h2 class="item-title">Project 1</h2>
						<p class="item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
						<a href="#" class="portfolio-link">Demo</a>
					</div>
				</li>
				
				<li class="portfolio-item">
					<img src="./photos/ROR_sm.jpg">
					<div class="item-text">
						<h2 class="item-title">Project 2</h2>
						<p class="item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
					</div>
				</li>
				
				<li class="portfolio-item">
					<img src="./photos/ROR_sm.jpg">
					<div class="item-text">
						<h2 class="item-title">Project 3</h2>
						<p class="item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</div>
				</li>

			</ul>
		</section>
	</main>
	<footer>
		<div class="footer-text">Find me on</div>
		<div class="footer-links">
			<a href="https://github.com/n8blake" target="_blank" class="github">GitHub</a> 
			<a href="https://twitter.com/n8blake" target="_blank" class="twitter">Twitter</a> 
			<a href="https://www.instagram.com/n8blake/" target="_blank" class="instagram">Instagram</a> 
			<a href="https://www.youtube.com/user/n8blake" target="_blank" class="youtube">YouTube</a></div>
	</footer>
	<script type="text/javascript" src="portfolio.js"></script>
</body>
</html>