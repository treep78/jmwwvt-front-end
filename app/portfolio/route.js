import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('portfolio-image');
  },
  createCategory(newCategory) {
      console.log('inside route create image. NewImage is: ', newCategory);
      let category = this.get('store').createRecord('portfolio-image', newCategory);
      item.save();
    }
});
