package hw3;

import java.util.ArrayList;

import api.Cell;
import api.Flow;


/**
 * Game state for a Flow Free game.
 */
public class FlowGame{
  /**
   * Constructs a FlowGame to use the given array of Flows and
   * the given width and height.  Client is responsible for ensuring that all
   * cells in the given flows have row and column values within
   * the given width and height.
   * @param givenFlows
   *   an array of Flow objects
   * @param givenWidth
   *   width to use for the game
   * @param givenHeight
   *   height to use for the game
   */
	private int width;
	private int height;
	private Flow[] allFlows;
	private Cell current = null;
	private int currentFlowf = 0;
	
	public FlowGame(Flow[] givenFlows, int givenWidth, int givenHeight){
		// TODO
		width = givenWidth;
		height = givenHeight;
		allFlows = givenFlows;
	}
  
	/**
	 * Constructs a FlowGame from the given descriptor.
	 * @param descriptor
	 *   array of strings representing initial endpoint positions
	 */
	public FlowGame(String[] descriptor){
		// TODO
		allFlows = Util.createFlowsFromStringArray(descriptor);
		height = descriptor.length;
		width = descriptor[0].length();
		
	}
  
	/**
	 * Returns the width for this game.
	 * @return
	 * width for this game
	 */
	public int getWidth(){
		// TODO
		return width;
	}
  
	/**
	 * Returns the height for this game.
	 * @return
	 *   height for this game
	 */
	public int getHeight(){
		// TODO
		return height;
	}
  
	/**
	 * Returns the current cell for this game, possible null.
	 * @return
	 *   current cell for this game
	 */
	public Cell getCurrent(){
		// TODO
		return current;
	}
  
	/**
	 * Returns all flows for this game.  Client should not modify
	 * the returned array or lists.
	 * @return
	 *   array of flows for this game
	 */
	public Flow[] getAllFlows(){
		// TODO
		return allFlows;
	}
  
	/**
	 * Returns the number of occupied cells in all flows (including endpoints).
	 * @return
	 *   occupied cells in this game
	 */
	public int getCount(){
		// TODO
		return 0;
	}
  
	/**
	 * Returns true if all flows are complete and all cells are occupied.
	 * @return
	 *   true if all flows are complete and all cells are occupied
	 */
	public boolean isComplete(){
		// TODO
		int numComplete = 0;
		for(int i = 0; i < allFlows.length; i++){
			if(allFlows[i].isComplete()){
				numComplete++;
			}
		}
		
		for(int i = 0; i < width; i++){
			for(int j = 0; j < height; j++){
				if(isOccupied(j, i) == false){
					return false;
				}
			}
		}
		if(numComplete == allFlows.length){
			return true;
		}
		return false;
	}
  
	/**
	 * Attempts to set the "current" cell to be an existing cell at the given
	 * row and column.  When using a GUI, this method is typically 
	 * invoked when the mouse is pressed.  
	 * <ul>
	 *   <li>Any endpoint can be selected as the current cell.  Selecting an 
	 *   endpoint clears the flow associated with that endpoint.
	 *   <li>A non-endpoint cell can be selected as the current cell only if 
	 *   it is the last cell in a flow. 
	 * </ul>
	 * If neither of the above conditions is met, this method does nothing.
	 * 
	 * @param row
	 *   given row
	 * @param col
	 *   given column
	 */
	public void startFlow(int row, int col){
		// TODO
		endFlow();
		
		for(int i = 0; i < allFlows.length; i++){
			for(int j = 0; j < 2; j++){
				if(allFlows[i].getEndpoint(j).positionMatches(row, col)){
					allFlows[i].clear();
					current = allFlows[i].getEndpoint(j);
					currentFlowf = i;
					allFlows[i].add(current);
				}
			}
		}
		for(int i = 0; i < allFlows.length; i++){
			Cell last;
			ArrayList<Cell> cells = new ArrayList<Cell>();
			cells = allFlows[i].getCells();
			if(cells.size() > 0){
				last = cells.get(cells.size() - 1);
				if(last.getRow() == row && last.getCol() == col){
					current = last;
					currentFlowf = i;
				}
			}
		}
	}
  
	/**
	 * Clears the "current" cell. That is, directly after invoking this method,
	 * <code>getCurrent</code> returns null. When using a GUI, this method is 
	 * typically invoked when the mouse is released.
	 */
	public void endFlow(){
		// TODO
		current = null;
	}
  
	/**
	 * Attempts to add a new cell to the flow containing the current cell.  
	 * When using a GUI, this method is typically invoked when the mouse is 
	 * dragged.  In order to add a cell, the following conditions must be satisfied:
	 * <ol>
	 *   <li>The current cell is non-null
	 *   <li>The given position is horizontally or vertically adjacent to the 
	 *   current cell
	 *   <li>The given position either is not occupied OR it is occupied by 
	 *   an endpoint for the flow that is not already in the flow
	 * </ul>
	 * If the three conditions are met, a new cell with the given row/column 
	 * and correct color is added to the current flow, and the current cell 
	 * is updated to be the new cell.
	 * 
	 * @param row
	 *   given row for the new cell
	 * @param col
	 *   given column for the new cell
	 */
	public void addCell(int row, int col){
		// TODO
		
		boolean isEndpoint = false;
		for(Flow f : allFlows){ //check to see if position is endpoint
			for(int j = 0; j < 2; j++){
				if(f.getEndpoint(j).positionMatches(row, col) && f.getColor() == allFlows[currentFlowf].getColor()){
					isEndpoint = true;
					
				}
			}
		}
		
		if(current != null && (isOccupied(row, col) == false || isEndpoint) && allFlows[currentFlowf].isComplete() == false){
			
			if(((current.getCol() - col) <= 1 && (current.getCol() - col) >= -1) && (current.getRow() - row) == 0){
				
				Cell temp = new Cell(row, col, allFlows[currentFlowf].getColor());
				current = temp;
				allFlows[currentFlowf].add(temp);
			}
			
			if(((current.getRow() - row) <= 1 && (current.getRow() - row) >= -1) && (current.getCol() - col) == 0){
				
				Cell temp = new Cell(row, col, allFlows[currentFlowf].getColor());
				current = temp;
				allFlows[currentFlowf].add(temp);
			}
			
		}
	}
	
  
	/**
	 * Returns true if the given position is occupied by a cell in a flow in
	 * this game (possibly an endpoint).
	 * @param row
	 *   given row
	 * @param col
	 *   given column
	 * @return
	 *   true if any cell in this game has the given row and column, false otherwise
	 */
	public boolean isOccupied(int row, int col){
		// TODO
		for(int i = 0; i < allFlows.length; i++){
			for(int j = 0; j < 2; j++){
				if(allFlows[i].getEndpoint(j).getRow() == row && allFlows[i].getEndpoint(j).getCol() == col){
					return true;
				}
			}
			ArrayList<Cell> currentCells = new ArrayList<Cell>();
			currentCells = allFlows[i].getCells();
			for(int j = 0; j < currentCells.size(); j++){
				if(currentCells.get(j).getRow() == row && currentCells.get(j).getCol() == col){
					return true;
				}
			}
		}
		return false;
	}
}