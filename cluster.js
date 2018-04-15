const _ = require('underscore')
const kmeans = require('ml-kmeans')
const squaredDistance = require('ml-distance-euclidean').squared;

const defaultNrClusters = 4;

function getClusters(options) {
	var data = options.data;
	var centroids = (options.centroids && options.centroids.length > 0) ? _.map(options.centroids, c => c.vector ) : 'random'
	var maxIterations = options.maxIterations ? options.maxIterations : 100;
	var nrClusters = (options.centroids && options.centroids.length > 0) ? options.centroids.length : defaultNrClusters;
	var points = _.map(data, d => d.vector);

	var clusters = kmeans(points, nrClusters, { maxIterations: maxIterations, initialization: centroids });
	return {
		data: _.map(data, (d, i) => _.extend(d, {cluster: clusters.clusters[i]} )),
		centroids: _.map(clusters.centroids, (c,i) => ({id: i, vector: c.centroid}) )
	};
}

function distance(a, b) {
	return _.reduce(_.range(a.length), (m,i) => m + (a[i] - b[i]) * (a[i] - b[i]), 0);
}

function determineClusters(options) {
	var centroids = options.centroids;
	var data = options.data;

	function bestCluster(point) {
		return _.chain(centroids)
			.map( c => [c.id, distance(point.vector, c.vector)] )
			.reduce( (m, d) => d[1] < m[1] ? d : m )
			.first()
			.value()
	}

	return _.map(data, p => _.extend(p, { cluster: bestCluster(p) }) )
}

exports.getClusters = getClusters
exports.determineClusters = determineClusters