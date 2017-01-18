import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      this.sendAction('save', image);
    },
    cancel() {
      this.sendAction('cancel', this.get('image'));
    }
  },
});
