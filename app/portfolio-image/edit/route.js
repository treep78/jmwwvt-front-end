import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').find('portfolio-image', params.portfolio_image_id);
  },
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
