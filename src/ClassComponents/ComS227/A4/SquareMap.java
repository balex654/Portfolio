package hw4;

import java.awt.Point;
import java.awt.Polygon;
import java.util.ArrayList;

import graph.Cell;
import graph.GraphMap;

/**
 * A square lattice where each cell has 4 neighbors set up in a checker board pattern.
 * @author Ben Alexander
 *
 */
public class SquareMap extends GraphMap{
	/**
	 * Makes a new SquareMap with the GraphMap constructor
	 */
	public SquareMap(){
		super();
	}
	
	/**
	 * Gets the width of the window in pixels for rendering, including the border area.
	 * @return the width of the pixels
	 */
	public int getPixelWidth(){
		int width;
		Cell[][] cell = getCells();
		width = (getDistance() * cell[0].length) + getDistance();
		return width;
	}
	
	/**
	 * Gets the height of the window in pixels for rendering, including the border area.
	 * @return the height in pixels
	 */
	public int getPixelHeight(){
		int height;
		Cell[][] cell = getCells();
		height = (getDistance() * cell.length) + getDistance();
		return height;
	}
	
	/**
	 * Create an array of neighbors for the cell with given column and row.
	 * @param col - The column index of a Cell
	 *		  row - The row index of a Cell
	 * @return An array containing adjacent cells
	 */
	public Cell[] createNeighbors(int col, int row){
		Cell[][] map = getCells();
		ArrayList<Cell> neighbors = new ArrayList<Cell>();
		if((row - 1) >= 0){
			neighbors.add(map[row - 1][col]);
		}
		if((col - 1) >= 0){
			neighbors.add(map[row][col - 1]);
		}
		if((row + 1) <= map.length - 1){
			neighbors.add(map[row + 1][col]);
		}
		if((col + 1) <= map[0].length - 1){
			neighbors.add(map[row][col + 1]);
		}
		
		Cell[] c = new Cell[neighbors.size()];
		for(int i = 0; i < neighbors.size(); i++){
			c[i] = neighbors.get(i);
		}
		return c;
	}
	
	/**
	 * Get the column and row indices for the cell closest to a given pixel (x, y) 
	 * coordinate, returned as a Point object in which x is the column and y is the row.
	 * @param x - The x coordinate in pixels 
	 * y - The y coordinate in pixels
	 * @return column and row indices for the cell closest to the given (x, y)
	 */
	protected java.awt.Point selectClosestIndex(int x, int y){
		int xdist = (x - (getDistance() / 2)) / getDistance();
		int ydist = (y - (getDistance() / 2)) / getDistance();
		return new Point(xdist, ydist);
	}
	
	/**
	 * Create a polygon for the cell with the given column and row.
	 * @param col - The column index of a Cell
	 *		  row - The row index of a Cell
	 * @return A polygon with correct pixel coordinates for rendering the cell
	 */
	public java.awt.Polygon createPolygon(int col, int row){
		int[] xpoints = new int[4];
		int[] ypoints = new int[4];
		
		xpoints[0] = (col * getDistance()) + (getDistance() / 2);
		xpoints[1] = (col * getDistance()) + getDistance() + (getDistance() / 2);
		xpoints[2] = xpoints[1];
		xpoints[3] = xpoints[0];
		
		ypoints[0] = (row * getDistance()) + (getDistance() / 2);
		ypoints[1] = ypoints[0];
		ypoints[2] = (row * getDistance()) + getDistance() + (getDistance() / 2);
		ypoints[3] = ypoints[2];
		
		return new Polygon(xpoints, ypoints, 4);
	}
}
