'use strict';

/**
 * @ngdoc function
 * @name carruselApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the carruselApp
 */
angular.module('carruselApp')
  .controller('MainCtrl', ['$scope', function($scope) {
   
    var baseURL='http://lorempixel.com/960/450/';
    $scope.setInterval = 5000; 
    $scope.noWrapSlides = false;
    $scope.slides = [
		{
			title:'Aprende a mantenerte en forma',
			image: baseURL+'sports/',
			text:'¡Practica algún deporte todos los días!'
		},
		{
			title:'Buena alimentación',
			image: baseURL+'food/',
			text:'¡La importancia de frutas y verduras en tu dieta diaria!'
		},
		{
			title:'El contacto con la naturaleza',
			image: baseURL+'nature/',
			text:'¡Mantente en armonía con la naturaleza!'
		}
    ];

  }]);
