# Iron-utils
[![Build Status](https://travis-ci.org/sungwoncho/iron-utils.svg?branch=master)](https://travis-ci.org/sungwoncho/iron-utils)

Iron-utils provides convenient client side utilities for Iron Router.

## Get Started

Install the package:

    meteor add sungwoncho:iron-utils


## Utilities

You can use the following utilities anywhere in client side.

### CurrentRoute

The CurrentRoute object includes helper methods related to current routes.

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

This returns an array of values of parameters passed to the current route.
The array also contains properties with values equal to the parameter values.

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

This compares current route's name with the name passed as an argument and returns
a boolean.

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
// Before
var currentRoute = Router.current();

if (currentRoute.route.getName() === 'category.show') {
  self.subscribe('topics', currentRoute.params.slug, self.limit.get());
} else {
  self.subscribe('recent-topics', self.limit.get());
}

// After
if (CurrentRoute.is('category.show')) {
  self.subscribe('topics', CurrentRoute.params.slug, self.limit.get());
} else {
  self.subscribe('recent-topics', self.limit.get());
}
```

## Contributing

Open issue and pull requests.

To run tests locally, run `meteor test-packages`.
