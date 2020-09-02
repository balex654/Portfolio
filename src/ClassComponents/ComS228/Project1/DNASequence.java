package edu.iastate.cs228.hw1;

/*
 * @author Ben Alexander
*/

public class DNASequence extends Sequence {
	/**
	 * Creates a sequence object and uses the isValidLetter() method to check 
	 * if every char- acter in the array sarr is valid. If so, it makes and keeps 
	 * a copy of the array sarr in the field seqarr of type char[]. Otherwise, 
	 * it throws an IllegalArgumentException.
	 * @param dnaarr
	 */
	public DNASequence(char[] dnaarr) {
		super(dnaarr);
	}
	
	/**
	 * The method returns true if the character argument is equal to one 
	 * of the eight characters ’a’, ’A’, ’c’, ’C’, ’g’, ’G’, ’t’ and ’T’. otherwise
	 * it returns false
	 * @param a given character
	 * @return true if it's valid, false otherwise
	 */
	@Override
	public boolean isValidLetter(char let) {
		if(let == 'a' || let == 'A' || let == 'c' || let == 'C' || let == 'g' || let == 'G' || let == 't' || let == 'T'){
			return true;
		}
		else{
			return false;
		}
	}
	
	/**
	 * The method produces the reverse complement of the DNA sequence 
	 * saved in the char array seqarr, and returns a char array with the resulting sequence
	 * @return char array that is the reverse complement
	 */
	public char[] getReverseCompSeq() {
		char[] reverse = new char[seqarr.length];
		char[] clone = getSeq();
		for(int i = 0; i < clone.length; i++){
			reverse[i] = clone[clone.length - 1 - i];
		}
		for(int i = 0; i < reverse.length; i++){
			if(reverse[i] == 'A'){
				reverse[i] = 'T';
			}
			else if(reverse[i] == 'C'){
				reverse[i] = 'G';
			}
			else if(reverse[i] == 'G'){
				reverse[i] = 'C';
			}
			else if(reverse[i] == 'T'){
				reverse[i] = 'A';
			}
			else if(reverse[i] == 'a'){
				reverse[i] = 't';
			}
			else if(reverse[i] == 'c'){
				reverse[i] = 'g';
			}
			else if(reverse[i] == 'g'){
				reverse[i] = 'c';
			}
			else if(reverse[i] == 't'){
				reverse[i] = 'a';
			}
		}
		return reverse;
	}
	
	/**
	 * The method calls getReverseCompSeq() and saves the result in a 
	 * temporary array and then copies the array back into the char array seqarr
	 */
	public void reverseComplement() {
		char[] temp = getReverseCompSeq();
		seqarr = temp;
	}
}
