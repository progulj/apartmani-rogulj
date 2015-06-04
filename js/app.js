'use strict';

/* App Module */

var URL = 'https://sleepy-springs-5486.herokuapp.com/mail/send';

var apartmentApp = angular.module('apartmentApp',['uiGmapgoogle-maps','ngRoute','ngAnimate', 'ngTouch']);


apartmentApp.controller('GalleryController', ['$scope', function($scope ) {
  
          // Set of Photos
    $scope.photosA = [
        {src: 'img/a/1.jpg', desc: 'Image 01'},
        {src: 'img/a/2.jpg', desc: 'Image 02'},
        {src: 'img/a/3.jpg', desc: 'Image 03'},
        {src: 'img/a/4.jpg', desc: 'Image 04'},
        {src: 'img/a/5.jpg', desc: 'Image 05'},
        {src: 'img/a/6.jpg', desc: 'Image 06'},
        {src: 'img/a/7.jpg', desc: 'Image 07'},
        {src: 'img/a/8.jpg', desc: 'Image 08'},
        {src: 'img/a/9.jpg', desc: 'Image 09'}
    ];
    
    $scope.photosB = [
        {src: 'img/b/1.jpg', desc: 'Image 01'},
        {src: 'img/b/2.jpg', desc: 'Image 02'},
        {src: 'img/b/3.jpg', desc: 'Image 03'},
        {src: 'img/b/4.jpg', desc: 'Image 04'},
        {src: 'img/b/5.jpg', desc: 'Image 05'},
        {src: 'img/b/6.jpg', desc: 'Image 06'},
        {src: 'img/b/7.jpg', desc: 'Image 07'},
        {src: 'img/b/8.jpg', desc: 'Image 08'}
    ];

    // initial image index
    $scope._Index = 0;

    // if a current image is the same as requested image
    $scope.isActive = function (index) {
        return $scope._Index === index;
    };

    // show prev image
    $scope.showPrev = function (photos) {
        $scope._Index = ($scope._Index > 0) ? --$scope._Index : photos.length - 1;
    };

    // show next image
    $scope.showNext = function (photos) {
        $scope._Index = ($scope._Index < photos.length - 1) ? ++$scope._Index : 0;
    };

    // show a certain image
    $scope.showPhoto = function (index) {
        $scope._Index = index;
    };

}]);

apartmentApp.controller('GoogleController', ['$scope', function($scope ) {
  
        $scope.map = { center: { latitude: 43.512607, longitude: 16.282221}, zoom: 16 };
        $scope.marker = { coords: { latitude: 43.512607, longitude: 16.282221}};
        $scope.options = { scrollwheel: false };

}]);
apartmentApp.controller('EmailController', ['$scope','$http', function($scope, $http) {
  
        $scope.alerts=[];
        $scope.email= {};
    

        $scope.sendEmail = function(){
            
		$scope.email ={
            
            'name' : $scope.name,
			'emailFrom' : $scope.emailFrom,
            'emailTo' : 'arogulj@gmail.com',
            'message' : $scope.message,
            'subject' : $scope.subject
		}
                  
		$http.post(URL, $scope.email).
			success(function(data, status, headers, config) {
            
            $scope.email= {};
            
            $scope.name = '';
			$scope.emailFrom= '';
            $scope.message= '';
            $scope.subject= '';
				
			$scope.alerts.push({
            type: 'succes',
            msg: " Email sended!"
        });

  }).
  error(function(data, status, headers, config) {
   
                    
         $scope.alerts.push({
             type: 'danger',
             msg: " Email not sent!"
            });
        });
        };
}]);

 

