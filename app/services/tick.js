import Ember from 'ember';

export default Ember.Service.extend({
  init() {
    this._super(...arguments);
    this.update();
  },
  tock: null,
  update() {
    this.set('tock', Date.now());
    Ember.run.later(this, 'update', 1000);
  }
});