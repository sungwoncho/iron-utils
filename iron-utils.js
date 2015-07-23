/**
 * A namespace for utilities
 * @namespace
 */
CurrentRoute = {};

CurrentRoute.getName = function () {
  var currentPage = Router.current();
  return currentPage.route.getName();
};

CurrentRoute.is = function (routeName) {
  var currentPage = Router.current();
  return currentPage.route.getName() === routeName;
};

CurrentRoute.params = function () {
  return currentPage.params;
};
