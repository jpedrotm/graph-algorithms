import { Vertex } from 'src/graph/vertex';

/**
 * Complexity Analysis:
 * - Time complexity: O(V + E), where V is the number of vertices and E is the number
 * of edges in the graph.
 * - Space Complexity: O(V), since an extra visited array of size V is required.
 */
export const dfsRecursive = (startVertex: Vertex): void => {
  const visited: Set<string> = new Set();

  dfsRecursiveUtil(startVertex, visited);
};

const dfsRecursiveUtil = (vertex: Vertex, visited: Set<string>): void => {
  if (!vertex) {
    return;
  }

  visited.add(vertex.getKey());
  console.log('visited', vertex.getKey());

  for (const child of vertex.getChildVertices()) {
    if (!visited.has(child.getKey())) {
      dfsRecursiveUtil(child, visited);
    }
  }
};

export const dfsIterative = (startVertex: Vertex): void => {
  const stack: Vertex[] = [];
  const visited: Set<string> = new Set();

  stack.push(startVertex);
  visited.add(startVertex.getKey());

  while (stack.length > 0) {
    const vertex: Vertex = stack.pop() as Vertex;
    console.log('visited', vertex.getKey());

    for (const child of vertex.getChildVertices()) {
      if (!visited.has(child.getKey())) {
        stack.push(child);
        visited.add(child.getKey());
      }
    }
  }
};
