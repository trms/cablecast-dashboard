import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://cablecast.bectv.org',
  namespace: 'cablecastapi/v1'
});