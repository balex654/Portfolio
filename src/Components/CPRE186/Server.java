package fileTransfer;

import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;
import java.util.Scanner;
import javax.swing.*;
import java.io.BufferedReader;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.net.Socket;

public class Server {

	public static void playFile(String filename) throws Exception {
		DatagramSocket serverSocket = new DatagramSocket(15002);
		byte[] sendData = filename.getBytes();
		InetAddress groupAddress = InetAddress.getByName("255.255.255.255");
		//InetAddress groupAddress = InetAddress.getByName("10.26.42.255");
		// InetAddress groupAddress = InetAddress.getByName("10.36.179.191");
		DatagramPacket sendPacket = new DatagramPacket(sendData, sendData.length, groupAddress, 15001);
		serverSocket.send(sendPacket);
		serverSocket.close();
	}

	public static void uploadFile(InetAddress[] addresses, File file) throws Exception {
		// read file into byte array
		int fileLength = (int) file.length();
		System.out.println("FileName: " + file.getName() + "  Length: " + fileLength);
		byte[] fileBuffer = new byte[fileLength];
		DataInputStream inFromFile = new DataInputStream(new FileInputStream(file));
		inFromFile.read(fileBuffer);
		inFromFile.close();
		for (InetAddress i : addresses) {
			boolean exception = true;
			do {
				Socket clientSocket = null;
				DataOutputStream outToServer = null;
				BufferedReader inFromServer = null;
				try {
					// create tcp/ip socket
					clientSocket = new Socket(i, 15001);
					// create input and output streams from socket
					outToServer = new DataOutputStream(clientSocket.getOutputStream());
					inFromServer = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
					// send file name and wait for response
					outToServer.writeBytes(file.getName() + "\n");
					System.out.println("Server recieved: " + inFromServer.readLine());
					// send file length and wait for response
					outToServer.writeBytes(fileLength + "\n");
					System.out.println("Server recieved: " + inFromServer.readLine());
					// send file byte by byte
					outToServer.write(fileBuffer);
					inFromServer.readLine();
					exception = false;
				} catch (java.net.ConnectException e) {
					// e.printStackTrace();
					// System.exit(0);
					exception = true;
				} finally {
					if (outToServer != null)
						outToServer.close();
					if (inFromServer != null)
						inFromServer.close();
					if (clientSocket != null)
						clientSocket.close();
				}
			} while (exception);
		}
	}

}