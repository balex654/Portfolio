package edu.iastate.cs228.hw3;
/*
 *  @author
 *
 *  An implementation of List<E> based on a doubly-linked list with an array for indexed reads/writes
 *
 */

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;
import java.util.NoSuchElementException;

/**
 * 
 * @author benalexander
 *
 * @param <E>
 */
public class AdaptiveList<E> implements List<E> {
	/**
	 * 
	 * @author benalexander
	 *
	 */
	public class ListNode // private member of outer class
	{
		public E data; // public members:
		public ListNode link; // used outside the inner class
		public ListNode prev; // used outside the inner class
		/**
		 * Constructor for ListNode
		 * @param item
		 */
		public ListNode(E item) {
			data = item;
			link = prev = null;
		}
	}

	public ListNode head; // dummy node made public for testing.
	public ListNode tail; // dummy node made public for testing.
	private int numItems; // number of data items
	private boolean linkedUTD; // true if the linked list is up-to-date.

	public E[] theArray; // the array for storing elements
	private boolean arrayUTD; // true if the array is up-to-date.
	/**
	 * Default constructor for AdaptiveList
	 */
	public AdaptiveList() {
		clear();
	}
	/**
	 * Method is used to initialize the list
	 */
	@Override
	public void clear() {
		head = new ListNode(null);
		tail = new ListNode(null);
		head.link = tail;
		tail.prev = head;
		numItems = 0;
		linkedUTD = true;
		arrayUTD = false;
		theArray = null;
	}
	/**
	 * determines if the linked list is up to date
	 * @return linkedUTD
	 */
	public boolean getlinkedUTD() {
		return linkedUTD;
	}
	/**
	 * determines if the array is up to date
	 * @return arrayUTD
	 */
	public boolean getarrayUTD() {
		return arrayUTD;
	}
	/**
	 * Constructor used for taking a collection as an input
	 * @param c
	 */
	public AdaptiveList(Collection<? extends E> c) {
		// TODO
		head = new ListNode(null);
		tail = new ListNode(null);
		head.link = tail;
		tail.prev = head;
		ListNode current = head;
		int count = 0;
		for (E e : c) {
			ListNode toAdd = new ListNode(e);
			link(current, toAdd);
			current = toAdd;
			count++;
		}
		numItems = count;
		linkedUTD = true;
		arrayUTD = false;
		theArray = null;
	}

	// Removes the node from the linked list.
	// This method should be used to remove a node from the linked list.
	private void unlink(ListNode toRemove) {
		if (toRemove == head || toRemove == tail)
			throw new RuntimeException("An attempt to remove head or tail");
		toRemove.prev.link = toRemove.link;
		toRemove.link.prev = toRemove.prev;
	}

