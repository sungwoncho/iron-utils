/**
 * A namespace for utilities related to current route
 * @namespace
 */
CurrentRoute = {};

/**
 * Returns the name of the current route
 * @returns {String}
 */
CurrentRoute.getName = function () {
  return Router.current().route.getName();
};

/**
 * Tests if the name of the current route is equal to the route name supplied.
 * @param {String} routeName
 * @returns {Boolean}
 */
CurrentRoute.is = function (routeName) {
  return Router.current().route.getName() === routeName;
};

/**
 * Returns an array of parameters passed to the current route
 * @returns {Array}
 */
CurrentRoute.params = function () {
  return Router.current().params;
};
