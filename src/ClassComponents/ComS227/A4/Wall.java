package hw4;

import java.awt.Color;

import graph.Cell;
import state.State;
/**
 * An impassable state with the color White. Doesn't do anything. 
 * A "#" in the map file.
 * @author Ben Alexander
 *
 */
public class Wall implements State{
	/**
	 * Holds the color value of the wall
	 */
	private java.awt.Color color;
	
	/**
	 * Makes a new wall with a white color
	 */
	public Wall(){
		color = new Color(255,255,255);
	}
	
	/**
	 * Get the current color of the state (can be used for drawing).
	 * @return The color of the state
	 */
	public java.awt.Color getColor(){
		return color;
	}
	
	/**
	 * Updates the cell based off of the state. Wall is not meant to do anything
	 * so there is nothing in this method
	 * @param cell - The cell that this state belongs to
	 */
	public void handle(Cell cell){
		
	}
	
	/**
	 * determines if the wall is passable
	 * @return False if the state is not passable
	 */
	public boolean isPassable(){
		return false;
	}
	
	/**
	 * determines the character that represents the wall
	 * @return the character that represents the wall
	 */
	public char toChar(){
		return '#';
	}
}