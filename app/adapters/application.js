import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://trms.ctv15.org',
  namespace: 'cablecastapi/v1'
});