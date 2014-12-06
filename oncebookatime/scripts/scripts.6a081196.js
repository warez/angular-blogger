"use strict";angular.module("angularBloggerApp",["ngAnimate","ngResource","ngSanitize","ui.bootstrap"]);var config={BY_TERM_URL_PART:"/feeds/posts/default/-/",REVIEW_TERM:"recensioni",JSON_PARAM:"?alt=json&max-result=99999999",AUTHOR_CATEGORY_FILTER:["Hobbit","Recensioni","Whishlist","Wednesday!","Songs"]};angular.forEach(config,function(a,b){angular.module("angularBloggerApp").constant(b,a)}),angular.module("angularBloggerApp").constant("BASE_CONFIG",config),angular.module("angularBloggerApp").service("URLHelpers",["CONFIG","BASE_CONFIG",function(a,b){return{getBlogUrl:function(){var c=a.BLOG_URL;return"MOCK"===a.MODE?c+"/"+b.REVIEW_TERM+".json":c+"/"+b.BY_TERM_URL_PART+"/"+b.REVIEW_TERM+"/"+b.JSON_PARAM}}}]);var config={BLOG_URL:"http://oncebookatime.blogspot.it",MODE:"PROD"};angular.forEach(config,function(a,b){angular.module("angularBloggerApp").constant(b,a)}),angular.module("angularBloggerApp").constant("CONFIG",config),angular.module("angularBloggerApp").service("ReviewClient",["ByTermService","REVIEW_TERM",function(a,b){return{loadReview:function(){return a.loadData({term:b})}}}]),angular.module("angularBloggerApp").service("ByTermService",["$resource","URLHelpers",function(a,b){var c=a(b.getBlogUrl(),{term:"@term"},{loadData:{method:"GET",params:{},isArray:!1}});return c}]),angular.module("angularBloggerApp").directive("listReview",[],function(){$scope.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("angularBloggerApp").filter("groupBy",["$parse",function(a){return function(b,c){var d=[],e=null,f=!1,g="group_by_CHANGED";return angular.forEach(b,function(b){if(f=!1,null!==e){c=angular.isArray(c)?c:[c];for(var h=0,i=c.length;i>h;h++)a(c[h])(e)!==a(c[h])(b)&&(f=!0)}else f=!0;b[g]=f?!0:!1,d.push(b),e=b}),d}}]),angular.module("angularBloggerApp").controller("MainCtrl",["$scope","ReviewClient","BASE_CONFIG",function(a,b,c){function d(a){for(var b=0;b<a.link.length;b++)if("alternate"==a.link[b].rel){var c=a.link[b].href;return c}return""}function e(a){var b=a.category.map(function(a){return a.term});return b=b.filter(function(a){return c.AUTHOR_CATEGORY_FILTER.indexOf(a)<0}),b[0]}a.predicate="author",a.posts=[],a.readPost=function(b){for(var c=[],f=0;f<b.feed.entry.length;f++){var g=b.feed.entry[f],h={url:d(g),title:g.title.$t,author:e(g)};c.push(h)}a.posts=c},b.loadReview().$promise.then(a.readPost)}]);