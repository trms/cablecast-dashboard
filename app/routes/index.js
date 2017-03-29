import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      channels: this.get('store').findAll('channel'),
      events: this.get('store').query('event-summary', {
        include: 'show,device'
      })
    })
  }
});