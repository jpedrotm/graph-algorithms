import { Graph } from 'src/graph';
import { Edge } from 'src/graph/edge';
import { Vertex } from 'src/graph/vertex';

const Infinity = 999;

export const dijkstra = (
  startVertex: Vertex,
  endVertex: Vertex,
  graph: Graph,
): void => {
  const visited: Set<string> = new Set();
  const distances: Record<string, number> = {};
  const parents: Record<string, Vertex | null> = {};

  /**
   * Initialize all vertices distances to startVertex with 'Infinity'
   * (except the startVertex itself) and no parents.
   * */
  for (const vertex of graph.getAllVertices()) {
    distances[vertex.getKey()] =
      vertex.getKey() !== startVertex.getKey() ? Infinity : 0;
    parents[vertex.getKey()] = null;
  }

  let currVertex: Vertex | undefined = vertexWithMinDistance(
    distances,
    visited,
    graph,
  );

  while (currVertex !== undefined) {
    const distance: number = distances[currVertex.getKey()],
      edges: Edge[] = currVertex.getEdges();

    for (const edge of edges) {
      const newDistance = distance + edge.weight;
      if (distances[edge.endVertex.getKey()] > newDistance) {
        distances[edge.endVertex.getKey()] = newDistance;
        parents[edge.endVertex.getKey()] = currVertex;
      }
    }
    visited.add(currVertex.getKey());
    currVertex = vertexWithMinDistance(distances, visited, graph);
  }

  printPath(endVertex, parents);
};

/**
 * Get vertex with the minimum distance and has not been visited.
 */
const vertexWithMinDistance = (
  distances: Record<string, number>,
  visited: Set<string>,
  graph: Graph,
): Vertex | undefined => {
  let minDistance = Infinity,
    minVertexKey: string | undefined;
  for (const vertex in distances) {
    const distance = distances[vertex];
    if (distance < minDistance && !visited.has(vertex)) {
      minDistance = distance;
      minVertexKey = vertex;
    }
  }

  return minVertexKey ? graph.getVertexByKey(minVertexKey) : undefined;
};

const printPath = (
  currentVertex: Vertex | null,
  parents: Record<string, Vertex | null>,
): void => {
  if (currentVertex == null) {
    return;
  }

  printPath(parents[currentVertex.getKey()], parents);
  console.log(currentVertex.getKey());
};
