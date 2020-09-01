package hw4;

import main.Config;
import graph.Cell;
import state.State;

/**
 * A flashing passable state that uses the default food variables.
 * An "F" in a map file.
 * @author Ben Alexander
 *
 */
public class Food implements State{
	/**
	 * holds the color of the food
	 */
	private java.awt.Color color;
	
	/**
	 * Keeps track of the time which determines the color of the food
	 */
	private int timer;
	
	/**
	 * makes new food object with timer set to 0 and color set to the 
	 * color array in the Config class with index timer
	 */
	public Food(){
		timer = 0;
		color = Config.FOOD_COLORS[timer];
	}
	
	/**
	 * Get the current color of the state (can be used for drawing).
	 * @return current color of the state
	 */
	public java.awt.Color getColor(){
		return color;
	}
	
	/**
	 * every time handle is called color is set to FOOD_COLORS with index of timer.
	 * timer is incremented until it reaches MAX_FOOD_TIMER -1 then it is reset to 0.
	 * @param cell - The cell that this state belongs to
	 */
	public void handle(Cell cell){
		color = Config.FOOD_COLORS[timer];
		if(timer == Config.MAX_FOOD_TIMER - 1){
			timer = 0;
		}
		else{
			timer++;
		}
	}
	
	/**
	 * determines if Food is passable
	 * @return true if Food is passable
	 */
	public boolean isPassable(){
		return true;
	}
	
	/**
	 * determines the character that represents Food
	 * @return the character the Food represents
	 */
	public char toChar(){
		return 'F';
	}
	
	/**
	 * checks if the timer has reset
	 * @return true if the timer has reset
	 */
	protected boolean isZero(){
		if(timer == 0){
			return true;
		}
		else{
			return false;
		}
	}
}