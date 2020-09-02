package edu.iastate.cs228.hw1;

/*
 * @author Ben Alexander
*/

public class ProteinSequence extends Sequence {
	/**
	 * Creates a sequence object and uses the isValidLetter() method to check 
	 * if every char- acter in the array sarr is valid. If so, it makes and keeps 
	 * a copy of the array sarr in the field seqarr of type char[]. Otherwise, 
	 * it throws an IllegalArgumentException.
	 * @param psarr
	 */
	public ProteinSequence(char[] psarr) {
		super(psarr);
	}
	
	/**
	 * The method returns true if the character argument is equal to one of 
	 * the 20 English letters that are not in the set {B, b, J, j, O, o, U, u, X, x, Z, z}.
	 * otherwise it returns false
	 * @param aa
	 * @return True if valid false otherwise
	 */
	@Override
	public boolean isValidLetter(char aa) {
		if(aa == 'A' || aa == 'a' || aa == 'C' || aa == 'c' || aa == 'D' || aa == 'd' || aa == 'E' || aa == 'e' || aa == 'F' || 
				aa == 'f' || aa == 'G' || aa == 'g' || aa == 'H' || aa == 'h' || aa == 'I' || aa == 'i' || aa == 'K' || aa == 'k' || 
				aa == 'L' || aa == 'l' || aa == 'M' || aa == 'm' || aa == 'N' || aa == 'n' || aa == 'P' || aa == 'p' || aa == 'Q' || 
				aa == 'q' || aa == 'R' || aa == 'r' || aa == 'S' || aa == 's' || aa == 'T' || aa == 't' || aa == 'V' || aa == 'v' || 
				aa == 'W' || aa == 'w' || aa == 'Y' || aa == 'y'){
			return true;
		}
		else{
			return false;
		}
	}
}
