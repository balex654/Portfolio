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
 * This class implements insertion sort.
 *
 */

public class InsertionSorter extends AbstractSorter {
	// Other private instance variables if you need ...

	/**
	 * The two constructors below invoke their corresponding superclass
	 * constructors. They also set the instance variables algorithm and
	 * outputFileName in the superclass.
	 */

	/**
	 * Constructor takes an array of points.
	 * 
	 * @param pts
	 */
	public InsertionSorter(Point[] pts) {
		super(pts);
		outputFileName = "insert.txt";
		algorithm = "insertion sorter  ";
	}

	/**
	 * Constructor reads points from a file.
	 * 
	 * @param inputFileName
	 *            name of the input file
	 * @throws FileNotFoundException 
	 * @throws InputMismatchException 
	 */
	public InsertionSorter(String inputFileName) throws InputMismatchException, FileNotFoundException {
		super(inputFileName);
		outputFileName = "insert.txt";
		algorithm = "insertion sorter  ";
	}

	/**
	 * Perform insertion sort on the array points[] of the parent class
	 * AbstractSorter.
	 * 
	 * @param order
	 *            1 by x-coordinate 2 by polar angle
	 */
	@Override
	public void sort(int order) {
		if (order < 1 || order > 2) {
			throw new IllegalArgumentException("Invalid input");
		}
		else{
			if(order == 1){
				sortByAngle = false;
			}
			else{
				sortByAngle = true;
			}
			setComparator();
			long startTime = System.nanoTime();
			int j;
			for(int i = 1; i < points.length; i++){
				Point t = points[i];
				for(j = i - 1; j >= 0 && pointComparator.compare(t, points[j]) == -1; j--){
					points[j + 1] = points[j];
				}
				points[j + 1] = t;
			}
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
}
