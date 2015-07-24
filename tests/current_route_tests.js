Tinytest.add('CurrentRoute.name returns the name of the current route', function (test) {
  Router.go('apple', function () {
    test.equal(CurrentRoute.name, 'apple');
  });
});

Tinytest.add('CurrentRoute.is returns false when routeName is not current route name', function (test) {
  Router.go('orange', function () {
    test.isFalse(CurrentRoute.is('apple'));
  });
});

Tinytest.add('CurrentRoute.is returns true when routeName is the current route name', function (test) {
  Router.go('apple', function () {
    test.isTrue(CurrentRoute.is('apple'));
  });
});
