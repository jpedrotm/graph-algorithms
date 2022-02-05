import { Edge } from "./edge";
import { Vertex } from "./vertex";

export class Graph {
  private vertices: Record<string, Vertex> = {};
  private edges: Record<string, Edge> = {};
  private isDirected = false;

  constructor(isDirected: boolean) {
    this.isDirected = isDirected;
  }

  addVertex(vertex: Vertex): void {
    this.vertices[vertex.getKey()] = vertex;
  }

  getVertexByKey(vertexKey: string): Vertex {
    return this.vertices[vertexKey];
  }

  getAllVertices(): Vertex[] {
    return Object.values(this.vertices);
  }

  getAllEdges(): Edge[] {
    return Object.values(this.edges);
  }

  addEdge(edge: Edge): void {
    let startVertex = this.getVertexByKey(edge.startVertex.getKey());
    let endVertex = this.getVertexByKey(edge.endVertex.getKey());

    if (!startVertex) {
      this.addVertex(edge.startVertex);
      startVertex = this.getVertexByKey(edge.startVertex.getKey());
    }

    if (!endVertex) {
      this.addVertex(edge.endVertex);
      endVertex = this.getVertexByKey(edge.endVertex.getKey());
    }

    if (this.edges[edge.getKey()]) {
      throw new Error('Edge has already been added before');
    } else {
      this.edges[edge.getKey()] = edge;
    }

    if (this.isDirected) {
      startVertex.addEdge(edge);
    } else {
      startVertex.addEdge(edge);
      endVertex.addEdge(edge);
    }
  }

  deleteEdge(edge: Edge) {
    if (this.edges[edge.getKey()]) {
      delete this.edges[edge.getKey()];
    } else {
      throw new Error('Edge not found in graph');
    }

    const startVertex = this.getVertexByKey(edge.startVertex.getKey());
    const endVertex = this.getVertexByKey(edge.endVertex.getKey());

    startVertex.deleteEdge(edge);
    endVertex.deleteEdge(edge);
  }

  reverseEdges(): void {
    this.getAllEdges().forEach((edge) => {
      this.deleteEdge(edge);

      edge.reverse();

      this.addEdge(edge);
    });
  }
}
