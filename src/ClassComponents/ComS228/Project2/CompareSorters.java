package edu.iastate.cs228.hw2;

/**
 *  
 * @author Ben Alexander
 *
 */

/**
 * 
 * This class executes four sorting algorithms: selection sort, insertion sort, mergesort, and
 * quicksort, over randomly generated integers as well integers from a file input. It compares the 
 * execution times of these algorithms on the same input. 
 *
 */

import java.io.FileNotFoundException;
import java.util.Scanner;
import java.util.InputMismatchException;
import java.util.Random;

public class CompareSorters {
	/**
	 * Repeatedly take integer sequences either randomly generated or read from
	 * files. Perform the four sorting algorithms over each sequence of
	 * integers, comparing points by x-coordinate or by polar angle with respect
	 * to the lowest point.
	 * 
	 * @param args
	 * @throws FileNotFoundException 
	 * @throws InputMismatchException 
	 **/
	public static void main(String[] args) throws InputMismatchException, FileNotFoundException {
		System.out.println("Comparison of Four Sorting Algorithms\n\nkeys: 1 (random integers) 2 (file input) 3 (exit)\norder: 1 (by x-coordinate) 2 (by polar angle)\n");
		String key = "0";
		int trialCount = 1;
		while(Integer.parseInt(key) != 3){
			System.out.print("Trial " + trialCount + " => Enter key: ");
			Scanner in = new Scanner(System.in);
			key = in.nextLine();
			if(Integer.parseInt(key) == 1){
				System.out.print("Enter number of random points: ");
				String spoints = in.nextLine();
				int numPoints = Integer.parseInt(spoints);
				System.out.print("Order used in sorting: ");
				String order = in.nextLine();
				Random rand = new Random(100);
				Point[] points = generateRandomPoints(numPoints, rand);
				AbstractSorter[] sorters = new AbstractSorter[4];
				sorters[0] = new SelectionSorter(points);
				sorters[1] = new InsertionSorter(points);
				sorters[2] = new MergeSorter(points);
				sorters[3] = new QuickSorter(points);
				for(int i = 0; i < sorters.length; i++){
					sorters[i].sort(Integer.parseInt(order));
				}
				System.out.println("\n\nalgoritm           size        time (ns)");
				System.out.println("---------------------------------------------\n");
				for(int i = 0; i < sorters.length; i++){
					System.out.println(sorters[i].stats());
				}
				System.out.println("---------------------------------------------\n\n");
			}
			if(Integer.parseInt(key) == 2){
				System.out.println("Points from a file");
				System.out.print("File name: ");
				String fileName = in.nextLine();
				System.out.print("Order used in sorting: ");
				String order = in.nextLine();
				AbstractSorter[] sorters = new AbstractSorter[4];
				sorters[0] = new SelectionSorter(fileName);
				sorters[1] = new InsertionSorter(fileName);
				sorters[2] = new MergeSorter(fileName);
				sorters[3] = new QuickSorter(fileName);
				for(int i = 0; i < sorters.length; i++){
					sorters[i].sort(Integer.parseInt(order));
				}
				System.out.println("\n\nalgoritm           size        time (ns)");
				System.out.println("---------------------------------------------\n");
				for(int i = 0; i < sorters.length; i++){
					System.out.println(sorters[i].stats());
				}
				System.out.println("---------------------------------------------\n\n");
			}
			in.close();
			trialCount++;
		}
		
		
		//
		// Conducts multiple sorting rounds. In each round, performs the
		// following:
		//
		// a) If asked to sort random points, calls generateRandomPoints() to
		// initialize an array
		// of random points.
		// b) Reassigns to elements in the array sorters[] (declared below) the
		// references to the
		// four newly created objects of SelectionSort, InsertionSort, MergeSort
		// and QuickSort.
		// c) Based on the input point order, carries out the four sorting
		// algorithms in a for
		// loop that iterates over the array sorters[], to sort the randomly
		// generated points
		// or points from an input file.
		// d) Meanwhile, prints out the table of runtime statistics.
		//
		// A sample scenario is given in Section 2 of the assignment
		// description.
		//
		

		// Within a sorting round, every sorter object write its output to the
		// file
		// "select.txt", "insert.txt", "merge.txt", or "quick.txt" if it is an
		// object of
		// SelectionSort, InsertionSort, MergeSort, or QuickSort, respectively.

	}

	/**
	 * This method generates a given number of random points to initialize
	 * randomPoints[]. The coordinates of these points are pseudo-random numbers
	 * within the range [-50,50] � [-50,50]. Please refer to Section 3 of
	 * assignment description document on how such points can be generated.
	 * 
	 * Ought to be private. Made public for testing.
	 * 
	 * @param numPts
	 *            number of points
	 * @param rand
	 *            Random object to allow seeding of the random number generator
	 * @throws IllegalArgumentException
	 *             if numPts < 1
	 */
	public static Point[] generateRandomPoints(int numPts, Random rand) throws IllegalArgumentException {
		if(numPts < 1){
			throw new IllegalArgumentException("No points");
		}
		else{
			Random r = new Random();
			Point[] points = new Point[numPts];
			for(int i = 0; i < numPts; i++){
				Point p = new Point(r.nextInt(101) - 50, r.nextInt(101) - 50);
				points[i] = p;
			}
			return points;
		}
	}
}
