// Routes for testing
Router.route('/apple', {
  name: 'apple',
  action: function () {
    this.stop();
  }
});

Router.route('/orange', {
  name: 'orange',
  action: function () {
    this.stop();
  }
});

Router.route('/fruits/:name', {
  name: 'fruit.show',
  action: function () {
    this.stop();
  }
});
