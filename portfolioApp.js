

console.log('hello from app.js');

var app = angular.module('PortfolioApp', []);

app.controller('AppCtrl', ['$scope', function($scope) {

	$scope.apps = APPS;
	$scope.selectedApp = $scope.apps[0];

	$scope.preview = function(app){
		$scope.selectedApp = app;
		//console.log("Previewing, like really, " + app.name);
		$('#previewModal').modal('show');
	};

	$scope.showBGImg = function(app){
		if(app.image){
			var id = "#" + app.code + "-card-id";
			var url = "photos/" + app.image;
			console.log(url);
			console.log(id);
			$(id).css("background-image", "linear-gradient(180deg,  rgba(20,24,26,0.75) 50%, rgba(10,10,10,1) 100%), url('photos/ROR_sm.jpg')" );
			$(id).css("background-repeat", "no-repeat");
			$(id).css("background-position", "center");
			$(id).css("background-size", "cover");
		}
	};

	$scope.applyImages = function(){
		for(i in $scope.apps){
			var app = $scope.apps[i];
			console.log(app);
			$scope.showBGImg(app);
		}
	}

}]);

var APPS = [
	{"name":"Rules of the Road",
	"code":"ROR",
	"description":"A testing app used to administer and track resutls of regular testing of USCG Collision Regulations, also know as COLREGS or Rules of the Road.",
	"image":"ROR_sm.jpg"},
	{"name":"Classes",
	"code":"CLS",
	"description":"A management system for offering courses, guaging insterest and tracking participation in various subjects."},
	{"name":"TicketBooth",
	"code":"TB",
	"description":"A troubleticket log and management system for creating and tracking trouble call items."},
	{"name":"Logbook",
	"code":"LB",
	"description":"A digital deck log."},
	{"name":"Maps",
	"code":"MAPS",
	"description":"Various custom stylized maps of the world."},
	{"name":"Photo Album",
	"code":"PAL",
	"description":"A simple web photo album"},
	{"name":"Logo Folio",
	"code":"LF",
	"description":"A folio of logos."},
	{"name":"Animations",
	"code":"ANI",
	"description":"A small sample if fun CSS animations."},
];