	// Inserts new node toAdd right after old node current.
	// This method should be used to add a node to the linked list.
	private void link(ListNode current, ListNode toAdd) {
		if (current == tail)
			throw new RuntimeException("An attempt to link after tail");
		if (toAdd == head || toAdd == tail)
			throw new RuntimeException("An attempt to add head/tail as a new node");
		toAdd.link = current.link;
		toAdd.link.prev = toAdd;
		toAdd.prev = current;
		current.link = toAdd;
	}
	/**
	 * Used to update theArray if the list and theArray differ
	 */
	private void updateArray() // makes theArray up-to-date.
	{
		if (numItems < 0)
			throw new RuntimeException("numItems is negative: " + numItems);
		if (!linkedUTD)
			throw new RuntimeException("linkedUTD is false");
		// TODO
		ListNode node = head;
		theArray = (E[]) new Object[numItems];
		for (int i = 0; i < numItems; i++) {
			node = node.link;
			theArray[i] = node.data;
		}
		arrayUTD = true;
	}
	/**
	 * Used to update the list if theArray and the list differ
	 */
	private void updateLinked() // makes the linked list up-to-date.
	{
		if (numItems < 0)
			throw new RuntimeException("numItems is negative: " + numItems);
		if (!arrayUTD)
			throw new RuntimeException("arrayUTD is false");

		if (theArray == null || theArray.length < numItems)
			throw new RuntimeException("theArray is null or shorter");
		// TODO
		ListNode node = head;
		for (int i = 0; i < theArray.length; i++) {
			node = node.link;
			node.data = theArray[i];
		}
		linkedUTD = true;
	}
	/**
	 * Returns the number of elements in this list
	 * @return the number of elements in this list
	 */
	@Override
	public int size() {
		// TODO
		if(!linkedUTD){
			updateLinked();
		}
		return numItems; // may need to be revised.
	}
	/**
	 * Returns true if this list contains no elements
	 * @return true if this list contains no elements
	 */
	@Override
	public boolean isEmpty() {
		// TODO
		if(!linkedUTD){
			updateLinked();
		}
		if (head.link == tail) {
			return true;
		} else {
			return false;
		}
	}
	/**
	 * Appends the specified element to the end of this list
	 * @return true
	 * @param e - element to be appended to this list
	 */
	@Override
	public boolean add(E obj) throws NullPointerException, IllegalArgumentException {
		// TODO
		if(!linkedUTD){
			updateLinked();
		}
		ListNode newNode = new ListNode(obj);
		link(tail.prev, newNode);
		arrayUTD = false;
		numItems++;
		return true; // may need to be revised.
	}
	/**
	 * Appends all of the elements in the specified collection to the end of this list,
	 * in the order that they are returned by the specified collection's iterator
	 * @param c - collection containing elements to be added to this list
	 * @return true if this list changed as a result of the call
	 */
	@Override
	public boolean addAll(Collection<? extends E> c) throws NullPointerException{
		// TODO
		if(!linkedUTD){
			updateLinked();
		}
		int before = numItems;
		if(!c.isEmpty()){
			E[] array = (E[]) c.toArray();
			int size = array.length;
			for (int i = 0; i < size; i++) {
				ListNode newNode = new ListNode(array[i]);
				link(tail.prev, newNode);
				arrayUTD = false;
				numItems++;
			}
		}
		int after = numItems;
		if(before == after){
			return false;
		}
		return true; // may need to be revised.
	} // addAll 1
	/**
	 * Removes the first occurrence of the specified element from this list, if it is present 
	 * @param o - element to be removed from this list, if present
	 * @return true if this list contained the specified element
	 */
	@Override
	public boolean remove(Object obj) {
		// TODO
		if(!linkedUTD){
			updateLinked();
		}
		ListNode current = head;
		int size = numItems;
		for (int i = 0; i < size; i++) {
			current = current.link;
			if (current.data == obj) {
				unlink(current);
				arrayUTD = false;
				numItems--;
				return true;
			}
		}
		return false;
	}

	private void checkIndex(int pos) // a helper method
	{
		if (pos >= numItems || pos < 0)
			throw new IndexOutOfBoundsException("Index: " + pos + ", Size: " + numItems);
	}

	private void checkIndex2(int pos) // a helper method
	{
		if (pos > numItems || pos < 0)
			throw new IndexOutOfBoundsException("Index: " + pos + ", Size: " + numItems);
	}

