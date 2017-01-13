import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').createRecord('portfolio-image', {});
  },
  actions: {
    createImage(image) {
      console.log("This is the image: ",image)
      image.save();
      //this.transitionTo('portfolio');
    },
    cancelCreateList(image) {
      image.rollbackAttributes();
      this.transitionTo('portfolio');
    }
  }
});
