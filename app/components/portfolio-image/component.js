import Ember from 'ember';

export default Ember.Component.extend({
  model (params) {
    let id = this.get('store').findRecord('portfolio-image', params.portfolioimage_id);
    console.log(id);
    return id;
  },
  actions: {
    editLink() {
      this.sendAction('editLink', this.get('image'));
    },
    deleteLink() {
      this.sendAction('deleteLink', this.get('image'));
    },
  }
});
