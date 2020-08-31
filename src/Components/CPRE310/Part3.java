package hw3part3;

import java.io.File;
import java.io.FileNotFoundException;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;


/**
 * This is the code for fussbook.txt
 * 
 * @author benalexander
 *
 */

public class Part3 {
	
	static ArrayList<int[]> sets = new ArrayList<int[]>();
	
	public static void main(String[] args) throws FileNotFoundException{
		File file = new File("path/network_fussbook.txt");
		Scanner scanner = new Scanner(file);
		
		while (scanner.hasNextLine()){
			String line = scanner.nextLine();
			Scanner scanner2 = new Scanner(line);
			String s = scanner2.next();
			
			int user1;
			if(contains(s, '.')){
				String temp = null;
				temp = s.substring(0, s.length() - 1);
				user1 = Integer.parseInt(temp);
			}
			else{
				user1 = Integer.parseInt(s);
			}
			
			s = scanner2.next();
			s = scanner2.next();
			s = scanner2.next();
			s = scanner2.next();
			
			int user2 = Integer.parseInt(s);
			int[] set = {user1, user2};
			sets.add(set);

		}
		
		filterDuplicates();
		int mostConnected = mostConnected();
		
		for(int[] set : sets){
			System.out.print(set[0]);
			System.out.print(" " + set[1]);
			System.out.println();
		}
		
		int count = nodeCount();
		
		System.out.println("Nodes: " + count);
		System.out.println("Edges: " + sets.size());
		System.out.println("Most Connected: " + mostConnected);
	}
	
	public static void filterDuplicates(){
		for(int i = 0; i < sets.size(); i++){
			int[] current = sets.get(i);
			for(int j = i + 1; j < sets.size(); j++){
				int[] compare = sets.get(j);
				if((compare[0] == current[0] || compare[0] == current[1]) && (compare[1] == current[0] || compare[1] == current[1])){
					sets.remove(j);
				}
			}
		}
	
	}
	
	/**
	 * This is for part C
	 * @return
	 */
	public static int mostConnected(){
		ArrayList<String> connections = new ArrayList<String>();
		for(int i = 0; i < sets.size(); i++){
			connections.add(Integer.toString(sets.get(i)[0]));
			connections.add(Integer.toString(sets.get(i)[1]));
		}
		int[] c = new int[connections.size()];
		for(int i = 0; i < connections.size(); i++){
			c[i] = Integer.parseInt(connections.get(i));
		}
		Arrays.sort(c);
		int count = 1;
		int highest = 0;
		int highestCount = 1;
		for(int i = 0; i < c.length; i++){
			if(i != c.length - 1){
				if(c[i] == c[i + 1]){
					count++;
				}
				else{
					if(count > highestCount){
						highest = c[i];
						highestCount = count;
					}
					count = 1;
				}
			}
			else if(count > highestCount){
				highest = c[i];
			}
		}
		return highest;

	}
	
	public static boolean contains(String s, char c){
		for(int i = 0; i < s.length(); i++){
			if(c == s.charAt(i)){
				return true;
			}
		}
		return false;
	}
	
	/**
	 * This is for part A
	 * @return
	 */
	public static int nodeCount(){
		ArrayList<String> nodes = new ArrayList<String>();
		for(int i = 0; i < sets.size(); i++){
			String s = Integer.toString(sets.get(i)[0]);
			if(!nodes.contains(s)){
				nodes.add(s);
			}
			String t = Integer.toString(sets.get(i)[1]);
			if(!nodes.contains(t)){
				nodes.add(t);
			}
		}
		return nodes.size();
	}
	
}