	private void checkNode(ListNode cur) // a helper method
	{
		if (cur == null || cur == tail)
			throw new RuntimeException("numItems: " + numItems + " is too large");
	}
	/**
	 * find the node in the list at the given position(first element has position 0)
	 * @param pos
	 * @return ListNode at pos
	 */
	private ListNode findNode(int pos) // a helper method
	{
		ListNode cur = head;
		for (int i = 0; i < pos; i++) {
			checkNode(cur);
			cur = cur.link;
		}
		checkNode(cur);
		return cur;
	}
	/**
	 * Inserts the specified element at the specified position in this list
	 * @param pos - index at which the specified element is to be inserted
	 * @param obj - element to be inserted
	 */
	@Override
	public void add(int pos, E obj) throws IndexOutOfBoundsException {
		// TODO
		if (pos < 0 || pos > size()) {
			throw new IndexOutOfBoundsException("Index out of bounds");
		}
		if(!linkedUTD){
			updateLinked();
		}
		if (isEmpty()) {
			ListNode node = new ListNode(obj);
			link(tail.prev, node);
			arrayUTD = false;
			numItems++;
		} else {
			ListNode newNode = new ListNode(obj);
			ListNode current = head.link;
			for (int i = 0; i < pos; i++) {
				current = current.link;
			}
			link(current.prev, newNode);
			arrayUTD = false;
			numItems++;
		}
	}
	/**
	 * Inserts all of the elements in the specified collection into this list at the specified position
	 * @param index - index at which to insert the first element from the specified collection
	 * @param c - collection containing elements to be added to this list
	 * @return true if this list changed as a result of the call
	 */
	@Override
	public boolean addAll(int pos, Collection<? extends E> c) throws NullPointerException, IndexOutOfBoundsException {
		// TODO
		if (pos < 0 || pos > size()) {
			throw new IndexOutOfBoundsException("Index out of bounds");
		}
		if(!linkedUTD){
			updateLinked();
		}
		if (isEmpty()) {
			int before = numItems;
			addAll(c);
			int after = numItems;
			if(before == after){
				return false;
			}
			return true;
		} 
		else {
			ListNode current = head;
			for (int i = 0; i < pos; i++) {
				current = current.link;
			}
			int before = numItems;
			E[] array = (E[]) c.toArray();
			int size = array.length;
			for (int i = 0; i < size; i++) {
				ListNode newNode = new ListNode(array[i]);
				link(current, newNode);
				arrayUTD = false;
				current = newNode;
				numItems++;
			}
			int after = numItems;
			if(before == after){
				return false;
			}
			return true;
		}
	}
	/**
	 * Removes the element at the specified position in this list
	 * @param index - the index of the element to be removed
	 * @return the element previously at the specified position
	 */
	@Override
	public E remove(int pos) throws IndexOutOfBoundsException {
		// TODO
		if (pos < 0 || pos >= numItems) {
			throw new IndexOutOfBoundsException("Index is out of bounds");
		} 
		else {
			if(!linkedUTD){
				updateLinked();
			}
			arrayUTD = false;
			E toRemove = get(pos);
			ListNode node = findNode(pos + 1);
			unlink(node);
			arrayUTD = false;
			numItems--;
			return toRemove;
		}
	}
	/**
	 * Returns the element at the specified position in this list.
	 * @param index - index of the element to return
	 * @return the element at the specified position in this list
	 */
	@Override
	public E get(int pos) throws IndexOutOfBoundsException {
		// TODO
		if (pos < 0 || pos >= numItems) {
			throw new IndexOutOfBoundsException("Index is out of bounds");
		} else {
			if (arrayUTD) {
				return theArray[pos];
			} 
			else {
				updateArray();
				return theArray[pos];
			}
		}
	}
	/**
	 * Replaces the element at the specified position in this list with the specified element
	 * @param index - index of the element to replace
	 * @param element - element to be stored at the specified position
	 * @return the element previously at the specified position
	 */
	@Override
	public E set(int pos, E obj) throws IndexOutOfBoundsException {
		// TODO
		if (pos < 0 || pos >= numItems) {
			throw new IndexOutOfBoundsException("Index is out of bounds");
		}
		else {
			if(!arrayUTD){
				updateArray();
			}
			linkedUTD = false;
			E e = theArray[pos];
			theArray[pos] = obj;
			return e;
			
		}
	}

