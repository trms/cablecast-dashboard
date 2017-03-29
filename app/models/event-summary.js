import DS from 'ember-data';

export default DS.Model.extend({
  channel: DS.belongsTo('channel'),
  start: DS.attr('date'),
  end: DS.attr('date'),
  device: DS.belongsTo('device'),
  show: DS.belongsTo('show')
});