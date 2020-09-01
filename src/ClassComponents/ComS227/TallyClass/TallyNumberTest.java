package mini1;

public class TallyNumberTest {
	public static void main(String[] args){
		TallyNumber t1 = new TallyNumber("| *");
		TallyNumber t2 = new TallyNumber("| ** 0 ||");
		t1.combine(t2);
		System.out.println(t1.getStringValue());
	}
}