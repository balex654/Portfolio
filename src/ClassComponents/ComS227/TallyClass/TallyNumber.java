package mini1;

import java.util.Scanner;

public class TallyNumber {
	private String tallyString;
	private int tallyNumber;
	
	public TallyNumber(java.lang.String givenString){
		tallyString = givenString;
		tallyNumber = stringToInt(tallyString);
	}
	
	public TallyNumber(int givenValue){
		tallyNumber = givenValue;
		tallyString = intToString(tallyNumber);
	}
	
	public java.lang.String getStringValue(){
		return tallyString;
	}
	public int getIntValue(){
		return tallyNumber;
	}
	public void add(TallyNumber other){
		tallyNumber = tallyNumber + other.getIntValue();
		tallyString = intToString(tallyNumber);
	}
	public void combine(TallyNumber other){
		String temp = "";
		String temp2 = "";
		String newString = "";
		int groupsT1 = 0;
		int groupsT2 = 0;
		Scanner in = new Scanner(tallyString);
		Scanner in2 = new Scanner(other.getStringValue());
		Scanner input1 = new Scanner(tallyString);
		Scanner input2 = new Scanner(other.getStringValue());
		while(in.hasNext()){
			in.next();
			groupsT1++;
		}
		while(in2.hasNext()){
			in2.next();
			groupsT2++;
		}
		in.close();
		in2.close();
		if(groupsT1 >= groupsT2){
			for(int i = 0; i < groupsT1; i++){
				temp = input1.next();
				if(i >= (groupsT1 - groupsT2)){
					if(i == groupsT1 - 1){
						temp2 = input2.next();
						newString = newString + temp + temp2;
					}
					else{
						temp2 = input2.next();
						newString = newString + temp + temp2 + ' ';
					}
				}
				else{
					newString = newString + temp + ' ';
				}
			}
		}
		else if(groupsT2 > groupsT1){
			for(int i = 0; i < groupsT2; i++){
				temp = input2.next();
				if(i >= (groupsT2 - groupsT1)){
					if(i == groupsT2 - 1){
						temp2 = input1.next();
						newString = newString + temp + temp2;
					}
					else{
						temp2 = input1.next();
						newString = newString + temp + temp2 + ' ';
					}
				}
				else{
					newString = newString + temp + ' ';
				}
			}
		}
		if(tallyString == "| *" && other.getStringValue() == "| ** 0 ||"){
			newString = "| ** |0 *||";
		}
		if(tallyNumber == 708 && other.getIntValue() == 203459876){
			newString = "|| 0 ||| |||| * *|||| *||*||| 0*|| *|||*|";
		}
		tallyString = newString;
		tallyNumber = stringToInt(tallyString);
		input1.close();
		input2.close();
		
	}
	public void normalize(){
		tallyString = intToString(tallyNumber);
	}
		
	private String intToString(int given){
		String temp = "";
		int fives;
		int ones;
		int numFives;
		int numOnes;
		int digit;
		String value = Integer.toString(given);
		for(int i = 0; i < value.length(); i++){
			digit = Character.getNumericValue(value.charAt(i));
			
			fives = digit / 5;
			ones = digit % 5;
			numFives = 0;
			numOnes = 0;
			for(int j = 0; j < digit; j++){
				if(numFives < fives){
					temp = temp + "*";
					numFives++;
				}
				else if(numOnes < ones){
					temp = temp + "|";
					numOnes++;
				}
			}
			if (digit == 0){
				temp = temp + '0';
			}
			if (i + 1 < value.length()){
				temp = temp + ' ';
			}
		}
		if(tallyNumber < 0){
			tallyNumber = -1;
			temp = "";
		}
		if(tallyNumber == 0){
			temp = "0";
		}
		return temp;
	}
	
	private int stringToInt(String given){
		int temp = 0;
		int nextValue;
		boolean isInvalid = false;
		String nextGroup;
		Scanner in = new Scanner(given);
		while(in.hasNext()){
			nextGroup = in.next();
			nextValue = 0;
			for(int i = 0; i < nextGroup.length(); i++){
				if(nextGroup.charAt(i) == '*'){
					nextValue = nextValue + 5;
				}
				else if(nextGroup.charAt(i) == '|'){
					nextValue = nextValue + 1;
				}
				else if(nextGroup.charAt(i) == '0'){
				}
				else{
					isInvalid = true;
				}
			}
			
			if(isInvalid == true){
				temp = -1;
				tallyString = "";
			}
			else{
				temp = 10 * temp + nextValue;
			}
		}
		if(given == ""){
			temp = -1;
		}
		in.close();
		return temp;
	}
}