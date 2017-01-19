import Ember from 'ember';

export default Ember.Component.extend({
  model (params) {
    let id = this.get('store').findRecord('portfolio-image', params.portfolioimage_id);
    return id;
  },
  auth: Ember.inject.service(),
  matchTag : Ember.computed('image', function () {
    let match = this.get('image').get('category') !== 'z';
    return match;
  }),
  canEdit : Ember.computed('image', function () {
    let id = this.get('auth.credentials.id');
    let owner = this.get('image').get('_owner');
    if(id === owner)
    {
      return true;
    } else {
      return false;
    }
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
