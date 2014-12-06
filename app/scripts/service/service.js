'use strict';

angular.module('angularBloggerApp')
    .service('ReviewClient', function (ByTermService, REVIEW_TERM) {

        return  {

            loadReview : function() {
                return ByTermService.loadData({term: REVIEW_TERM});
            }

        }

    });

angular.module('angularBloggerApp')
    .service('ByTermService', function ($resource, URLHelpers) {

        var reviewService = $resource(
            URLHelpers.getBlogUrl(), {term: '@term'}, {
                loadData: { method: 'GET', params: {}, isArray: false }
            });

        return reviewService;

    });