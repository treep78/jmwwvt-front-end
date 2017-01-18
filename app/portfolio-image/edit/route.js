import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save(image) {
      image.save();
      this.transitionTo('portfolio');
    },
    cancel(image) {
      image.rollbackAttributes();
      this.transitionTo('portfolio');
    }
  }
});
