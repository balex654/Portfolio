package edu.iastate.cs228.hw4;

import java.util.Arrays;
import java.util.Scanner;
import java.io.FileNotFoundException;
import java.io.File;

/**
 * @author Ben Alexander
 *
 * An entry tree class
 */
public class EntryTree<K, V> {
	/**
	 * dummy root node made public for grading
	 */
	protected Node root;
	
	private Node cur;
	
	/**
	 * prefixlen is the largest index such that the keys in the subarray keyarr
	 * from index 0 to index prefixlen - 1 are, respectively, with the nodes on
	 * the path from the root to a node. prefixlen is computed by a private
	 * method shared by both search() and prefix() to avoid duplication of code.
	 */
	protected int prefixlen = 0;

	protected class Node implements EntryNode<K, V> {
		protected Node child; // link to the first child node
		protected Node parent; // link to the parent node
		protected Node prev; // link to the previous sibling
		protected Node next; // link to the next sibling
		protected K key; // the key for this node
		protected V value; // the value at this node

		public Node(K aKey, V aValue) {
			key = aKey;
			value = aValue;
			child = null;
			parent = null;
			prev = null;
			next = null;
		}

		@Override
		public EntryNode<K, V> parent() {
			// TODO
			if(parent == null){
				return null;
			}
			return parent;
		}

		@Override
		public EntryNode<K, V> child() {
			// TODO
			if(child == null){
				return null;
			}
			return child;
		}

		@Override
		public EntryNode<K, V> next() {
			// TODO
			if(next == null){
				return null;
			}
			return next;
		}

		@Override
		public EntryNode<K, V> prev() {
			// TODO
			if(prev == null){
				return null;
			}
			return prev;
		}

		@Override
		public K key() {
			// TODO
			return key;
		}

		@Override
		public V value() {
			// TODO
			return value;
		}
	}

	public EntryTree() {
		root = new Node(null, null);
	}

	/**
	 * Returns the value of the entry with a specified key sequence, or null if
	 * this tree contains no entry with the key sequence.
	 * 
	 * @param keyarr
	 * @return
	 */
	public V search(K[] keyarr) throws NullPointerException{
		// TODO
		if(keyarr == null || keyarr.length == 0 || !contains(keyarr)){
			return null;
		}
		for(int i = 0; i < keyarr.length; i++){
			if(keyarr[i] == null){
				throw new NullPointerException();
			}
		}
		Node cur = root.child;
		int i = 0;
		while(i < keyarr.length){
			if(keyarr[i] == cur.key){
				if(i != keyarr.length - 1){
					cur = cur.child;
				}
				i++;
			}
			else{
				cur = cur.next;
			}
		}
		return cur.value;
	}
	
	/**
	 * checks to see if the tree contains the specified sequence
	 * @param keyarr
	 * @return true if the tree contains the sequence
	 */
	private boolean contains(K[] keyarr){
		Node cur = root.child;
		int i = 0;
		while(i < keyarr.length){
			if(keyarr[i] == cur.key){
				if(i != keyarr.length - 1){
					cur = cur.child;
				}
				i++;
			}
			else{
				cur = cur.next;
			}
			if(cur == null){
				return false;
			}
		}
		return true;
	}
	
	/**
	 * The method returns an array of type K[] with the longest prefix of the
	 * key sequence specified in keyarr such that the keys in the prefix label
	 * the nodes on the path from the root to a node. The length of the returned
	 * array is the length of the longest prefix.
	 * 
	 * @param keyarr
	 * @return
	 */
	public K[] prefix(K[] keyarr) throws NullPointerException{
		// TODO
		if(keyarr == null || keyarr.length == 0 || root.child == null){
			return null;
		}
		for(int i = 0; i < keyarr.length; i++){
			if(keyarr[i] == null){
				throw new NullPointerException();
			}
		}
		Node cur = root.child;
		int i = 0;
		boolean hasNext = true;
		while(hasNext){
			if(keyarr[i] == cur.key){
				i++;
				if(cur.child == null){
					hasNext = false;
				}
				cur = cur.child;
			}
			else if(cur.next != null){
				cur = cur.next;
			}
			else{
				hasNext = false;
			}
		}
		prefixlen = i;
		K[] prefixArr = Arrays.copyOf(keyarr, i);
		return prefixArr;
		// Hint: An array of the same type as keyarr can be created with
		// Arrays.copyOf().
	}

