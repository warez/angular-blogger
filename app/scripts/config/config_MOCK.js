var config = {
    "BLOG_URL" : "/app",
    "BY_TERM_URL_RESOURCE" : "/mock/:term",
    "REVIEW_TERM": "recensioni.json",
    "MODE": "MOCK"
};

angular.forEach(config, function(value, key) {
    angular.module('angularBloggerApp').constant(key, value);
});

angular.module('angularBloggerApp').constant("CONFIG", config);

