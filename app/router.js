import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.resource('todos', { path: '/' }, function() {
        this.route('active');
        this.route('complete');
    });
  this.route('todos/active');
  this.route('todos/complete');
});

export default Router;
