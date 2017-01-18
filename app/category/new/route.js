import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    console.log('this ran!');
    return this.get('store').createRecord('portfolio-image', {});
  },
  actions: {
    createImage(image) {
      image.save();
      this.transitionTo('portfolio');
    },
    cancelCreateImage(image) {
      image.rollbackAttributes();
      this.transitionTo('portfolio');
    }
  }
});
