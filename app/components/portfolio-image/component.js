import Ember from 'ember';

export default Ember.Component.extend({
  model (params) {
    let id = this.get('store').findRecord('portfolio-image', params.portfolioimage_id);
    console.log(id);
    return id;
  },
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
