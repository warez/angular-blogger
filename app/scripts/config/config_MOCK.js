var config = {
    "BLOG_URL" : "http://localhost:8000/app/mock",
    "MODE": "MOCK"
};

angular.forEach(config, function(value, key) {
    angular.module('angularBloggerApp').constant(key, value);
});

angular.module('angularBloggerApp').constant("CONFIG", config);

