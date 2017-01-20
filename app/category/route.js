import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let imgIn = this.get('store').find('portfolio-image', params.image_id);
    let imgOut = this.get('store').findRecord('category', {category: imgIn.get('category')});
    return imgOut;
  },
  image(model) {
    let imgOut = this.get('store').findRecord('category', {category: model.get('category')});
    return imgOut;
  },
  actions: {
    deleteLink(image){
      image.destroyRecord();
    },
  }
});
