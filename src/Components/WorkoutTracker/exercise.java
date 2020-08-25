package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="exercise")
public class exercise {
	
	@Id
	@Column(name="e_id")
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int e_id;

	@Column(name="name")
	private String name;
	
	@Column(name="w_id")
	private int wID;
	
	public int getE_id() {
		return e_id;
	}

	public void setE_id(int e_id) {
		this.e_id = e_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getW_id() {
		return wID;
	}

	public void setW_id(int w_id) {
		this.wID = w_id;
	}
	
	@Override
	public String toString() {
		return "exercise [e_id=" + e_id + ", name=" + name + ", w_id=" + wID + "]";
	}
}
