package gui;

import java.awt.Color;
import java.awt.Dimension;
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

import javax.swing.BoxLayout;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.SwingUtilities;

/**
 * Main class for the GUI. Sets up a GraphPanel instance in a
 * frame.
 * 
 * @author Ben Alexander
 */
public class GuiMain{
	/**
	 * Line width in pixels.
	 */
	public static final int LINE_SIZE = 1;
    
	/**
	 * Background color.
	 */
	public static final Color BACKGROUND_COLOR = Color.WHITE;

	/**
	 * Color for grid lines.
	 */
	public static final Color GRID_COLOR = Color.BLACK;

	/**
	 * Method used for instantiating the components.
	 * @throws FileNotFoundException 
	 */
	private static void create() throws FileNotFoundException {
		//Location of the data file. If you modify this, you must also make the same changes to the path name in GraphPanel.java
		File file = new File("/Users/benalexander/School/CPRE288/gui/data.txt");
		Scanner scanner = new Scanner(file);
		String[] data = new String[180];
		int i = 0;
		while(scanner.hasNextLine()){
			data[i] = scanner.nextLine();
			i++;
		}
		scanner.close();
		
		GraphPanel panel = new GraphPanel(data);

		JPanel mainPanel = new JPanel();
		mainPanel.setLayout(new BoxLayout(mainPanel, BoxLayout.Y_AXIS));
		mainPanel.add(panel);

		JFrame frame = new JFrame("Tall Object Detection Graph");
		frame.getContentPane().add(mainPanel);

		Dimension d = new Dimension(1200, 600);
		panel.setPreferredSize(d);
		frame.pack();

		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.setVisible(true);
	}

	/**
	 * Main method that initiates the program
	 * @param args
	 */
	public static void main(String[] args) {
		Runnable r = new Runnable() {
			public void run() {
				try {
					create();
				} catch (FileNotFoundException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		};
		SwingUtilities.invokeLater(r);
	}
}
