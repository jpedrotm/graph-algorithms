## Graphs

A Graph is a data structure that contains a finite number of vertices
(or nodes) and a finite set of edges connecting the vertices.

- **Undirected graph**: edges are bidirectional.
- **Directed graph**: edges are unidirectional/bi-directional. Additionally,
we can have DAGs (Direct Acyclic graphs), which represent directe graphs
without cycles.

There are two other types of graphs. **Weighted** and **Unweighted**. In the
weighted graph, edges will have a value associated with it. Edges in
unweighted graphs do not have any values associated. For example,
distance between two cities can be the weight of an edge that
connected two cities.

Finally, we can have **Disconnected graphs** where vertices are not required
to be connected to other vertices.

### Graph vs Tree

Graphs and Trees are both represented in the same data structure. What
makes them different is a set of rules:

- In both, a node/vertex can have any number of edges, except binary
trees, where each node can have at most, two child nodes/vertices.
- Graphs can be cyclic while Trees don't.

### Graphs Representation

#### Adjacency Matrix

Indices of row and column will represent the vertices and the values
in each cell represent edges (`1` when there is an edge between two
vertices and `0` otherwise).

#### Adjacency List

Indices of the list represent the vertices and each index (vertex)
has a list of all the edges stored as a list of vertices.

| Operation     | Adjacency Matrix | Adjacency List |
|  :---------:  |  :-------------: |   :--------:   |
| Add Vertex    | O(1)             | O(V^2)         |
| Add Edge      | O(1)             | O(1)           |
| Remove Vertex | O(V + E)         | O(V^2)         |
| Remove Edge   | O(E)             | O(1)           |
| Search        | O(V + E)         | O(1)           |
| Space         | O(V + E)         | O(V^2)         |


## Search algorithms

### Depth-first search (DFS)

Edge based technique to find all vertices and edges in a graph. Can be
implemented with two different approaches:

- Iterative: uses the Stack data structure, performs two stages, first visited
vertices are pushed into stack and second if there is no vertices then visited
vertices are popped.
  1. Start by putting any one of the graph's vertices on top of a stack.
  2. Take the top item of the stack and add it to the visited list.
  3. Create a list of that vertex's adjacent nodes.
  4. Add the ones which aren't in the visited list to the top of the stack.
  5. Keep repeating steps 2 and 3 until the stack is empty.

### Breadth-first search (BFS)

Vertex based technique for finding a shortest path in graph. It uses a
Queue data structure which follows first in first out. In BFS, one vertex
is selected at a time when it is visited and marked then its adjacent are
visited and stored in the queue.

### Differences

- BFS can be used to find single source shortest path in an unweighted graph
because in BFS, we reach a vertex with minimum number of edges from a source
vertex. In DFS, we might traverse through more edges to reach a destination
vertex from a source.
- BFS is more suitable for searching vertices which are closer to the given
source.	DFS is more suitable when there are solutions away from source.
- BFS considers all neighbors first. DFS is more suitable for game or puzzle
problems.
