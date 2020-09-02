package assignment1;

public class TicTacToe {
	
	/**
	 * holds ' ' if empty, or 'X' or 'O' if not empty
	 */
	public char topLeft;
	public char topMiddle;
	public char topRight;
	public char middleLeft;
	public char middle;
	public char middleRight;
	public char bottomLeft;
	public char bottomMiddle;
	public char bottomRight;

	/**
	 * starts the game off with spaces in each cell which signify empty
	 */
	public TicTacToe(){
		topLeft = ' ';
		topMiddle = ' ';
		topRight = ' ';
		middleLeft = ' ';
		middle = ' ';
		middleRight = ' ';
		bottomLeft = ' ';
		bottomMiddle = ' ';
		bottomRight = ' ';
	}
	
	/**
	 * Makes a move in the cell corresponding to the location description. If the spot is taken, the method does returns false
	 * If the spot is not taken, the move will be made and the method will return true.
	 * @param s
	 * @param player
	 * @return True is spot vacant, false if it is
	 */
	public boolean makeMove(String s, char player){
		if(s.equals("top left") && isTaken(topLeft) == false){
			topLeft = player;
			return true;
		}
		if(s.equals("top middle") && isTaken(topMiddle) == false){
			topMiddle = player;
			return true;
		}
		if(s.equals("top right") && isTaken(topRight) == false){
			topRight = player;
			return true;
		}
		if(s.equals("middle left") && isTaken(middleLeft) == false){
			middleLeft = player;
			return true;
		}
		if(s.equals("middle") && isTaken(middle) == false){
			middle = player;
			return true;
		}
		if(s.equals("middle right") && isTaken(middleRight) == false){
			middleRight = player;
			return true;
		}
		if(s.equals("bottom left") && isTaken(bottomLeft) == false){
			bottomLeft = player;
			return true;
		}
		if(s.equals("bottom middle") && isTaken(bottomMiddle) == false){
			bottomMiddle = player;
			return true;
		}
		if(s.equals("bottom right") && isTaken(bottomRight) == false){
			bottomRight = player;
			return true;
		}
		return false;
	}
	
	/**
	 * Helper method that checks if the spot is taken
	 * @param c
	 * @return false if not taken, true if taken
	 */
	private boolean isTaken(char c){
		if(c == ' '){
			return false;
		}
		else{
			return true;
		}
	}
	
	/**
	 * If there is a winner, the method will return 'O' or 'X'. If the game is a tie it will return 'T'.
	 * If the game isn't a tie and nobody has won, the method returns 'C'.
	 * @return C, O, X, or T
	 */
	public char checkGame(){
		if(topLeft == 'O' && topMiddle == 'O' && topRight == 'O'){
			return 'O';
		}
		if(topLeft == 'X' && topMiddle == 'X' && topRight == 'X'){
			return 'X';
		}
		
		if(middleLeft == 'O' && middle == 'O' && middleRight == 'O'){
			return 'O';
		}
		if(middleLeft == 'X' && middle == 'X' && middleRight == 'X'){
			return 'X';
		}
		
		if(bottomLeft == 'O' && bottomMiddle == 'O' && bottomRight == 'O'){
			return 'O';
		}
		if(bottomLeft == 'X' && bottomMiddle == 'X' && bottomRight == 'X'){
			return 'X';
		}
		
		if(topLeft == 'O' && middleLeft == 'O' && bottomLeft == 'O'){
			return 'O';
		}
		if(topLeft == 'X' && middleLeft == 'X' && bottomLeft == 'X'){
			return 'X';
		}
		
		if(topMiddle == 'O' && middle == 'O' && bottomMiddle == 'O'){
			return 'O';
		}
		if(topMiddle == 'X' && middle == 'X' && bottomMiddle == 'X'){
			return 'X';
		}
		
		if(topRight == 'O' && middleRight == 'O' && bottomRight == 'O'){
			return 'O';
		}
		if(topRight == 'X' && middleRight == 'X' && bottomRight == 'X'){
			return 'X';
		}
		
		if(topLeft == 'O' && middle == 'O' && bottomRight == 'O'){
			return 'O';
		}
		if(topLeft == 'X' && middle == 'X' && bottomRight == 'X'){
			return 'X';
		}
		
		if(topRight == 'O' && middle == 'O' && bottomLeft == 'O'){
			return 'O';
		}
		if(topRight == 'X' && middle == 'X' && bottomLeft == 'X'){
			return 'X';
		}
		
		if(isTaken(topLeft) && isTaken(topMiddle) && isTaken(topRight) && isTaken(middleLeft) && isTaken(middle) 
				&& isTaken(middleRight) && isTaken(bottomLeft) && isTaken(bottomMiddle) && isTaken(bottomRight)){
			return 'T';
		}
		return 'C';
	}
	
	/**
	 * resets the game with empty cells
	 */
	public void reset(){
		topLeft = ' ';
		topMiddle = ' ';
		topRight = ' ';
		middleLeft = ' ';
		middle = ' ';
		middleRight = ' ';
		bottomLeft = ' ';
		bottomMiddle = ' ';
		bottomRight = ' ';
	}
	
	/**
	 * shows game on the console
	 */
	public void showGame(){
		System.out.println(topLeft + " | " + topMiddle + " | " + topRight);
		System.out.println("---------");
		System.out.println(middleLeft + " | " + middle + " | " + middleRight);
		System.out.println("---------");
		System.out.println(bottomLeft + " | " + bottomMiddle + " | " + bottomRight);
	}
}