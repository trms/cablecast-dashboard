/* globals moment*/
import Ember from 'ember';

export default Ember.Helper.helper(function([date, format='LTS'], hash) {
  return moment(date).format(format);
});