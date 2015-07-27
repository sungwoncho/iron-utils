Tinytest.addAsync('CurrentRoute.name returns the name of the current route', function (test, next) {
  Router.go('apple');
  Meteor.defer(function () {
    test.equal(CurrentRoute.name, 'apple');
    next();
  }, 500);
});

Tinytest.addAsync('CurrentRoute.is returns false when routeName is not current route name', function (test, next) {
  Router.go('orange');
  Meteor.defer(function () {
    test.isFalse(CurrentRoute.is('apple'));
    next();
  }, 500);
});

Tinytest.addAsync('CurrentRoute.is returns true when routeName is the current route name', function (test, next) {
  Router.go('apple');
  Meteor.defer(function () {
    test.isTrue(CurrentRoute.is('apple'));
    next();
  }, 500);
});

Tinytest.addAsync('CurrentRoute.params returns an array of params', function (test, next) {
  Router.go('fruit.show', {name: 'banana'});

  Meteor.defer(function () {
    test.isTrue(CurrentRoute.params.indexOf('banana') > -1);
    next();
  }, 500);
});

Tinytest.addAsync('CurrentRoute.query returns an object of query params', function (test, next) {
  Router.go('apple', {}, {query: 'q1=testQuery1&q2=testQuery2'});

  Meteor.defer(function () {
    test.equal(CurrentRoute.query.q1, 'testQuery1');
    test.equal(CurrentRoute.query.q2, 'testQuery2');
    next();
  });
});

Tinytest.addAsync('CurrentRoute.hash returns the value of hash param', function (test, next) {
  Router.go('apple', {}, {hash: 'testHash'});

  Meteor.defer(function () {
    test.equal(CurrentRoute.hash, 'testHash');
    next();
  }, 500);
});
