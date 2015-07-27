# Iron-utils
[![Build Status](https://travis-ci.org/sungwoncho/iron-utils.svg?branch=master)](https://travis-ci.org/sungwoncho/iron-utils)

Iron-utils provides convenient client side utilities for Iron Router.


## Get Started

Install the package:

    meteor add sungwoncho:iron-utils


## Utilities

You can use the following utilities anywhere on the client side.


### CurrentRoute

`CurrentRoute` object includes helper methods related to current routes.

* `CurrentRoute.name`

This returns the name of the current route.

```javascript
Router.route('apple', {
  name: 'apple'
});

Router.go('apple');

CurrentRoute.name
// => 'apple'
```

* `CurrentRoute.is(routeName)`

This checks if the current route's name is equal to the name passed as the argument.

```javascript
Router.route('apple', {
  name: 'apple'
});

Router.go('apple');

CurrentRoute.is('apple');
// => true
CurrentRoute.is('banana');
// => false
```

* `CurrentRoute.params`

This returns an array of parameters passed to the current route. The array also
has key-value pairs of parameter names and values.

This means that you can easily retrieve parameters by their names.

```javascript
Router.route('fruit/:type/:color', {
  name: 'fruit'
});


Router.go('fruit', {type: 'banana', color: 'blue'});

CurrentRoute.params
// => ['banana', 'blue']
CurrentRoute.params.type
// => 'banana'
CurrentRoute.params.color
// => 'blue'
```

* `CurrentRoute.hash`

Returns a value of the hash parameter passed to the current route.

```javascript
// On a route '/apple#L1'

CurrentRoute.hash
// => 'L1'
```

* `CurrentRoute.query`

Returns an object of query parameters passed to the current route.

```javascript
// On a route '/apple?sort=popularity&limit=10'

CurrentRoute.query
// => {sort: "popularity", limit: "10"}
```


## Use case

The following is an example use case where iron-utils can help you write less code
with a clearer meaning.

```javascript
// -----------------------------------------------------------------
// Before
// -----------------------------------------------------------------
Template.myTemplate.onCreated(function () {
  var self = this

  self.autorun(function () {
    var currentRoute = Router.current();

    if (currentRoute.route.getName() === 'category.show') {
      self.subscribe('topics', currentRoute.params.slug, self.limit.get());
    } else {
      self.subscribe('recent-topics', self.limit.get());
    }
  });
});

// -----------------------------------------------------------------
// After
// -----------------------------------------------------------------
Template.myTemplate.onCreated(function () {
  var self = this

  self.autorun(function () {
    if (CurrentRoute.is('category.show')) {
      self.subscribe('topics', CurrentRoute.params.slug, self.limit.get());
    } else {
      self.subscribe('recent-topics', self.limit.get());
    }
  });
});
```

## Contributing

Open issue and pull requests.

To run tests locally, run `meteor test-packages`.
