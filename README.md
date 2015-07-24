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

* `CurrentRoute.params`

This returns an array of parameters passed to the current route.
The array also has parameter names as properties and their values as corresponding values.

This means that you can easily access parameters either by values or name.

```javascript
Router.route('fruit/:name/:color', {
  name: 'fruit'
});

Router.go('fruit', {name: 'banana', color: 'blue'});

CurrentRoute.params
// => ['banana', 'blue']

CurrentRoute.params.name
// => 'blue'

CurrentRoute.params.color
// => 'blue'
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
