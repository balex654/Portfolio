package edu.iastate.cs228.hw1;

/*
 * @author Ben Alexander
*/

public class GenomicDNASequence extends DNASequence {
	public boolean[] iscoding; // made public instead of private for grading.
	
	/**
	 * Creates a sequence object and uses the isValidLetter() method to check 
	 * if every char- acter in the array sarr is valid. If so, it makes and keeps 
	 * a copy of the array sarr in the field seqarr of type char[]. Otherwise, 
	 * it throws an IllegalArgumentException and it creates a boolean array of 
	 * the same length as gdnaarr, saves its reference in the field iscoding, 
	 * and sets the boolean array to false at each index.
	 * @param gdnaarr
	 */
	public GenomicDNASequence(char[] gdnaarr) {
		super(gdnaarr);
		iscoding = new boolean[gdnaarr.length];
		for(int i = 0; i < iscoding.length; i++){
			iscoding[i] = false;
		}
	}
	
	/**
	 * If first is greater than last, then obtain the coding strand by calling the 
	 * method reverseComplement() and transforming first and last with the formula x = slen−1−x. 
	 * the method sets the boolean array iscoding to true at each index between 
	 * first and last inclusive
	 * @param first
	 * @param last
	 */
	public void markCoding(int first, int last) {
		int slen = seqLength();
		if(first < 0 || last < 0 || first >= slen || last >= slen){
			throw new IllegalArgumentException("Coding border is out of bound");
		}
		else{
			if(first > last){
				reverseComplement();
				first = slen - 1 - first;
				last = slen - 1 - last;
				for(int i = first; i <= last; i++){
					iscoding[i] = true;
				}
			}
			else if(first < last){
				for(int i = first; i <= last; i++){
					iscoding[i] = true;
				}
			}
		}
	}
	
	/**
	 * The integer array argument exonpos is used to specify the start and end positions
	 * of every coding exon in the genomic sequence. the method takes all the coding exons 
	 * specified by the array exonpos, concatenates them in order, and returns the resulting 
	 * sequence in a new character array
	 * @param exonpos
	 * @return newArray
	 */
	public char[] extractExons(int[] exonpos) {
		if(exonpos.length == 0 || (exonpos.length % 2) == 1){
			throw new IllegalArgumentException("Empty array or odd number of array elements");
		}
		for(int i = 0; i < exonpos.length; i++){
			if(exonpos[i] < 0 || exonpos[i] >= seqLength()){
				throw new IllegalArgumentException("Exon position is out of bound");
			}
		}
		for(int i = 0; i < exonpos.length; i++){
			if(i < (exonpos.length - 1)){
				if(exonpos[i] > exonpos[i + 1]){
					throw new IllegalArgumentException("Exon positions are not in order");
				}
			}
		}
		for(int i = 0; i < exonpos.length; i++){
			if(iscoding[exonpos[i]] == false){
				throw new IllegalStateException("Noncoding position is found");
			}
		}
		
		int newArrayLength = 0;
		for(int i = 0; i < exonpos.length - 1; i+=2){
			newArrayLength = newArrayLength + (exonpos[i + 1] - exonpos[i] + 1);
		}
		char[] newArray = new char[newArrayLength];
		int count = 0;
		for(int i = 0; i < exonpos.length - 1; i+=2){
			for(int j = exonpos[i]; j <= exonpos[i + 1]; j++){
				newArray[count] = seqarr[j];
				count++;
			}
		}
		return newArray;
	}

}
