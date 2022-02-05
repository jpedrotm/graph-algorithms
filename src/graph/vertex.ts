import { Edge } from "./edge";

export class Vertex {
  private value: string;
  private edges: Edge[] = [];

  constructor(value: string) {
    this.value = value;
  }

  addEdge(edge: Edge): void {
    this.edges.push(edge);
  }

  deleteEdge(edge: Edge): void {
    this.edges = this.edges.filter(e => e.getKey() !== edge.getKey());
  }

  getEdges(): Edge[] {
    return this.edges;
  }

  hasEdge(edge: Edge): boolean {
    return !!this.edges.find(e => e.getKey() === edge.getKey());
  }

  findEdge(vertex: Vertex): Edge | undefined {
    const edge = this.edges.find(e => e.startVertex === vertex || e.endVertex === vertex);

    return edge;
  }

  getChildVertices(): Vertex[] {
    return this.edges.map(edge => edge.startVertex === this ? edge.endVertex : edge.startVertex);
  }

  getKey(): string {
    return this.value;
  }
}
