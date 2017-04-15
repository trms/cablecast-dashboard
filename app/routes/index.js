import Ember from 'ember';
import ajax from 'ic-ajax';
import { task,timeout } from 'ember-concurrency';


export default Ember.Route.extend({


  model() {
    return this.fetchData().then((result) => {
      let channelOrder = ['2', '1', '5'];

      let channels = result.channels;

      //TODO: Figure out how to sort them, all we are doing right now is filtering
      channels = channels.filter((channel) => {return channelOrder.includes(channel.id)});

      result.channels = channels;
      return result;
    })
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



