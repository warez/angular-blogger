var config = {
    "AUTHOR_CATEGORY_FILTER": ["Hobbit", "Recensioni", "Whishlist", "Wednesday!", "Songs"]
};

angular.forEach(config, function (value, key) {
    angular.module('angularBloggerApp').constant(key, value);
});

angular.module('angularBloggerApp').constant("BASE_CONFIG", config);

angular.module('angularBloggerApp').service("URLHelpers", function (CONFIG, BASE_CONFIG) {

    return {

        getBlogUrlResource: function() {

            return CONFIG.BLOG_URL + "/" + CONFIG.BY_TERM_URL_RESOURCE;

        }

    };

});