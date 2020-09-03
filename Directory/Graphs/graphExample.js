import { Node, Graph } from './Graph';

const node0 = new Node(0);
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node0.children = [node1, node4, node5];
node1.children = [node3, node4];
node2.children = [node1];
node3.children = [node2, node4];
//node 4 and 5 have no children

const graph = new Graph();
graph.nodes.push(node0);
export default graph;
