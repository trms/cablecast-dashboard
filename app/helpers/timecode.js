import Ember from 'ember';

var padWithZeros = function(num, size) {
        var s = num + "";
        while (s.length < size) { s = "0" + s; }
        return s;
    };

var trmsTimecode = function(totalSeconds) {
    if(isNaN(totalSeconds) || totalSeconds === 0) {
        return 'N/A';
    }

	var hours = padWithZeros(Math.floor(totalSeconds / (60 * 60)), 2);

    var divisor_for_minutes = totalSeconds % (60 * 60);
    var minutes = padWithZeros(Math.floor(divisor_for_minutes / 60), 2);

    var divisor_for_seconds = divisor_for_minutes % 60;
    var seconds = padWithZeros(Math.ceil(divisor_for_seconds), 2);

    return hours + ':' + minutes + ':' + seconds;
};

export default Ember.Helper.helper(function([seconds]) {
  return trmsTimecode(seconds);
});