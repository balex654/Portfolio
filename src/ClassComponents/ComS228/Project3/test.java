package edu.iastate.cs228.hw3;

import java.util.Arrays;
import java.util.Collection;
import java.util.ListIterator;

import edu.iastate.cs228.hw3.AdaptiveList.ListNode;

public class test {
	public static void main(String[] args){
		AdaptiveList<String> list = new AdaptiveList<String>();
		list.add("A");
		list.add("B");
		list.add("C");
		list.add("D");
		ListIterator<String> iter = list.listIterator(list.size() / 2);
		while (iter.hasNext()){
			   iter.set("X");
			   iter.next();
			}
	}
}