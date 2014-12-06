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

        $scope.predicate = "author";
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

        function cleanTitle(title, author) {

            var indexN = title.toLowerCase().indexOf(author.toLowerCase());
            if( indexN !== -1) {
                title = title.substr(0, indexN - 1) + title.substr(indexN + author.length + 1);
            }

            title = title.trim();
            title = title.replace("-", "");

            return title;

        }

        $scope.readPost = function(data) {

            var posts = [];

            for (var i=0; i < data.feed.entry.length; i++) {

                var feed = data.feed.entry[i];

                var author = searchAuthor(feed);
                var url = searchFeedLink(feed);
                var title = cleanTitle(feed.title["$t"], author);

                var post = {
                    url : url,
                    title: title,
                    author: author
                };

                posts.push(post);
            }

            $scope.posts = posts;
        };

        ReviewClient.loadReview().$promise.then($scope.readPost);

    });
