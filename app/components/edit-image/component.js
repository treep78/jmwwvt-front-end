import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      this.sendAction('save', this.get('image'));
    },
    cancel() {
      this.sendAction('cancel', this.get('image'));
    }
  },
});
