import Ember from 'ember';

export default Ember.Component.extend({
 channel: null,
 tick: Ember.inject.service(),
 filteredSummaries: Ember.computed('channel.eventSummaries.[]', 'tick.tock', function () {
   let summaries = this.get('channel.eventSummaries');
   let now = new Date(this.get('tick.tock'));
   summaries = summaries.filter((summary) => {
     return summary.get('end') > now;
   });

   summaries = summaries.sortBy('start');

   summaries = summaries.slice(0, 3);

   return summaries;
 }),
 actions: {

 }
});