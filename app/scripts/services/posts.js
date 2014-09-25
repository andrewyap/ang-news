'use strict';

angular.module('angNewsApp')
	.factory('postsModel', function($timeout) {
		console.log('In postsModel');
		return $timeout(function(){
			console.log('in timeout');
			return { 
				people: ['Andrew', 'John', 'Sam']
			};
		}, 2000);
	});