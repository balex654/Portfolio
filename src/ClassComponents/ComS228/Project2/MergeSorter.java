package edu.iastate.cs228.hw2;

import java.io.FileNotFoundException;
import java.util.InputMismatchException;

/**
 *  
 * @author Ben Alexander
 *
 */

/**
 * 
 * This class implements the mergesort algorithm.
 *
 */

public class MergeSorter extends AbstractSorter {
	private Point[] array;
	private Point[] tempMergArr;
	private int length;

	/**
	 * The two constructors below invoke their corresponding superclass
	 * constructors. They also set the instance variables algorithm and
	 * outputFileName in the superclass.
	 */

	/**
	 * Constructor accepts an input array of points. in the array.
	 * 
	 * @param pts
	 *            input array of integers
	 */
	public MergeSorter(Point[] pts) {
		super(pts);
		outputFileName = "merge.txt";
		algorithm = "merge sorter      ";
	}

	/**
	 * Constructor reads points from a file.
	 * 
	 * @param inputFileName
	 *            name of the input file
	 * @throws FileNotFoundException
	 * @throws InputMismatchException
	 */
	public MergeSorter(String inputFileName) throws InputMismatchException, FileNotFoundException {
		super(inputFileName);
		outputFileName = "merge.txt";
		algorithm = "merge sorter      ";
	}

	/**
	 * Perform mergesort on the array points[] of the parent class
	 * AbstractSorter.
	 * 
	 * @param order
	 *            1 by x-coordinate 2 by polar angle
	 *
	 */
	@Override
	public void sort(int order) {
		if (order < 1 || order > 2) {
			throw new IllegalArgumentException("Invalid input");
		}
		else{
			if (order == 1) {
				sortByAngle = false;
			} else {
				sortByAngle = true;
			}
			setComparator();
			long startTime = System.nanoTime();
			mergeSortRec(points);
			long endTime = System.nanoTime();
			sortingTime = endTime - startTime;
			try {
				writePointsToFile();
			} catch (FileNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}

	/**
	 * This is a recursive method that carries out mergesort on an array pts[]
	 * of points. One way is to make copies of the two halves of pts[],
	 * recursively call mergeSort on them, and merge the two sorted subarrays
	 * into pts[].
	 * 
	 * @param pts
	 *            point array
	 */
	private void mergeSortRec(Point[] pts) {
		array = pts;
		length = pts.length;
		tempMergArr = new Point[length];
		merge(0, length - 1);
	}
	
	/**
	 * Recursive helper method for mergeSortRec
	 * 
	 * @param lowIndex
	 * @param highIndex
	 */
	private void merge(int lowIndex, int highIndex) {
		if (lowIndex < highIndex) {
            int middle = lowIndex + (highIndex - lowIndex) / 2;
            merge(lowIndex, middle);
            merge(middle + 1, highIndex);
            mergeParts(lowIndex, middle, highIndex);
        }
	}
	
	/**
	 * Helper method to the recursive method merge.
	 * This method's main purpose is to compare the given points
	 * of the partial array
	 * 
	 * @param lowIndex
	 * @param middleIndex
	 * @param highIndex
	 */
	private void mergeParts(int lowIndex, int middleIndex, int highIndex) {
		for (int i = lowIndex; i <= highIndex; i++){
            tempMergArr[i] = array[i];
        }
        int i = lowIndex;
        int j = middleIndex + 1;
        int k = lowIndex;
        while (i <= middleIndex && j <= highIndex) {
            if (pointComparator.compare(tempMergArr[i], tempMergArr[j]) == -1){
                array[k] = tempMergArr[i];
                i++;
            } 
            else{
                array[k] = tempMergArr[j];
                j++;
            }
            k++;
        }
        while (i <= middleIndex){
            array[k] = tempMergArr[i];
            k++;
            i++;
        }
	}

}
