 package edu.iastate.cs228.hw1;

/*
 * @author Ben Alexander
*/

public class Sequence {

	/**
	 * holds the character array for the DNA sequence
	 */
	public char[] seqarr; // made public instead of protected for grading.
	
	/**
	 * Creates a sequence object and uses the isValidLetter() method to check 
	 * if every char- acter in the array sarr is valid. If so, it makes and keeps 
	 * a copy of the array sarr in the field seqarr of type char[]. Otherwise, 
	 * it throws an IllegalArgumentException.
	 * @param sarr
	 */
	public Sequence(char[] sarr) {
		for (int i = 0; i < sarr.length; i++) {
			if (isValidLetter(sarr[i]) == false) {
				throw new IllegalArgumentException("Invalid sequence letter for class " + this.getClass());
			}
		}
		seqarr = sarr.clone();
	}
	
	/**
	 * The method returns the length of the character array seqarr.
	 * @return Sequence length
	 */
	public int seqLength() {
		return seqarr.length;
	}
	
	/**
	 * The method makes and returns a copy of the char array seqarr.
	 * @return a copy of the sequence
	 */
	public char[] getSeq() {
		return seqarr.clone();
	}
	
	/**
	 * The method returns the string representation of the char array seqarr.
	 * @return the sequence in string form
	 */
	public String toString() {
		String sequence = "";
		for (int i = 0; i < seqarr.length; i++) {
			sequence = sequence + seqarr[i];
		}
		return sequence;
	}
	
	/**
	 * The method returns true if the argument obj is not null and is 
	 * of the same type as this object in a case insensitive mode.
	 * @param an object of any type
	 * @return true if obj is equal to this (case insensitive), false otherwise
	 */
	public boolean equals(Object obj) {
		if(obj instanceof char[] && obj != null){
			char[] copy = (char[]) obj;
			char[] copy2 = seqarr;
			for (int i = 0; i < copy.length; i++) {
				if (copy[i] == 'A') {
					copy[i] = 'a';
				}
				if (copy[i] == 'C') {
					copy[i] = 'c';
				}
				if (copy[i] == 'G') {
					copy[i] = 'g';
				}
				if (copy[i] == 'T') {
					copy[i] = 't';
				}
			}
			for (int i = 0; i < copy2.length; i++) {
				if (copy2[i] == 'A') {
					copy2[i] = 'a';
				}
				if (copy2[i] == 'C') {
					copy2[i] = 'c';
				}
				if (copy2[i] == 'G') {
					copy2[i] = 'g';
				}
				if (copy2[i] == 'T') {
					copy2[i] = 't';
				}
			}
			if(copy.length != copy2.length){
				return false;
			}
			for(int i = 0; i < copy.length; i++){
				if(copy[i] != copy2[i]){
					return false;
				}
			}
			return true;
		}
		else{
			return false;
		}
	}
	
	/**
	 * The method returns true if the character let is an uppercase or lowercase
	 * it returns false otherwise
	 * @param let
	 * @return true if let is valid, false otherwise
	 */
	public boolean isValidLetter(char let) {
		if (Character.isUpperCase(let) || Character.isLowerCase(let)) {
			return true;
		} 
		else {
			return false;
		}
	}

}
