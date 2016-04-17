'use strict';

var myApp = angular.module('MyApp', []);


 myApp.controller('MyCtrl', function($scope, $http) {
  $scope.loggedin = false;  
  var userData;

  if(!navigator.userAgent.match(/Trident\/7\./)) {
    console.log("in ie 11 :P:P:P ");
  }

    if(localStorage.getItem("username")) {
       $scope.loggedin = true;
       $scope.username = localStorage.getItem("username");
    }
    $scope.name = $scope.username;
    
      $scope.theatres = [
        {name: 'CENTRAL', movieName: 'KingsMan The Secret Service'},
        {name: 'KANAKADHARA', movieName: 'SuperMan Vs Batman'},
     ];

     $scope.movies = [
        {name: 'CENTRAL', movieName: 'KingsMan The Secret Service'},
        {name: 'KANAKADHARA', movieName: 'SuperMan Vs Batman'},
        {name: 'KG', movieName: 'SuperMan Vs Batman'},
        {name: 'GANGA', movieName: 'Inside Out'},
        {name: 'YAMUNA', movieName: 'Insidious 3'},
        {name: 'Fun Mall', movieName: 'AaShique 2'},
        {name: 'Brookefields', movieName: 'SuperMan Vs Batman'},
     ];

    $scope.onlogout = function() {
      localStorage.removeItem("username");
      $scope.loggedin = false;
      $scope.username = "";
      $scope.name = $scope.username;
    }    
    $scope.onsubmit = function() {
     	console.log("in submit");
      console.log(userData);
      var validUser =_.find(userData, function (data){
        return data.name === $scope.username && data.password === $scope.password;
      });
            
      if(validUser) {
     	  $scope.loggedin = true;
        localStorage.setItem("username", $scope.username);
        $scope.name = $scope.username;
        return true;
      }
      else {
        alert("Enter valid username and password");
      }
    };

    

    $http.get('user.json').
       success(function(data, status, headers, config) {
         userData = data;
         console.log("in response");             
    });           

});

myApp.directive('menuHome', function() {
	//var container;
  return {
    restrict: 'AE',
    template: '<div id="mainMenu">'+
    			'<span class="menuMovies">Movies</span><span class="menuTheatres">Theatres</span><span class="menuEvents">Events</span><span class="menuUpcoming">Upcoming</span>'+
    		  '</div>'+
          '<div class="row1"> <img src="http://cdn.in.ticketnew.com/Movie/8783/1.png"/> </div>',
    link: function(scope, element, attrs) {
    	
    	//container = '<div> in directive</div>'
      
      }

  };
});