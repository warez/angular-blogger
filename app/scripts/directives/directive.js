'use strict';

/**
 * @ngdoc function
 * @name angularBloggerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularBloggerApp
 */
angular.module('angularBloggerApp').directive('listReview', [], function ($) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });