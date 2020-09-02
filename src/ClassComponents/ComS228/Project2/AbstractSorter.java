package edu.iastate.cs228.hw2;

/**
 *  
 * @author Ben Alexander
 *
 */

import java.util.Comparator;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.lang.IllegalArgumentException;
import java.util.InputMismatchException;
import java.util.Scanner;

/**
 * 
 * This abstract class is extended by SelectionSort, InsertionSort, MergeSort,
 * and QuickSort. It stores the input (later on the sorted) sequence and records
 * the employed sorting algorithm, the comparison method, and the time spent on
 * sorting.
 *
 */

public abstract class AbstractSorter {

	protected Point[] points; // Array of points operated on by a sorting
								// algorithm.
								// The number of points is given by
								// points.length.

	protected String algorithm = null; // "selection sort", "insertion sort",
										// "merge sort", or "quick sort".
										// Initialized by a subclass
										// constructor.
	protected boolean sortByAngle; // true if last sort was done by polar angle
									// and false
									// if by x-coordinate

	protected String outputFileName; // "select.txt", "insert.txt", "merge.txt",
										// or "quick.txt"

	protected long sortingTime; // execution time in nanoseconds.

	protected Comparator<Point> pointComparator; // comparator which compares
													// polar angle if
													// sortByAngle == true and
													// x-coordinate if
													// sortByAngle == false

	public Point lowestPoint; // lowest point in the array, or in case of a
								// tie, the
								// leftmost of the lowest points. This point is
								// used
								// as the reference point for polar angle based
								// comparison.

	// Add other protected or private instance variables you may need.

	protected AbstractSorter() {
		// No implementation needed. Provides a default super constructor to
		// subclasses.
		// Removable after implementing SelectionSorter, InsertionSorter,
		// MergeSorter, and QuickSorter.
	}

	/**
	 * This constructor accepts an array of points as input. Copy the points
	 * into the array points[]. Sets the instance variable lowestPoint.
	 * 
	 * @param pts
	 *            input array of points
	 * @throws IllegalArgumentException
	 *             if pts == null or pts.length == 0.
	 */
	protected AbstractSorter(Point[] pts) throws IllegalArgumentException {
		if(pts == null || pts.length == 0){
			throw new IllegalArgumentException("Invalid input");
		}
		else{
			points = pts.clone();
			int pos = 0;
			for(int i = 0; i < points.length; i++){
				if(points[i].getY() < points[pos].getY()){
					pos = i;
				}
				if(points[i].getY() == points[pos].getY() && points[i].getX() < points[pos].getX()){
					pos = i;
				}
			}
			lowestPoint = points[pos];
		}
		
	}

	/**
	 * This constructor reads points from a file. Sets the instance variables
	 * lowestPoint and outputFileName.
	 * 
	 * @param inputFileName
	 * @throws FileNotFoundException
	 * @throws InputMismatchException
	 *             when the input file contains an odd number of integers
	 */
	protected AbstractSorter(String inputFileName) throws FileNotFoundException, InputMismatchException {
		File fileName = new File(inputFileName);
		
		if(fileName.exists() == false){
			throw new FileNotFoundException("File does not exist");
		}
		
		Scanner in = new Scanner(fileName);
		int count = 0;
		while(in.hasNextLine()){
			String s = in.nextLine();
			Scanner in2 = new Scanner(s);
			while(in2.hasNextInt()){
				in2.nextInt();
				count++;
			}
			in2.close();
		}
		in.close();
		
		if((count % 2) != 0){
			throw new InputMismatchException("File contains odd number of digits");
		}
		else{
			String sIn = "";
			Scanner input = new Scanner(fileName);
			while(input.hasNextLine()){
				String s = input.nextLine();
				Scanner input2 = new Scanner(s);
				while(input2.hasNextInt()){
					sIn = sIn + " " + input2.nextInt();
				}
				input2.close();
			}
			input.close();
			
			Scanner lineIn = new Scanner(sIn);
			Point[] points = new Point[count/2];
			int i = 0;
			while(lineIn.hasNextInt()){
				Point p = new Point(lineIn.nextInt(), lineIn.nextInt());
				points[i] = p;
				i++;
			}
			lineIn.close();
			
			this.points = points.clone();
			int pos = 0;
			for(int j = 0; j < points.length; j++){
				if(points[j].getY() < points[pos].getY()){
					pos = j;
				}
				if(points[j].getY() == points[pos].getY() && points[j].getX() < points[pos].getX()){
					pos = j;
				}
			}
			lowestPoint = points[pos];
		}
	}

