import Ember from 'ember';

export default Ember.Controller.extend({
  tick: Ember.inject.service(),
  queryParams: ['api', 'channels'],
  api: null,
  channels: "1,2,3"
});