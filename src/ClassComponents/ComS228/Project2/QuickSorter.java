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
 * This class implements the version of the quicksort algorithm presented in the
 * lecture.
 *
 */

public class QuickSorter extends AbstractSorter {

	/**
	 * The two constructors below invoke their corresponding superclass
	 * constructors. They also set the instance variables algorithm and
	 * outputFileName in the superclass.
	 */

	/**
	 * Constructor accepts an input array of points.
	 * 
	 * @param pts
	 *            input array of integers
	 */
	public QuickSorter(Point[] pts) {
		super(pts);
		outputFileName = "quick.txt";
		algorithm = "quick sorter      ";
	}

	/**
	 * Constructor reads points from a file.
	 * 
	 * @param inputFileName
	 *            name of the input file
	 * @throws FileNotFoundException
	 * @throws InputMismatchException
	 */
	public QuickSorter(String inputFileName) throws InputMismatchException, FileNotFoundException {
		super(inputFileName);
		outputFileName = "quick.txt";
		algorithm = "quick sorter      ";
	}

	/**
	 * Carry out quicksort on the array points[] of the AbstractSorter class.
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
			quickSortRec(0, points.length - 1);
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
	 * Operates on the subarray of points[] with indices between first and last.
	 * 
	 * @param first
	 *            starting index of the subarray
	 * @param last
	 *            ending index of the subarray
	 */
	private void quickSortRec(int first, int last) {
		if (first < last) {
			int index = partition(first, last);
			quickSortRec(first, index - 1);
			quickSortRec(index, last);
		}
	}

	/**
	 * Operates on the subarray of points[] with indices between first and last.
	 * 
	 * @param first
	 * @param last
	 * @return
	 */
	private int partition(int first, int last) {
		int i = first;
		int j = last;
		
		Point pivot = points[(first + last) / 2];

		while (i <= j) {
			while (pointComparator.compare(points[i], pivot) == -1) {
				++i;
			}

			while (pointComparator.compare(points[j], pivot) == 1) {
				--j;
			}

			if (i <= j) {
				swap(i, j);
				++i;
				--j;
			}
		}

		return i;
	}

	// Other private methods in case you need ...
}
