import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),

  model () {
    let categories = this.get('store').findAll('category');
    let images =  this.get('store').findAll('portfolio-image');
    console.log(this.get('auth.isAuthenticated'));
    let loggedIn = this.get('auth.isAuthenticated');
    return {'categories': categories, 'images': images, 'loggedIn': loggedIn};
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
