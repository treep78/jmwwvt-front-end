import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      let image = this.get('image');
      let link = image.get('link').split('');
      for(let i=0; i<link.length;i++) {
        if(link[i] === '.'){
          let ext = link[i+1]+link[i+2]+link[i+3];
          if(ext === 'png' || ext === 'jpg') {
            this.sendAction('save', this.get('image'));
            return
          }
        }
      }
      this.get('image').setProperties({link: 'This field must be a link to a .PNG or .JPG'});
    },
    cancel() {
      this.sendAction('cancel', this.get('image'));
    }
  },
});