	/**
	 * If the number of elements is at most 1, the method returns false.
	 * Otherwise, it reverses the order of the elements in the array
	 * without using any additional array, and returns true.
	 * Note that if the array is modified, then linkedUTD needs to be set to
	 * false.
	 * @return true if theArray changed
	 */
	public boolean reverse() {
		// TODO
		if (numItems <= 1) {
			return false;
		}
		else {
			if(!arrayUTD){
				updateArray();
			}
			linkedUTD = false;
			for (int i = 0; i < numItems / 2; i++) {
				E temp = theArray[theArray.length - i];
				theArray[theArray.length - i] = theArray[i];
				theArray[i] = temp;
			}
			return true;
		}
	}
	/**
	 * Returns true if this list contains the specified element
	 * @param o - element whose presence in this list is to be tested
	 * @return true if this list contains the specified element
	 */
	@Override
	public boolean contains(Object obj) {
		// TODO
		if(!linkedUTD){
			updateLinked();
		}
		ListNode node = head;
		for (int i = 0; i < numItems; i++) {
			node = node.link;
			if (node.data == obj) {
				return true;
			}
		}
		return false;
	}
	/**
	 * Returns true if this list contains all of the elements of the specified collection.
	 * @param c - collection to be checked for containment in this list
	 * @return true if this list contains all of the elements of the specified collection
	 */
	@Override
	public boolean containsAll(Collection<?> c) throws NullPointerException {
		// TODO
		if (c == null) {
			throw new NullPointerException("Given collection is null");
		} 
		else {
			if(!linkedUTD){
				updateLinked();
			}
			if(c.isEmpty() && head.link == tail){
				return true;
			}
			for (Object e : c) {
				if (!contains(e)) {
					return false;
				}
			}
			return true;
		}
	}
	/**
	 * Returns the index of the first occurrence of the specified element in this 
	 * list, or -1 if this list does not contain the element.
	 * @param o - element to search for
	 * @return the index of the first occurrence of the specified element in this 
	 * list, or -1 if this list does not contain the element
	 */
	@Override
	public int indexOf(Object obj) {
		// TODO
		if(!linkedUTD){
			updateLinked();
		}
		for (int i = 0; i < numItems; i++) {
			if (obj.equals(get(i))) {
				return i;
			}
		}
		return -1;
	}
	/**
	 * Returns the index of the last occurrence of the specified element in this 
	 * list, or -1 if this list does not contain the element.
	 * @param o - element to search for
	 * @return the index of the last occurrence of the specified element in this 
	 * list, or -1 if this list does not contain the element
	 */
	@Override
	public int lastIndexOf(Object obj) {
		// TODO
		if(!linkedUTD){
			updateLinked();
		}
		int last = -1;
		for (int i = 0; i < numItems; i++) {
			if (obj.equals(get(i))) {
				last = i;
			}
		}
		if (last == -1) {
			return -1;
		} else {
			return last;
		}
	}
	/**
	 * Removes from this list all of its elements that are contained in the specified collection
	 * @param c - collection containing elements to be removed from this list
	 * @return true if this list changed as a result of the call
	 */
	@Override
	public boolean removeAll(Collection<?> c) {
		// TODO
		if(!linkedUTD){
			updateLinked();
		}
		boolean changed = false;
		if(c.size() == 0){
			return changed;
		}
		for (Object o : c) {
			ListNode current = head;
			int numRemoved = 0;
			for(int i = 0; i < numItems; i++){
				current = current.link;
				if(o == current.data){
					unlink(current);
					arrayUTD = false;
					numRemoved++;
					changed = true;
				}
			}
			numItems = numItems - numRemoved;
		}
		return changed;
	}
	/**
	 * Retains only the elements in this list that are contained in the specified collection
	 * @param c - collection containing elements to be retained in this list
	 * @return true if this list changed as a result of the call
	 */
	@Override
	public boolean retainAll(Collection<?> c) throws NullPointerException{
		// TODO
		if(c == null){
			throw new NullPointerException("Given collection is null");
		}
		if(!linkedUTD){
			updateLinked();
		}
		boolean changed = false;
		ListNode current = head;
		for(int i = 0; i < numItems; i++){
			current = current.link;
			boolean inList = false;
			for(Object e : c){
				if(current.data == e){
					inList = true;
				}
			}
			if(!inList){
				ListNode node = head;
				int numRemoved = 0;
				for(int j = 0; j < numItems; j++){
					node = node.link;
					if(current == node){
						unlink(current);
						arrayUTD = false;
						numRemoved++;
						changed = true;
					}
				}
				numItems = numItems - numRemoved;
			}
		}
		return changed;
	}
	/**
	 * Returns an array containing all of the elements in this list in proper sequence
	 * @return an array containing all of the elements in this list in proper sequence
	 */
	@Override
	public Object[] toArray() {
		// TODO
		if(!linkedUTD){
			updateLinked();
		}
		ListNode current = head;
		Object[] array = new Object[numItems];
		for (int i = 0; i < numItems; i++) {
			current = current.link;
			array[i] = current.data;
		}
		return array; // may need to be revised.
	}
	/**
	 * Returns an array containing all of the elements in this list in proper sequence 
	 * (from first to last element); the runtime type of the returned array is that of the 
	 * specified array. If the list fits in the specified array, it is returned therein. 
	 * Otherwise, a new array is allocated with the runtime type of the specified array and 
	 * the size of this list.
	 * @param a - the array into which the elements of this list are to be stored, 
	 * if it is big enough; otherwise, a new array of the same runtime type is allocated 
	 * for this purpose.
	 * @returnan array containing the elements of this list
	 */
	@Override
	public <T> T[] toArray(T[] arr) throws NullPointerException {
		// TODO
		if(!linkedUTD){
			updateLinked();
		}
		if (arr == null) {
			throw new NullPointerException("Given array is null");
		}
		else if (arr.length == numItems) {
			ListNode current = head;
			for (int i = 0; i < numItems; i++) {
				current = current.link;
				arr[i] = (T) current.data;
			}
			return arr;
		} 
		else if (arr.length < numItems) {
			ListNode current = head;
			final T[] array = (T[]) Array.newInstance(arr.getClass().getComponentType(), numItems);
			for (int i = 0; i < numItems; i++) {
				current = current.link;
				array[i] = (T) current.data;
			}
			return array;
		}
		else if (arr.length > numItems){
			ListNode current = head;
			for (int i = 0; i < numItems; i++) {
				current = current.link;
				arr[i] = (T) current.data;
				if(i == numItems - 1){
					arr[i + 1] = null;
				}
			}
			return arr;
		}
		else {
			return null;
		}
	}

