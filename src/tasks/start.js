module.exports = function() {
	require('./helpers')();
	require('./partials')();
	require('./scripts').development();
	require('./server')();
};