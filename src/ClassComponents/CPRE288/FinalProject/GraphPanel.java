package gui;

import java.awt.BasicStroke;
import java.awt.Color;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

import javax.swing.JPanel;

/**
 * Main panel for the user interface
 * 
 * @author Ben Alexander
 */
public class GraphPanel extends JPanel {
	/**
	 * Suppress compiler warning.
	 */
	private static final long serialVersionUID = 1L;
	
	private String[] data;
	
	/**
	 * Constructs a GraphPanel
	 * 
	 * @param darr - the array that the data from the file is stored in
	 */
	public GraphPanel(String[] darr) {
		data = darr;
	}

	/**
	 * Used to continuously update the frame
	 *
	 * @throws FileNotFoundException 
	 */
	public void reset() throws FileNotFoundException {
		//Location of the data file. If you modify this, you must also make the same changes to the path name in GuiMain.java
		File file = new File("/Users/benalexander/School/CPRE288/gui/data.txt");
		Scanner scanner = new Scanner(file);
		String[] data = new String[180];
		int i = 0;
		while(scanner.hasNextLine()){
			data[i] = scanner.nextLine();
			i++;
		}
		scanner.close();
		this.data = data;
		repaint();
	}
	
	/**
	 * Creates all the components in the panel
	 */
	@Override
	public void paintComponent(Graphics g) {
		
		g.setColor(Color.BLACK);
		((Graphics2D) g).setStroke(new BasicStroke(GuiMain.LINE_SIZE));
		g.drawOval(0, 0, 1200, 1200);
		
		g.setColor(Color.BLACK);
		((Graphics2D) g).setStroke(new BasicStroke(GuiMain.LINE_SIZE));
		g.drawOval(60, 60, 1080, 1080);
		
		g.setColor(Color.BLACK);
		((Graphics2D) g).setStroke(new BasicStroke(GuiMain.LINE_SIZE));
		g.drawOval(120, 120, 960, 960);
		
		g.setColor(Color.BLACK);
		((Graphics2D) g).setStroke(new BasicStroke(GuiMain.LINE_SIZE));
		g.drawOval(180, 180, 840, 840);
		
		g.setColor(Color.BLACK);
		((Graphics2D) g).setStroke(new BasicStroke(GuiMain.LINE_SIZE));
		g.drawOval(240, 240, 720, 720);
		
		g.setColor(Color.BLACK);
		((Graphics2D) g).setStroke(new BasicStroke(GuiMain.LINE_SIZE));
		g.drawOval(300, 300, 600, 600);
		
		g.setColor(Color.BLACK);
		((Graphics2D) g).setStroke(new BasicStroke(GuiMain.LINE_SIZE));
		g.drawOval(360, 360, 480, 480);
		
		g.setColor(Color.BLACK);
		((Graphics2D) g).setStroke(new BasicStroke(GuiMain.LINE_SIZE));
		g.drawOval(420, 420, 360, 360);
		
		g.setColor(Color.BLACK);
		((Graphics2D) g).setStroke(new BasicStroke(GuiMain.LINE_SIZE));
		g.drawOval(480, 480, 240, 240);
		
		g.setColor(Color.BLACK);
		((Graphics2D) g).setStroke(new BasicStroke(GuiMain.LINE_SIZE));
		g.drawOval(540, 540, 120, 120);
		
		
		
		g.drawString("100", 5, 600);
		g.drawString("80", 125, 600);
		g.drawString("60", 245, 600);
		g.drawString("40", 365, 600);
		g.drawString("20", 485, 600);
		g.drawString("0", 595, 600);
		
		g.drawString("100", 1145, 600);
		g.drawString("80", 1025, 600);
		g.drawString("60", 905, 600);
		g.drawString("40", 785, 600);
		g.drawString("20", 665, 600);
		
		int prevXir = 0;
		int prevYir = 0;
		int prevXping = 0;
		int prevYping = 0;
	    for(int i = 0; i < 180; i++){
	    	Scanner in = new Scanner(data[i]);
	    	double Ir = in.nextInt();
	    	double ping = in.nextDouble();
	    	in.close();
	    	
	    	double angle = Math.toRadians(Math.abs(i - 180));
	    	
	    	int xIR = (int) Math.round(600 + ((Math.cos(angle)) * Ir) * 6);
	    	int yIR = (int) Math.round(600 - ((Math.sin(angle)) * Ir) * 6);
	    	makePoint(g, xIR, yIR, Color.BLUE);
	    	
	    	if(prevXir != 0 && prevYir != 0){
	    		g.setColor(Color.BLUE);
	    		((Graphics2D) g).setStroke(new BasicStroke(4));
	    		g.drawLine(prevXir, prevYir, xIR, yIR);
	    	}
	    	prevXir = xIR;
	    	prevYir = yIR;
	    	
	    	int xPing = (int) Math.round(600 + ((Math.cos(angle)) * ping) * 6);
	    	int yPing = (int) Math.round(600 - ((Math.sin(angle)) * ping) * 6);
	    	makePoint(g, xPing, yPing, Color.RED);
	    	
	    	if(prevXping != 0 && prevYping != 0){
	    		g.setColor(Color.RED);
	    		((Graphics2D) g).setStroke(new BasicStroke(4));
	    		g.drawLine(prevXping, prevYping, xPing, yPing);
	    	}
	    	prevXping = xPing;
	    	prevYping = yPing;
	    }
	    try {
			reset();
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	    
	}
	
	/**
     * Makes a point with a specific at the given coordinates
     */
	private void makePoint(Graphics g, int xCord, int yCord, Color c){
		g.setColor(c);
		((Graphics2D) g).setStroke(new BasicStroke(GuiMain.LINE_SIZE));
		g.fillRect(xCord, yCord, 3, 3);
	}
}
