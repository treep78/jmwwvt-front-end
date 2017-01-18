import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').find('portfolio-image', params.image_id);
  },
  // createImage(newImage) {
  //     console.log('inside route create image. NewImage is: ', newImage);
  //     let image = this.get('store').createRecord('category-image', newImage);
  //     image.save();
  //   }
});
