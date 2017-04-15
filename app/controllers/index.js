import Ember from 'ember';

export default Ember.Controller.extend({
  tick: Ember.inject.service(),
  queryParams: ['api'],
  api: null
});