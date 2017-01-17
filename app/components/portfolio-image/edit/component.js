import Ember from 'ember';

export default Ember.Component.extend({
  model (params) {
    let id = this.get('store').findRecord('portfolio-image', params.portfolioimage_id);
    console.log(id);
    return id;
  },
  actions: {
    save() {
      this.sendAction('save', this.get('image'));
    },
    cancel() {
      this.sendAction('cancel', this.get('image'));
    }
  },
});
