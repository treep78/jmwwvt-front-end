import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('portfolio');
  this.route('contact');

  this.route('portfolio-image/new');
  this.route('portfolio-image/edit', {path: 'portfolio-image/edit/:portfolio-image_id'});

  this.route('category', function() {
    this.route('new');
    this.route('edit');
  });
});

export default Router;
