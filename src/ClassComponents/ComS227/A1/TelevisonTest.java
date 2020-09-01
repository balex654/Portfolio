package hw1;

import hw1.Television;

public class TelevisonTest {
	public static void main(String[] args){
		Television tv = new Television(5);
		
		System.out.println(tv.getVolume());
		tv.volumeUp();
		System.out.println(tv.getVolume());
		tv.volumeDown();
		tv.volumeDown();
		System.out.println(tv.getVolume());
		
		tv.setChannel(2);
		tv.channelDown();
		tv.channelDown();
		System.out.println(tv.getChannel());
				
		tv.volumeUp();
		tv.volumeUp();
		tv.setChannel(3);
		System.out.println(tv.getVolume());
		System.out.println(tv.display());
		
		tv.channelUp();
		tv.channelUp();
		System.out.println(tv.getChannel());
		tv.channelDown();
		System.out.println(tv.getChannel());
		
	}
}