import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('portfolio-image');
  },
  actions: {
    editLink(image) {
      this.transitionTo('portfolio-image/edit', image);
      console.log('Portfolio route edit action');
    },
    deleteLink(image){
      image.destroyRecord();
    },
  },
  createCategory(newCategory) {
    console.log('inside route create image. NewImage is: ', newCategory);
    let category = this.get('store').createRecord('portfolio-image', newCategory);
    category.save();
  }
});
