import DS from 'ember-data';

export default DS.Model.extend({
  category: DS.attr('string'),
  count: DS.attr('string'),
});
