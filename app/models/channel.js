import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  eventSummaries: DS.hasMany('event-summary'),
  automationOverriden: DS.attr()
});