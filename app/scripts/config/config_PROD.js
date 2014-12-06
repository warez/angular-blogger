var config = {
    "BLOG_URL" : "http://oncebookatime.blogspot.it",
    "BY_TERM_URL_RESOURCE": "/feeds/posts/default/-/:term",
    "REVIEW_TERM": "Recensioni",
    "MODE": "PROD"
};

angular.forEach(config, function(value, key) {
    angular.module('angularBloggerApp').constant(key, value);
});

angular.module('angularBloggerApp').constant("CONFIG", config);

