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
  this.route('category', {path: '/portfolio/category'});

  this.route('portfolio-image');
  this.route('portfolio-image/new');
});

export default Router;
