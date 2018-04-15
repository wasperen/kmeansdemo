const express = require('express')
const data = require('./data')
const cluster = require('./cluster')

const app = express()
app.use(express.json());
app.use(express.static('http'));

app.get('/v1/samples/:cnt?', (req, res) => data.getSamples(req.params.cnt).then( (d) => res.json(d)))
app.get('/v1/groupedsamples/:cnt?', (req, res) => data.getGroupedSamples(req.params.cnt).then( d => res.json(d) ))

app.get('/v1/clusters/:cnt?', (req, res) => data.getGroupedSamples(req.params.cnt).then( d => res.json(cluster.getClusters(d)) ))

app.post('/v1/assignclusters', (req, res) => { console.log(req.body); res.json(cluster.determineClusters(req.body)) } )
app.post('/v1/makeclusters', (req, res) => { console.log(req.body); res.json(cluster.getClusters(req.body)) } )

app.listen(3000, () => console.log('started and listing on 3000'))