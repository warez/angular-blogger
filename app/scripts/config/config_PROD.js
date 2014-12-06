var config = {
    "BLOG_URL" : "https://oncebookatime.blogspot.it",
    "MODE": "PROD"
};

angular.forEach(config, function(value, key) {
    angular.module('angularBloggerApp').constant(key, value);
});

angular.module('angularBloggerApp').constant("CONFIG", config);

