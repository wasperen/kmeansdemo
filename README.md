# kmeansdemo
A way to demonstrate how kmeans works. Bring up your browser and play with clustering in a two dimensional space.
Also includes contracting to show items moving towards their centroids.

## install
`$ npm update`

## run
`$ node app.js`
Then open a browser at `http://localhost:3000/index.html`

## operate
| button | action |
|---|---|
| add | Add one item |
| add+ | Add 15 items |
| centroid | Add a randomly placed centroid |
| assign | Assign items to their nearest centroids |
| cluster | Run one iteration of the k-means algorithm |
| cluster+ | Run the k-means algorithm till it converges |
| contract | Move items towards their centroid |
| contract+ | Move items forcefully towards their centroid |

## attributions
This work uses the following great frameworks:

 * node.js - https://github.com/nodejs/node/blob/master/LICENSE
 * express - https://github.com/expressjs/express/blob/master/LICENSE
 * d3js - https://github.com/d3/d3/blob/master/LICENSE
 * underscore.js - https://github.com/jashkenas/underscore/blob/master/LICENSE
 * ml-kmeans - https://github.com/mljs/kmeans/blob/master/LICENSE
