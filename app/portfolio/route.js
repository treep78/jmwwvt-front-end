import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    let categories = this.get('store').findAll('category');
    let images =  this.get('store').findAll('portfolio-image');
    console.log('HELP!: ',categories);
    return {'categories': categories, 'images': images};
  },
  actions: {
    editLink(image) {
      this.transitionTo('portfolio-image/edit', image);
    },
    deleteLink(image){
      image.destroyRecord();
    },
  },
  createCategory(newCategory) {
    let category = this.get('store').createRecord('portfolio-image', newCategory);
    category.save();
  }
});
