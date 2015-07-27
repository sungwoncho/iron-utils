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
 * Returns an Array containing parameters passed to the current route.
 *
 * The returned array also has parameter name as property and its value as value.
 * i.e. On '/:date/:slug/' route, CurrentRoute.params.slug gives you the value of
 * the slug parameter.
 * @returns {Array}
 */
Object.defineProperty(CurrentRoute, 'params', {
  get: function () {
    var result = [];
    var params = Router.current().params;

    for (var key in params) {
      if (key !== 'hash' && key !== 'query') {
        result.push(params[key]);
        console.log(key + ' for ' + params[key]);
        result[key] = params[key];
      }
    }

    return result;
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