	/**
	 * Sorts the elements in points[].
	 * 
	 * a) in the non-decreasing order of x-coordinate if order == 1 b) in the
	 * non-decreasing order of polar angle w.r.t. lowestPoint if order == 2
	 * (lowestPoint will be at index 0 after sorting)
	 * 
	 * Sets the instance variable sortByAngle based on the value of order. Calls
	 * the method setComparator() to set the variable pointComparator and use it
	 * in sorting. Records the sorting time (in nanoseconds) using the
	 * System.nanoTime() method. (Assign the time to the variable sortingTime.)
	 * 
	 * @param order
	 *            1 by x-coordinate 2 by polar angle w.r.t lowestPoint
	 *
	 * @throws IllegalArgumentException
	 *             if order is less than 1 or greater than 2
	 */
	public abstract void sort(int order) throws IllegalArgumentException;

	/**
	 * Outputs performance statistics in the format:
	 * 
	 * <sorting algorithm> <size> <time>
	 * 
	 * For instance,
	 * 
	 * selection sort 1000 9200867
	 * 
	 * Use the spacing in the sample run in Section 2 of the assignment
	 * description.
	 */
	public String stats() {
		String s = "" + algorithm + " " + points.length + "           " + sortingTime;
		return s;
	}

	/**
	 * Write points[] to a string. When printed, the points will appear in order
	 * of increasing index with every point occupying a separate line. The x and
	 * y coordinates of the point are displayed on the same line with exactly
	 * one blank space in between.
	 */
	@Override
	public String toString() {
		String s = "";
		for(int i = 0; i < points.length; i++){
			s = s + points[i].getX() + " " + points[i].getY() + "\n";
		}
		return s;
	}

	/**
	 * 
	 * This method, called after sorting, writes point data into a file by
	 * outputFileName. It will be used for Mathematica plotting to verify the
	 * sorting result. The data format depends on sortByAngle. It is detailed in
	 * Section 4.1 of the assignment description assn2.pdf.
	 * 
	 * @throws FileNotFoundException
	 */
	public void writePointsToFile() throws FileNotFoundException {
		if(sortByAngle == false){
			File outFile = new File(outputFileName);
			PrintWriter out = new PrintWriter(outFile);
			for(int i = 0; i < points.length; i++){
				String s = "" + points[i].getX() + " " + points[i].getY();
				out.write(s);
				out.write("\r\n");
			}
			out.close();
		}
		if(sortByAngle == true){
			File outFile = new File(outputFileName);
			PrintWriter out = new PrintWriter(outFile);
			for(int i = 0; i < points.length; i++){
				if(i == 0){
					String s = "" + points[i].getX() + " " + points[i].getY();
					out.write(s);
					out.write("\r\n");
				}
				else{
					String s = "" + points[i - 1].getX() + " " + points[i - 1].getY() + " " + points[0].getX() + " " + points[0].getY() + " " + points[i - 1].getX() + " " + points[i - 1].getY();
					out.write(s);
					out.write("\r\n");
				}			
				
			}
			out.close();
		}
	}

	/**
	 * Generates a comparator on the fly that compares by polar angle if
	 * sortByAngle == true and by x-coordinate if sortByAngle == false. Set the
	 * protected variable pointComparator to it. Need to create an object of the
	 * PolarAngleComparator class and call the compareTo() method in the Point
	 * class, respectively for the two possible values of sortByAngle.
	 * 
	 * @param order
	 */
	protected void setComparator() {
		if(sortByAngle == false){
			pointComparator = new Comparator<Point>(){
				@Override
				public int compare(Point p2, Point p1) {
					Point p = new Point(p1.getX(), p1.getY());
					return -p.compareTo(p2);
				}
			};
		}
		else if(sortByAngle == true){
			PolarAngleComparator p = new PolarAngleComparator(lowestPoint);
			pointComparator = p;
		}
	}

	/**
	 * Swap the two elements indexed at i and j respectively in the array
	 * points[].
	 * 
	 * @param i
	 * @param j
	 */
	protected void swap(int i, int j) {
		Point t = points[i];
		points[i] = points[j];
		points[j] = t;
	}
}
