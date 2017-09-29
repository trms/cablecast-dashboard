import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  blackboard: Ember.inject.service(),
  host: Ember.computed("blackboard.api", function() {
  	let api = this.get('blackboard.api');
    return `http://${api}`;
  }),
  namespace: 'cablecastapi/v1'
});