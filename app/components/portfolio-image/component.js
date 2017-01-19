import Ember from 'ember';

export default Ember.Component.extend({
  model (params) {
    let id = this.get('store').findRecord('portfolio-image', params.portfolioimage_id);
    console.log(id);
    return id;
  },
  auth: Ember.inject.service(),
  loggedIn : Ember.computed.alias('auth.isAuthenticated'),
  matchTag : Ember.computed('image', function () {
    let match = this.get('image').get('category') !== 'siding';
    return match;
  }),
  actions: {
    deleteLink() {
      this.sendAction('deleteLink', this.get('image'));
    },
    save(image) {
      this.sendAction('save', image);
    },
    cancel(image) {
      this.sendAction('cancel', image);
    },
  }
});
