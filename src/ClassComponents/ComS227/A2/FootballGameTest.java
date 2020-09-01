package hw2;
import hw2.FootballGame;
public class FootballGameTest {
	public static void main(String[] args){
		FootballGame game = new FootballGame();
		game.runOrPass(1);
		game.runOrPass(80);
		game.runOrPass(1);
		game.runOrPass(10);
		game.runOrPass(5);
		System.out.println(game.getOffense());
		System.out.println(game.getScore(0));
		System.out.println(game.getScore(1));
		System.out.println(game.getDown());

	}
}