	/**
	 * The method locates the node P corresponding to the longest prefix of the
	 * key sequence specified in keyarr such that the keys in the prefix label
	 * the nodes on the path from the root to the node. If the length of the
	 * prefix is equal to the length of keyarr, then the method places aValue at
	 * the node P and returns true. Otherwise, the method creates a new path of
	 * nodes (starting at a node S) labelled by the corresponding suffix for the
	 * prefix, connects the prefix path and suffix path together by making the
	 * node S a child of the node P, and returns true.
	 * 
	 * @param keyarr
	 * @param aValue
	 * @return
	 */
	public boolean add(K[] keyarr, V aValue) throws NullPointerException{
		// TODO
		if(keyarr == null || keyarr.length == 0 || aValue == null){
			return false;
		}
		for(int i = 0; i < keyarr.length; i++){
			if(keyarr[i] == null){
				throw new NullPointerException();
			}
		}
		if(root.child == null){
			Node prevNode = root;
			for(int i = 0; i < keyarr.length; i++){
				if(i == keyarr.length - 1){
					Node cur = new Node(keyarr[i], aValue);
					prevNode.child = cur;
					cur.parent = prevNode;
				}
				else{
					Node cur = new Node(keyarr[i], null);
					prevNode.child = cur;
					cur.parent = prevNode;
					prevNode = cur;
				}
			}
		}
		else{
			K[] prefixArr = prefix(keyarr);
			Node lastNode;
			if(prefixArr.length == 0){
				lastNode = root;
			}
			else{
				lastNode = findLastNode(prefixArr);
			}
			if(lastNode.child != null){
				Node cur = new Node(keyarr[prefixArr.length], null);
				Node iter = lastNode.child;
				while(iter.next != null){
					iter = iter.next;
				}
				iter.next = cur;
				cur.prev = iter;
				cur.parent = lastNode;
				Node prevNode = cur;
				for(int i = prefixArr.length + 1; i < keyarr.length; i++){
					if(i == keyarr.length - 1){
						cur = new Node(keyarr[i], aValue);
						prevNode.child = cur;
						cur.parent = prevNode;
					}
					else{
						cur = new Node(keyarr[i], null);
						prevNode.child = cur;
						cur.parent = prevNode;
						prevNode = cur;
					}
				}
			}
			else if(lastNode.child == null){
				Node prevNode = lastNode;
				if(prefixArr.length == keyarr.length){
					lastNode.value = aValue;
				}
				for(int i = prefixArr.length; i < keyarr.length; i++){
					if(i == keyarr.length - 1){
						Node cur = new Node(keyarr[i], aValue);
						prevNode.child = cur;
						cur.parent = prevNode;
					}
					else{
						Node cur = new Node(keyarr[i], null);
						prevNode.child = cur;
						cur.parent = prevNode;
						prevNode = cur;
					}
				}
			}
		}
		return true;
	}
	
	/**
	 * Finds the last node in the given sequence in the tree
	 * @param keyarr
	 * @return last node in sequence
	 */
	private Node findLastNode(K[] keyarr){
		if(keyarr == null || keyarr.length == 0){
			return null;
		}
		Node cur = root.child;
		int i = 0;
		while(i < keyarr.length){
			if(keyarr[i] == cur.key){
				if(i == keyarr.length - 1){
					return cur;
				}
				else{
					cur = cur.child;
					i++;
				}
			}
			else{
				cur = cur.next;
			}
		}
		return cur;
	}
	
	/**
	 * Removes the entry for a key sequence from this tree and returns its value
	 * if it is present. Otherwise, it makes no change to the tree and returns
	 * null.
	 * 
	 * @param keyarr
	 * @return
	 */
	public V remove(K[] keyarr) throws NullPointerException{
		// TODO
		if(keyarr == null || keyarr.length == 0 || !contains(keyarr)){
			return null;
		}
		for(int i = 0; i < keyarr.length; i++){
			if(keyarr[i] == null){
				throw new NullPointerException();
			}
		}
		Node lastNode = findLastNode(keyarr);
		V value = lastNode.value;
		lastNode.value = null;
		Node cur = lastNode;
		boolean hasSibling = false;
		if(lastNode.child != null){
			return value;
		}
		while(!hasSibling && cur != root && cur.value == null){
			if(cur.parent.child == cur && cur.next != null){
				cur.parent.child = cur.next;
				cur.next.prev = null;
				hasSibling = true;
			}
			else{
				if(cur.next != null){
					cur.next.prev = null;
					hasSibling = true;
				}
				else if(cur.prev != null){
					cur.prev.next = null;
					hasSibling = true;
				}
				else{
					cur.parent.child = null;
				}
			}
			cur = cur.parent;
		}
		return value;
	}

	/**
	 * The method prints the tree on the console in the output format shown in
	 * an example output file.
	 */
	public void showTree() {
		// TODO
		recShowTree(root, 0);
	}
	
	/**
	 * Recursive helper method used by showTree
	 * @param start
	 * @param spaces
	 */
	public void recShowTree(Node start, int spaces){
		String s = "";
		if(start == root.child){
			s = s + "      ";
			spaces = spaces + 6;
			s = s + start.key + "->" + start.value;
		}
		else if(start == root){
			s = s + start.key + "->" + start.value;
		}
		else{
			for(int i = 0; i < spaces + 2; i++){
				s = s + " ";
			}
			spaces = spaces + 2;
			s = s + start.key + "->" + start.value;
		}
		System.out.println(s);
		if(start.child != null){
			recShowTree(start.child, spaces);
		}
		if(start.next != null){
			recShowTree(start.next, spaces - 2);
		}
	}

}