	@Override
	public List<E> subList(int fromPos, int toPos) {
		throw new UnsupportedOperationException();
	}
	/**
	 * 
	 * @author benalexander
	 *
	 */
	private class AdaptiveListIterator implements ListIterator<E> {
		private int index; // index of next node;
		private ListNode cur; // node at index - 1
		private ListNode last; // node last visited by next() or previous()

		private boolean calledNext = false;
		private int calledPrev = 2;
		private boolean calledAdd = false;
		private boolean canRemove = false;
		private boolean calledRemove = false;
		/**
		 * Default constructor for ListIterator
		 */
		public AdaptiveListIterator() {
			if (!linkedUTD)
				updateLinked();
			// TODO
			index = 0;
			cur = head.link;
		}
		/**
		 * Constructor used for taking a position input. cur is set to the corresponding node
		 * at pos
		 * @param pos
		 */
		public AdaptiveListIterator(int pos) {
			if (!linkedUTD)
				updateLinked();
			// TODO
			index = pos;
			ListNode node = head.link;
			for (int i = 0; i < pos; i++) {
				node = node.link;
			}
			cur = node;
		}
		/**
		 * Returns true if this list iterator has more elements when traversing the list in 
		 * the forward direction.
		 * @return true if the list iterator has more elements when traversing 
		 * the list in the forward direction
		 */
		@Override
		public boolean hasNext() {
			// TODO
			if (cur == tail || (tail.prev == cur && (calledNext))) {
				return false;
			}
			else {
				return true;
			}
		}
		/**
		 * Returns the next element in the list and advances the cursor position.
		 * @return the next element in the list
		 */
		@Override
		public E next() throws NoSuchElementException {
			// TODO
			calledAdd = false;
			canRemove = true;
			calledRemove = false;
			if (cur == tail) {
				throw new NoSuchElementException("Iteration has no next element");
			}
			else {
				calledNext = true;
				if(calledPrev == 2 || calledPrev == 1){
					calledPrev = 0;
					index++;
					return cur.data;
				}
				else{
					last = cur;
					cur = cur.link;
					index++;
					return cur.data;
				}
			}
		}
		/**
		 * Returns true if this list iterator has more elements when traversing the list 
		 * in the reverse direction.
		 * @return true if the list iterator has more elements when traversing the list in the reverse direction
		 */
		@Override
		public boolean hasPrevious() {
			// TODO
			if (cur == head.link) {
				return false;
			} 
			else {
				return true;
			}
		}
		/**
		 * Returns the previous element in the list and moves the cursor position backwards.
		 * @return the previous element in the list
		 */
		@Override
		public E previous() throws NoSuchElementException {
			// TODO
			calledAdd = false;
			canRemove = true;
			calledRemove = false;
			if (cur == head.link && (calledPrev == 1 || calledPrev == 2)) {
				throw new NoSuchElementException("Iteration has no previous element");
			} 
			else {
				calledPrev = 1;
				if(calledNext){
					calledNext = false;
					index--;
					return cur.data;
				}
				else{
					last = cur;
					cur = cur.prev;
					index--;
					return cur.data;
				}
			}
		}
		/**
		 * Returns the index of the element that would be returned by a subsequent call to next()
		 * @return he index of the element that would be returned by a subsequent call to next, or 
		 * list size if the list iterator is at the end of the list
		 */
		@Override
		public int nextIndex() {
			// TODO
			return index;
		}
		/**
		 * Returns the index of the element that would be returned by a subsequent call to previous().
		 * @return the index of the element that would be returned by a subsequent call to previous, 
		 * or -1 if the list iterator is at the beginning of the list
		 */
		@Override
		public int previousIndex() {
			// TODO
			if (index == 0) {
				return -1;
			} else {
				return index - 1;
			}
		}
		/**
		 * Removes from the list the last element that was returned by next() or previous()
		 */
		public void remove() throws IllegalStateException {
			// TODO
			if (canRemove && !calledAdd ) {
				canRemove = false;
				calledRemove = true;
				if(calledPrev == 2 || calledPrev == 1){
					ListNode toCur = cur.link;
					unlink(cur);
					cur = toCur;
				}
				if(calledNext){
					ListNode toCur = cur.prev;
					unlink(cur);
					cur = toCur;
				}
				
			} else {
				throw new IllegalStateException(
						"You did not call next or previous, or you called add after you called next or previous");
			}
		}
		/**
		 * Inserts the specified element into the list (optional operation). The element is 
		 * inserted immediately before the element that would be returned by next(), 
		 * if any, and after the element that would be returned by previous()
		 * @param e - the element to insert
		 */
		public void add(E obj) {
			// TODO
			if (isEmpty()) {
				ListNode newNode = new ListNode(obj);
				link(head, newNode);
				index++;
			} 
			else {
				calledAdd = true;
				if(calledNext){
					ListNode newNode = new ListNode(obj);
					link(cur, newNode);
					cur = newNode;
					index++;
				}
				if(calledPrev == 1 || calledPrev == 2){
					ListNode newNode = new ListNode(obj);
					link(cur.prev, newNode);
					index++;
				}
				
			}

		}
		/**
		 * Replaces the last element returned by next() or previous() with the specified element
		 * @param e - the element with which to replace the last element returned by next or previous
		 */
		@Override
		public void set(E obj) throws IllegalStateException{
			// TODO
			if (!calledRemove && !calledAdd && (calledPrev == 1 || calledNext)) {
				ListNode replace = new ListNode(obj);
				cur.data = replace.data;
			}
			else{
				throw new IllegalStateException("Called remove() or add() after call to next or previous");
			}
		}
	}

