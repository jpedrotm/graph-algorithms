import { Vertex } from 'src/graph/vertex';

/**
 * Complexity Analysis:
 * - Time complexity: O(V + E), where V is the number of vertices and E is the number
 * of edges in the graph.
 * - Space Complexity: O(V), since an extra visited array of size V is required.
 */
export const bfs = (startVertex: Vertex): void => {
  const queue: Vertex[] = [];
  const visited: Set<string> = new Set();

  queue.push(startVertex);
  visited.add(startVertex.getKey());

  while (queue.length > 0) {
    const vertex: Vertex = queue.shift() as Vertex;
    console.log('visited', vertex.getKey());

    for (const child of vertex.getChildVertices()) {
      if (!visited.has(child.getKey())) {
        queue.push(child);
        visited.add(child.getKey());
      }
    }
  }
};
