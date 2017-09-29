import Ember from 'ember';
import { task,timeout } from 'ember-concurrency';

export default Ember.Route.extend({
  blackboard: Ember.inject.service(),
  queryParams: {
    channels: {
      refreshModel: true
    },
    api: {
      refreshModel: true
    }
  },

  beforeModel() {
    let params = this.paramsFor(this.routeName);
    this.set('blackboard.api', params.api || 'tighty.tv');
  },

  model(params) {
    return this.fetchData().then((result) => {

      let channelIDs = params.channels;
      if(channelIDs === null) {
        channelIDs = "1,2,3";
      }

      let channelOrder = channelIDs.split(',');

      let channels = [];

      channelOrder.forEach((id) => {
        let items = result.channels.filter((channel) => channel.id === id);
        Array.prototype.push.apply(channels, items);
      });

      result.channels = channels;
      return result;
    });
  },

  afterModel() {
    this.get('updateData').perform();
  },

  updateData: task(function * () {
    while (true) {
      yield timeout(30 * 1000);
      try {
        yield this.fetchData();
      } catch (e) {
        Ember.Logger.error("Failed to fetch data.", e);
      }
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