package edu.iastate.cs228.hw4;

import java.util.Arrays;
import java.util.Scanner;
import java.io.FileNotFoundException;
import java.io.File;

/**
 * @author XXXXX
 * 
 *         An application class
 */
public class Dictionary {
	public static void main(String[] args) throws FileNotFoundException {
		File infile = new File(args[0]);
		Scanner inLine = new Scanner(infile);
		EntryTree<Character, String> tree = new EntryTree<Character, String>();
		while(inLine.hasNextLine()){
			String line = inLine.nextLine();
			Scanner inWord = new Scanner(line);
			boolean add = false;
			boolean remove = false;
			boolean search = false;
			boolean prefix = false;
			while(inWord.hasNext()){
				String word = inWord.next();
				if(word.equals("add")) add = true;
				if(word.equals("remove")) remove = true;
				if(word.equals("search")) search = true;
				if(word.equals("prefix")) prefix = true;
				if(word.equals("showTree")){
					System.out.println("Command: showTree");
					System.out.println("Result from a showTree: ");
					tree.showTree();
					System.out.println("\n");
				}
				if(add){
					String keys = inWord.next();
					String value = inWord.next();
					System.out.println("Command: add " + keys + " " + value);
					Character[] keyarr = new Character[keys.length()];
					for(int i = 0; i < keys.length(); i++){
						keyarr[i] = keys.charAt(i);
					}
					boolean result = tree.add(keyarr, value);
					System.out.println("Result from an add: " + result + "\n");
				}
				if(remove){
					String keys = inWord.next();
					System.out.println("Command: remove " + keys);
					Character[] keyarr = new Character[keys.length()];
					for(int i = 0; i < keys.length(); i++){
						keyarr[i] = keys.charAt(i);
					}
					String result = tree.remove(keyarr);
					System.out.println("Result from a remove: " + result + "\n");
				}
				if(search){
					String keys = inWord.next();
					System.out.println("Command: search " + keys);
					Character[] keyarr = new Character[keys.length()];
					for(int i = 0; i < keys.length(); i++){
						keyarr[i] = keys.charAt(i);
					}
					String result = tree.search(keyarr);
					System.out.println("Result from a search: " + result + "\n");
				}
				if(prefix){
					String keys = inWord.next();
					System.out.println("Command: prefix " + keys);
					Character[] keyarr = new Character[keys.length()];
					for(int i = 0; i < keys.length(); i++){
						keyarr[i] = keys.charAt(i);
					}
					Character[] result = tree.prefix(keyarr);
					String s = "";
					for(int i = 0; i < result.length; i++){
						s = s + result[i];
					}
					System.out.println("Result from a prefix: " + s + "\n");
				}
			}
			inWord.close();
		}
		inLine.close();
	}
}