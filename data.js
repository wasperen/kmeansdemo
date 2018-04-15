const _ = require('underscore')
//const random = require('true-random');

const nrSamples = 150;

// var generator = new Promise(function(resolve, reject) {
// 		return new random.rand(500, 200, resolve);
// 	});

function getSamples(count=nrSamples) {
	// return generator.then( d => _.zip(
	// 	_.range(nrSamples),
	// 	d.integers(-1.0, 1.0, nrSamples),
	// 	d.integers(-1.0, 1.0, nrSamples)
	// ));
	function scale(d) { return 2.0 * d - 1.0; }
	return new Promise( (resolve, reject) => {
		var samples = _.map(_.range(count), d => ({ id: d, vector: [scale(Math.random()), scale(Math.random())], cluster: undefined }));
		return resolve(samples);
	})
}

function getGroupedSamples(count) {
	return getSamples(count).then( d => _.map(d, dd => _.extend(dd, { vector: _.map(dd.vector, v => Math.sin(0.5 * Math.PI * v) ) })));
}

exports.getSamples = getSamples
exports.getGroupedSamples = getGroupedSamples