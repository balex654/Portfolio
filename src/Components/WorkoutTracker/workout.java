package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="workout")
public class workout {
	
	@Column(name="user_id")
	private int userID;
	
	@Column(name="date")
	private String date;
	
	@Column(name="time")
	private String time;
	
	@Column(name="name")
	private String name;
	
	@Id
	@Column(name="w_id", updatable=false, nullable=false)
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int w_id;

	public int getUser_id() {
		return userID;
	}
	public void setUser_id(int user_id) {
		this.userID = user_id;
	}

	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}

	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

	public int getW_id() {
		return w_id;
	}
	public void setW_id(int w_id) {
		this.w_id = w_id;
	}
	
	@Override
	public String toString() {
		return "workout [user_id=" + userID + ", date=" + date + ", time=" + time + ", name=" + name + ", w_id=" + w_id
				+ "]";
	}
}
