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
