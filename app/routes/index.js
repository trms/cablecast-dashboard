import Ember from 'ember';
import ajax from 'ic-ajax';
import { task,timeout } from 'ember-concurrency';


export default Ember.Route.extend({
  model() {
    return this.fetchData();
  },


  afterModel() {
    this.get('updateData').perform();
  },


  updateData: task(function * () {
    while (true) {
      yield timeout(5000);
      yield this.fetchData();
    }
    
  }).cancelOn('deactivate'),



  fetchData() {
    return Ember.RSVP.hash({
      channels: this.get('store').query('channel', {
        t: Date.now()
      }),
      events: this.get('store').query('event-summary', {
        include: 'show,device'
      })
    });
  }


});



