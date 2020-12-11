<?php
	error_reporting(E_ALL);
	ini_set('display_errors', 'on');

	$login = false;

?>

<!DOCTYPE html>
<html lang="en">

<head>
	<title>portfolio</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<link rel="preconnect" href="https://fonts.gstatic.com"> 
	<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,900;1,300&display=swap" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="styles.css">
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.8.2/angular.min.js"></script>

	<script type="text/javascript" src="portfolioApp.js"></script>

</head>
<body ng-app="PortfolioApp">
	<div ng-controller="AppCtrl">
		
			<!-- Modal -->
<div class="modal fade" id="previewModal" tabindex="-1" aria-labelledby="previewModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered">
		<div class="modal-content modal-xl">
			<div class="modal-body ">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
				<div ng-if="selectedApp.show">
					
				</div>
			</div>
		</div>
	</div>
</div>

	<div class="container" >
		<div class="h1 display mb-4 mt-4">PORTFOLIO</div>

		<div class="row">
			<div class="col-lg-4 mb-4" ng-repeat="app in apps">
				<div class="card portfolio-item" style=" "
					ng-class="{'portfolio-bg-image':(app.image)}" 
					ng-attr-id="{{app.code}}-card-id"
				>
					<div class="card-body" style="min-height: 400px;">
						<div class="" style="position: absolute; bottom: 20px; width: 80%; margin: 5%;">
							<h2 class="text-light">{{app.name}}</h2>
							<p class="text-light">{{app.description}}</p>
							<span ng-if="app.image">{{applyImages()}}</span>
							<button class="btn btn-sm btn-block btn-outline-light btn-custom" >VISIT DEMO 
								<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-up-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
 									 <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
								</svg>
							</button>
							<button class="btn btn-sm btn-block btn-outline-light btn-custom" ng-click="preview(app)">PREVIEW 
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>



</div>



</div>
</body>
</html>