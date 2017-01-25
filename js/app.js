var app = angular.module('app', [
  'ngRoute'

]);

/**
* Configure the Routes
*/

app.config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider)  {
    $locationProvider.html5Mode(true);
  $routeProvider
  // Home
  .when("/", {templateUrl: "partials/home.html"})
  //Pages
   .when("/404.html", {templateUrl: "partials/404.html"})
 .when("/about.html", {templateUrl: "partials/about.html"})
   .when("/blog-home-1.html", {templateUrl: "partials/blog-home-1.html"})
     .when("/blog-home-2.html", {templateUrl: "partials/blog-home-2.html"})
     .when("/blog-post.html", {templateUrl: "partials/blog-post.html"})
      .when("/contact.html", {templateUrl: "partials/contact.html"})
  .when("/faq.html", {templateUrl: "partials/faq.html"})

  .when("/full-width.html", {templateUrl: "partials/full-width.html"})
  .when("/portfolio-1-col.html", {templateUrl: "partials/portfolio-1-col.html"})
  .when("/portfolio-2-col.html", {templateUrl: "partials/portfolio-2-col.html"})
  .when("/portfolio-3-col.html", {templateUrl: "partials/portfolio-3-col.html"})
  .when("/portfolio-4-col.html", {templateUrl: "partials/portfolio-4-col.html"})
  .when("/portfolio-item.html", {templateUrl: "partials/portfolio-item.html"})
  .when("/pricing.html", {templateUrl: "partials/pricing.html"})
  .when("/services.html", {templateUrl: "partials/services.html"})
  .when("/sidebar.html", {templateUrl: "partials/sidebar.html"})

}]);
