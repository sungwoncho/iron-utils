/**
 * A namespace for utilities related to current route
 * @namespace
 */
CurrentRoute = {};

/**
 * Returns the name of the current route
 * @returns {String}
 */
Object.defineProperty(CurrentRoute, 'name', {
  get: function () {
    return Router.current().route.getName();
  }
});

/**
 * Returns an Array containing parameters passed to the current route
 * @returns {Array}
 */
Object.defineProperty(CurrentRoute, 'params', {
  get: function () {
    return Router.current().params;
  }
});

/**
 * Tests if the name of the current route is equal to the route name supplied.
 * @param {String} routeName
 * @returns {Boolean}
 */
CurrentRoute.is = function (routeName) {
  return Router.current().route.getName() === routeName;
};
