package hw3;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Scanner;

import api.Cell;
import api.Flow;

/**
 * Utility class with methods for creating Flows from string descriptors
 * and reading string descriptors from a file.  A string descriptor is
 * an array of strings, all with the same length, in which an alphabetic
 * character at a given row and column represents a cell at that
 * row and column.  The color of the cell is determined from the character
 * by the Cell constructor.  A descriptor is invalid if not all strings
 * are the same length or if there is an alphabetic character that 
 * does not appear exactly twice.
 */
public class Util
{
  /**
   * Creates an array of Flow objects based on the string descriptor.
   * If the descriptor is invalid, this method returns null.
   * @param descriptor
   *   array of strings
   * @return
   *   array of Flow objects determined by the descriptor 
   */
  public static Flow[] createFlowsFromStringArray(String[] descriptor){
	  // TODO
	  String[] lines = descriptor;
	  
	  for(int i = 0; i < lines.length; i++){ // checks validity of input
		  for(int j = 0; j < lines[i].length(); j++){
			  char current = lines[i].charAt(j);
			  if(current == '-' || current == 'R' || current == 'G' || current == 'B' || current == 'C' || current == 'Y' || 
					  current == 'M' || current == 'O' || current == 'P' || current == 'S' || current == 'V' || current == 'F');
			  else{return null;}
		  }
	  }
	  
	  int count = 0;
	  for(int i = 0; i < lines.length; i++){ //finds length of flow array
		  Scanner in = new Scanner(lines[i]);
		  String current = in.next();
		  for(int j = 0; j < current.length(); j++){
			  if(current.charAt(j) != '-'){
				  count++;
			  }
		  }
	  }
	  int amount = count / 2;
	  Flow[] flows = new Flow[amount];
	  
	  ArrayList<String> temp = new ArrayList<String>();
	  for(int i = 0; i < lines.length; i++){ //fills color array
		  Scanner in = new Scanner(lines[i]);
		  String current = in.next();
		  for(int j = 0; j < current.length(); j++){
			  if(current.charAt(j) != '-'){
				  temp.add(Character.toString(current.charAt(j)));
			  }
		  }
	  }
	  
	  ArrayList<String> flowColors = new ArrayList<String>();
	  flowColors = removeDuplicates(temp); 
	  
	  for(int i = 0; i < flowColors.size(); i++){ //creates the correct flows and adds them to the array
		  char currentColor = flowColors.get(i).charAt(0);
		  boolean foundFirst = false;
		  
		  Cell endPoint1 = null;
		  Cell endPoint2 = null;
		  for(int j = 0; j < lines.length; j++){
			  Scanner in = new Scanner(lines[j]);
			  String currentLine = in.next();
			  for(int k = 0; k < currentLine.length(); k++){
				  if(currentLine.charAt(k) == currentColor && foundFirst == false){
					  endPoint1 = new Cell(j, k, currentColor);
					  foundFirst = true;
				  }
				  else if(currentLine.charAt(k) == currentColor && foundFirst == true){
					  endPoint2 = new Cell(j, k, currentColor);
				  }
			  }
		  }
		  Flow currentFlow = new Flow(endPoint1, endPoint2);
		  flows[i] = currentFlow;
	  }
	  
	  return flows;
  }
  
  private static ArrayList<String> removeDuplicates(ArrayList<String> words){
		ArrayList<String> result = new ArrayList<String>();
		result.addAll(words);
	    for(int i = 0; i < words.size(); i++){
	    	String current = words.get(i);
	    	for(int j = i + 1; j < words.size(); j++){
	    		if(current.equals(words.get(j))){
	    			result.remove(j);
	    			result.add(j, "0");
	    		}
	    	}
	    }
	    for(int i = 0; i < result.size(); i++){
	    	if(result.contains("0")){
	    		result.remove("0");
	    	}
	    }
	    words.clear();
	    words.addAll(result);
	    
	    return words;
	}
  /**
   * Reads the given file and constructs a list of FlowGame objects, one for
   * each descriptor in the file.  Descriptors in the file are separated by 
   * some amount of whitespace, but the file need not end with whitespace and
   * may have extra whitespace at the beginning.  Invalid descriptors in the file
   * are ignored, so the method may return an empty list.
   * @param filename
   *   name of the file to read
   * @return
   *   list of FlowGame objects created from the valid descriptors in the file
   * @throws FileNotFoundException
   */
  public static ArrayList<FlowGame> readFile(String filename) throws FileNotFoundException{
	  // TODO
	  File file = new File(filename);
	  Scanner in = new Scanner(file);
	  
	  ArrayList<FlowGame> games = new ArrayList<FlowGame>();
	  ArrayList<String> lines = new ArrayList<String>();
	  
	  while(in.hasNextLine()){ //puts lines into array list
		  String currentLine = in.nextLine();
		  lines.add(currentLine);
	  }
	  in.close();
	  
	  boolean firstLineFound = false;
	  int firstLine = 0;
	  for(int i = 0; i < lines.size(); i++){ //find first line of text
		  if(lines.get(i).trim().isEmpty() == false && firstLineFound == false){
			  firstLine = i;
			  firstLineFound = true;
		  }
	  }
	  int lastLine = 0;
	  for(int i = 0; i < lines.size(); i++){ //find last line of text
		  if(lines.get(i).trim().isEmpty() == false){
			  lastLine = i;
		  }
	  }
	  
	  int linesRemoved = 0;
	  for(int i = 0; i < firstLine; i++){ //remove empty lines at beginning of list
		  lines.remove(0);
		  linesRemoved = i + 1;
	  }
	  lastLine = lastLine - linesRemoved;
	  if(lastLine != lines.size() - 1){ //remove empty lines at end of list
		  for(int i = lastLine; i < lines.size(); i++){
			  lines.remove(lastLine + 1);
		  }
	  }
	  
	  int amountGames = 1;
	  for(int i = 0; i < lines.size(); i++){ //finds amount of games
		  if(lines.get(i).trim().isEmpty()){
			  amountGames++;
		  }
	  }
	  int element = 0;
	  int[] lineOfEachGame = new int[amountGames];
	  lineOfEachGame[0] = 0;
	  for(int i = 0; i < lines.size(); i++){ //finds the first line of each game
		  if(lines.get(i).trim().isEmpty()){
			  element++;
			  lineOfEachGame[element] = i + 1;
		  }
	  }
	  ArrayList<ArrayList<String>> gameStrings = new ArrayList<ArrayList<String>>();
	  for(int i = 0; i < amountGames; i++){ 
		  boolean complete = false;
		  ArrayList<String> singleGame = new ArrayList<String>();
		  for(int j = lineOfEachGame[i]; j < lines.size(); j++){ //creates array list of individual games and adds them to an array list
			  if(lines.get(j).trim().isEmpty() == false && complete == false){
				  singleGame.add(lines.get(j));
			  }
			  else{
				  complete = true;
			  }
		  }
		  gameStrings.add(singleGame);
	  }
	  
	  for(int i = 0; i < gameStrings.size(); i++){ //creates the game setups and adds them to the FlowGame array list
		  String[] theStrings = new String[gameStrings.get(i).size()];
		  for(int j = 0; j < gameStrings.get(i).size(); j++){
			  theStrings[j] = gameStrings.get(i).get(j);
		  }
		  FlowGame game = new FlowGame(theStrings);
		  games.add(game);
	  }
	  
	  return games;
  	}

}