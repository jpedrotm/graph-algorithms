import { Edge } from './graph/edge';
import { Graph } from './graph';
import { Vertex } from './graph/vertex';
import { dfsRecursive } from './algorithms/dfs';
import { bfs } from './algorithms/bfs';
import { dijkstra } from './algorithms/dijkstra';

/**
 * Sample directed graph (top to bottom).
 *
 *           v1
 *          /  \
 *         /    \
 *        v2     v3
 *       /  \
 *      /    \
 *     v4     v5
 *    /
 *   /
 *  v6
 */
const graph: Graph = new Graph(true);

const v1: Vertex = new Vertex('v1');
const v2: Vertex = new Vertex('v2');
const v3: Vertex = new Vertex('v3');
const v4: Vertex = new Vertex('v4');
const v5: Vertex = new Vertex('v5');
const v6: Vertex = new Vertex('v6');

const e1_2: Edge = new Edge(v1, v2, 1);
const e1_3: Edge = new Edge(v1, v3, 1);
const e2_4: Edge = new Edge(v2, v4, 2);
const e2_5: Edge = new Edge(v2, v5, 3);
const e4_6: Edge = new Edge(v4, v6, 2);

graph.addVertex(v1);
graph.addVertex(v2);
graph.addVertex(v3);
graph.addEdge(e1_2);
graph.addEdge(e1_3);
graph.addEdge(e2_4);
graph.addEdge(e2_5);
graph.addEdge(e4_6);

console.log('< DFS Recursive >');
dfsRecursive(v1);

console.log('< BFS >');
bfs(v1);

console.log('< Dijkstra >');
dijkstra(v1, v6, graph);
