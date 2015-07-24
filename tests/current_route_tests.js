Tinytest.addAsync('CurrentRoute.name returns the name of the current route', function (test, next) {
  Router.go('apple');
  setTimeout(function () {
    test.equal(CurrentRoute.name, 'apple');
    next();
  }, 500);
});

Tinytest.addAsync('CurrentRoute.is returns false when routeName is not current route name', function (test, next) {
  Router.go('orange');
  setTimeout(function () {
    test.isFalse(CurrentRoute.is('apple'));
    next();
  }, 500);
});

Tinytest.addAsync('CurrentRoute.is returns true when routeName is the current route name', function (test, next) {
  Router.go('apple');
  setTimeout(function () {
    test.isTrue(CurrentRoute.is('apple'));
    next();
  }, 500);
});

Tinytest.addAsync('CurrentRoute.params returns an array of params', function (test, next) {
  Router.go('fruit.show', {name: 'banana'});

  setTimeout(function () {
    test.isTrue(CurrentRoute.params.indexOf('banana') > -1);
    next();
  }, 500);
});
