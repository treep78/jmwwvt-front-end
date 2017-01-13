import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('portfolio-image');
  },
  createImage(newImage) {
      console.log('inside route create image. NewImage is: ', newImage);
      let image = this.get('store').createRecord('portfolio-image', newImage);
      item.save();
    }
});
