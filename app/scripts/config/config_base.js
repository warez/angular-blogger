var config = {
    "BY_TERM_URL_PART": "/feeds/posts/default/-/",
    "REVIEW_TERM": "recensioni",
    "JSON_PARAM": "?alt=json&max-result=99999999",
    "AUTHOR_CATEGORY_FILTER": ["Hobbit", "Recensioni", "Whishlist", "Wednesday!", "Songs"]
};

angular.forEach(config, function (value, key) {
    angular.module('angularBloggerApp').constant(key, value);
});

angular.module('angularBloggerApp').constant("BASE_CONFIG", config);

angular.module('angularBloggerApp').service("URLHelpers", function (CONFIG, BASE_CONFIG) {

    return {

        getBlogUrl: function () {

            var url = CONFIG.BLOG_URL;

            if (CONFIG.MODE === "MOCK")
                return url + "/" + BASE_CONFIG.REVIEW_TERM + ".json"

            return url + "/" + BASE_CONFIG.BY_TERM_URL_PART + "/" + BASE_CONFIG.REVIEW_TERM + "/" + BASE_CONFIG.JSON_PARAM;

        }

    };

});