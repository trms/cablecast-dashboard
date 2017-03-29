import Ember from 'ember';

export default Ember.Helper.extend({
  tick: Ember.inject.service(),
  compute([date]) {
    let tock = this.get('tick.tock');
    return moment(date).diff(tock, 'seconds');
  },
  update: Ember.observer('tick.tock', function() {
    this.recompute();
  })
});