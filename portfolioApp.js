console.log('hello from app.js');

var app = angular.module('PortfolioApp', []);

app.controller('AppCtrl', ['$scope', function($scope) {

	$scope.apps = APPS;
	$scope.selectedApp = {};

	$scope.preview = function(app){
		$scope.selectedApp = app;
		//console.log("Previewing, like really, " + app.name);
		$('#previewModal').modal('show');
	};


}]);

var APPS = [
	{"name":"Rules of the Road",
	"description":"A testing app used to administer and track resutls of regular testing of USCG Collision Regulations, also know as COLREGS or Rules of the Road."},
	{"name":"Classes",
	"description":"A management system for offering courses, guaging insterest and tracking participation in various subjects."},
	{"name":"TicketBooth",
	"description":"A troubleticket log and management system for creating and tracking trouble call items."},
	{"name":"Logbook",
	"description":"A digital deck log."},
	{"name":"Maps",
	"description":"Various custom stylized maps of the world."},
	{"name":"Photo Album",
	"description":"A simple web photo album"},
	{"name":"Logo Folio",
	"description":"A folio of logos."},
	{"name":"Animations",
	"description":"A small sample if fun CSS animations."},
];