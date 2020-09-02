package ui;

import java.awt.Color;
import java.awt.Dimension;

import javax.swing.BoxLayout;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.SwingUtilities;

import assignment1.TicTacToe;

/**
 * Main class for a GUI for a TicTacToe game sets up a GamePanel instance in a
 * frame.
 * 
 * @author Ben Alexander
 */
public class GameMain {
	/**
	 * Line width in pixels.
	 */
	public static final int LINE_SIZE = 6;

	/**
	 * Font size for displaying score.
	 */
	public static final int SCORE_FONT = 24;

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
	 */
	private static void create() {

		TicTacToe match = new TicTacToe();

		ScorePanel scorePanel = new ScorePanel();
		GamePanel panel = new GamePanel(scorePanel, match);
		ChooseButtonPanel choosePanel = new ChooseButtonPanel(panel, scorePanel);

		JPanel mainPanel = new JPanel();
		mainPanel.setLayout(new BoxLayout(mainPanel, BoxLayout.Y_AXIS));
		mainPanel.add(choosePanel);
		mainPanel.add(scorePanel);
		mainPanel.add(panel);

		JFrame frame = new JFrame("Com S 227 Flow Game");
		frame.getContentPane().add(mainPanel);

		Dimension d = new Dimension(300, 300);
		panel.setPreferredSize(d);
		d = new Dimension(300, 100);
		scorePanel.setPreferredSize(d);
		d = new Dimension(300, 100);
		choosePanel.setPreferredSize(d);
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
				create();
			}
		};
		SwingUtilities.invokeLater(r);
	}
}
