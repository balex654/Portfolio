package hw4;

import java.awt.Color;
import main.Config;
import graph.Cell;
import state.Snake;
import state.SnakeSegment;
import state.State;

/**
 * An impassable state that follows the mouse's position or moves randomly if it can't
 * move towards the mouse. If it still cannot move, the game ends. If the snake can move, 
 * it replaces its current cell with a SnakeSegment before moving. If it finds Food, 
 * it increments its length. Uses the default snake variables. An "S" in the map file.
 * @author Ben Alexander
 *
 */
public class SnakeHead implements State, Snake{
	
	/**
	 * holds the value of the length of the Snake
	 */
	private int length;
	
	/**
	 * holds the value of the timer
	 */
	private int timer;
	
	/**
	 * Makes a new SnakeHead that initializes the timer to 0 and the length to 4
	 */
	public SnakeHead(){
		timer = 0;
		length = 4;
	}
	
	/**
	 * Gets the length of the snake
	 * @return the length
	 */
	public int getLength(){
		return length;
	}
	
	/**
	 * Updates the cell based off of the state. This method can update the cell's state, 
	 * or potentially another cell's state depending on the implementation. If the timer
	 * is greater than or equal to MAX_SNAKE_TIMER then the snake will try to find a random 
	 * cell closer to the mouse, using the appropriate method of the Cell class. 
	 * If no such cell exists, it will then try to find any random open cell. If no 
	 * such second cell exists, then the player loses the game. Also if the next cell is 
	 * food then the length is incremented
	 * @param cell - The cell that this state belongs to
	 */
	public void handle(Cell cell){
		timer++;
		if(timer >= Config.MAX_SNAKE_TIMER){
			timer = 0;
			Cell nextCell = cell.getRandomCloser();
			if(nextCell == null){
				nextCell = cell.getRandomOpen();
			}
			if(nextCell != null && nextCell.getState() != null && (nextCell.getState().toChar() == 'F' || nextCell.getState().toChar() == 'D')){
				length++;
			}
			if(nextCell != null){
				cell.moveState(nextCell);
				cell.setState(new SnakeSegment(this));
			}
			if(nextCell == null){
				Config.endGame(length);
			}
		}
	}
	
	/**
	 * Get the current color of the state (can be used for drawing).
	 * @return the color of the state
	 */
	public java.awt.Color getColor(){
		return new Color(0,255,255);
	}
	
	/**
	 * Get whether or not the cell is passable. Affects whether or not a state can move 
	 * through another state via random movement or moving closer to the mouse.
	 * @return true if the state is passable
	 */
	public boolean isPassable(){
		 return false;
	}
	
	/**
	 * Get the character representation for this State. Used for loading map text files.
	 * @return character representation for this State
	 */
	public char toChar(){
		return 'S';
	}
}
