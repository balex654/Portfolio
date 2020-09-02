package edu.iastate.cs228.hw2;

import java.io.FileNotFoundException;
import java.util.InputMismatchException;
import java.lang.IllegalArgumentException;

/**
 *  
 * @author Ben Alexander
 *
 */

/**
 * 
 * This class implements selection sort.
 *
 */

public class SelectionSorter extends AbstractSorter {
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
	public SelectionSorter(Point[] pts) {
		super(pts);
		outputFileName = "select.txt";
		algorithm = "selection sorter  ";
	}

	/**
	 * Constructor reads points from a file.
	 * 
	 * @param inputFileName
	 *            name of the input file
	 * @throws FileNotFoundException 
	 * @throws InputMismatchException 
	 */
	public SelectionSorter(String inputFileName) throws InputMismatchException, FileNotFoundException {
		super(inputFileName);
		outputFileName = "select.txt";
		algorithm = "selection sorter  ";
	}

	/**
	 * Apply selection sort on the array points[] of the parent class
	 * AbstractSorter.
	 *
	 * @param order
	 *            1 by x-coordinate 2 by polar angle
	 *
	 */
	@Override
	public void sort(int order) throws IllegalArgumentException {
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
			for (int i = 0; i < points.length - 1; i++) {
				int pos = i;
				for (int j = i + 1; j < points.length; j++) {
					if (pointComparator.compare(points[j], points[pos]) == -1) {
						pos = j;
					}
				}
				if (i != pos) {
					swap(i, pos);
				}
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
