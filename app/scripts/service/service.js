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
            URLHelpers.getBlogUrlResource(), {}, {
                loadData: { method: 'GET', params: { alt : "json" , "max-results" : "999999" }, isArray: false }
            });

        return reviewService;

    });