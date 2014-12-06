'use strict';

/**
 * @ngdoc function
 * @name angularBloggerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularBloggerApp
 */
angular.module('angularBloggerApp')
    .controller('MainCtrl', function ($scope, ReviewClient, BASE_CONFIG) {

        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.posts = [];

        function searchFeedLink(feed) {
            for (var j = 0; j < feed.link.length; j++) {
                if (feed.link[j].rel == 'alternate') {
                    var postUrl = feed.link[j].href;
                    return  postUrl;
                }
            }

            return "";
        }

        function searchAuthor(feed, escludeTerm) {

            var categoryOfFeed = feed.category.map(function(category) {
                return category.term;
            });

            categoryOfFeed = categoryOfFeed.filter( function( el ) {
                return BASE_CONFIG.AUTHOR_CATEGORY_FILTER.indexOf( el ) < 0;
            } );

            return categoryOfFeed[0];

        }

        $scope.readPost = function(data) {

            for (var i=0; i < data.feed.entry.length; i++) {

                var feed = data.feed.entry[i];
                var post = {
                    url : searchFeedLink(feed),
                    title: feed.title["$t"],
                    author: searchAuthor(feed)
                };

                $scope.posts.push(post);
            }
        };

        ReviewClient.loadReview().$promise.then($scope.readPost);

    });
