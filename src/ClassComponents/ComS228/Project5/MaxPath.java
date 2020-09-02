package edu.iastate.cs228.hw5;
/*
 *  @author
 *  Ben Alexander
 */

import java.util.HashMap;
import java.util.HashSet;
import java.util.function.BiConsumer;

public class MaxPath {

	/**
	 *  If G is null or maxPath is null, then it throws IllegalArgumentException
	 with
	 the message "null arguments". If maxPath is not empty, then it throws
	 IllegalArgumentException with the message "maxPath is not empty".
	
	 This method calls depthFirstSearch() in the class DFS on G, and saves the
	 reference
	 to a stack of vertices from depthFirstSearch() into the variable
	 topoOrder
	 of type LinkedStack<V>. If topoOrder is null, then it throws
	 IllegalArgumentException
	 with the message "The graph has a cycle".
	 If topoOrder is empty, then it throws IllegalStateException with the
	 message
	 "topoOrder is empty".
	
	 Then it creates a dist map and a pred map (see lecture code on Dijkstra's
	 algorithm).
	 And it sets the value to 0 for each vertex in the dist map, and sets the
	 value to null
	 for each vertex in the pred map.
	
	 For each vertex u in the stack topoOrder, removes u from the stack,
	 and for each edge from u to v, if the cost of the path to v via vertex u
	 is larger than the current cost of v (given by dist.get(v)), then updates
	 the current cost of v with the larger cost and sets the value of v to u
	 in the pred map (see lecture code on Dijkstra's algorithm).
	
	 Let score of type Integer be the maximum distance of any path seen so far
	 and
	 let end of type V be the ending vertex of a path with the distance score.
	 Initially, score is set to 0 and end to null. Whenever the distance of
	 a new path ending at vertex v is larger than score, sets score to the
	 larger
	 distance and sets end to v.
	
	 At the end of this method, score is the maximum distance of all paths in
	 the graph
	 and a path with this maximum distance ends at the vertex end.
	 Uses the pred map to generate each vertex in this path in reverse order,
	 starting at the vertex end, and places the vertices in the stack maxPath
	 with the stack top being the first vertex in this path. Note that the
	 pred value
	 for the first vertex is null.
	 * @param G
	 * @param maxPath
	 * @return cost of the max path
	 * @throws IllegalArgumentException
	 * @throws IllegalStateException
	 */
	public static <V> Integer findMaxPath(DiGraph<V> G, LinkedStack<V> maxPath) throws IllegalArgumentException, IllegalStateException{
		if(G == null || maxPath == null){
			throw new IllegalArgumentException("null arguments");
		}
		if(!maxPath.isEmpty()){
			throw new IllegalArgumentException("maxPath is not empty");
		}
		LinkedStack<V> topoOrder = new LinkedStack<V>();
		topoOrder = DFS.depthFirstSearch(G);
		if(topoOrder == null){
			throw new IllegalArgumentException("The graph has a cycle");
		}
		if(topoOrder.isEmpty()){
			throw new IllegalStateException("topoOrder is empty");
		}
		HashMap<V, Integer> dist = new HashMap<V, Integer>();
		HashMap<V, V> pred = new HashMap<V, V>();
		for(V w : G.vertices()){
			dist.put(w, 0);
			pred.put(w, null);
		}
		Integer score = 0;
		V end = null;
		while(!topoOrder.isEmpty()){
			V u = topoOrder.pop();
			LinkedStack<Edge<V, Integer>> pStack = new LinkedStack<Edge<V, Integer>>();
			HashSet<V> vertices = new HashSet<V>();
			pStack.push(new Edge<V, Integer>(u, 0));
			dist.put(u, 0);
			
			while(!pStack.isEmpty()){
				Edge<V, Integer> edge = pStack.pop();
				V a = edge.getVertex();
				if(!vertices.contains(a)){
					vertices.add(a);
				}
				for(Edge<V, Integer> t : G.adjacentTo(a)){
					V v = t.getVertex();
					Integer distA = dist.get(a) + t.getCost();
					Integer distV = dist.get(v);
					if(distV == null || distV < distA){
						dist.put(v, distA);
						pred.put(v, a);
						pStack.push(new Edge<V, Integer>(v, distA));
					}
					if(distA > score){
						score = distA;
						end = v;
					}
				}
			}
		}
		while(pred.get(end) != null){
			maxPath.push(end);
			end = pred.get(end);
		}
		
		maxPath.push(end);
		return score; // TODO
	}
}