	@Override
	public boolean equals(Object obj) {
		if (!linkedUTD)
			updateLinked();
		if ((obj == null) || !(obj instanceof List<?>))
			return false;
		List<?> list = (List<?>) obj;
		if (list.size() != numItems)
			return false;
		Iterator<?> iter = list.iterator();
		for (ListNode tmp = head.link; tmp != tail; tmp = tmp.link) {
			if (!iter.hasNext())
				return false;
			Object t = iter.next();
			if (!(t == tmp.data || t != null && t.equals(tmp.data)))
				return false;
		}
		if (iter.hasNext())
			return false;
		return true;
	} // equals

	@Override
	public Iterator<E> iterator() {
		return new AdaptiveListIterator();
	}

	@Override
	public ListIterator<E> listIterator() {
		return new AdaptiveListIterator();
	}

	@Override
	public ListIterator<E> listIterator(int pos) {
		checkIndex2(pos);
		return new AdaptiveListIterator(pos);
	}

	// Adopted from the List<E> interface.
	@Override
	public int hashCode() {
		if (!linkedUTD)
			updateLinked();
		int hashCode = 1;
		for (E e : this)
			hashCode = 31 * hashCode + (e == null ? 0 : e.hashCode());
		return hashCode;
	}

	// You should use the toString*() methods to see if your code works as
	// expected.
	@Override
	public String toString() {
		String eol = System.getProperty("line.separator");
		return toStringArray() + eol + toStringLinked();
	}

	public String toStringArray() {
		String eol = System.getProperty("line.separator");
		StringBuilder strb = new StringBuilder();
		strb.append("A sequence of items from the most recent array:" + eol);
		strb.append('[');
		if (theArray != null)
			for (int j = 0; j < theArray.length;) {
				if (theArray[j] != null)
					strb.append(theArray[j].toString());
				else
					strb.append("-");
				j++;
				if (j < theArray.length)
					strb.append(", ");
			}
		strb.append(']');
		return strb.toString();
	}

	public String toStringLinked() {
		return toStringLinked(null);
	}

	// iter can be null.
	public String toStringLinked(ListIterator<E> iter) {
		int cnt = 0;
		int loc = iter == null ? -1 : iter.nextIndex();

		String eol = System.getProperty("line.separator");
		StringBuilder strb = new StringBuilder();
		strb.append("A sequence of items from the most recent linked list:" + eol);
		strb.append('(');
		for (ListNode cur = head.link; cur != tail;) {
			if (cur.data != null) {
				if (loc == cnt) {
					strb.append("| ");
					loc = -1;
				}
				strb.append(cur.data.toString());
				cnt++;

				if (loc == numItems && cnt == numItems) {
					strb.append(" |");
					loc = -1;
				}
			} else
				strb.append("-");

			cur = cur.link;
			if (cur != tail)
				strb.append(", ");
		}
		strb.append(')');
		return strb.toString();
	}
}