package com.mercury.Foot.Feet.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Shipping")
public class Shipping {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column
	private String type;
	@Column
	private int price;
	public Shipping() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Shipping(int id, String type, int price) {
		super();
		this.id = id;
		this.type = type;
		this.price = price;
	}
	@Override
	public String toString() {
		return "Shipping [id=" + id + ", type=" + type + ", price=" + price + "]";
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	
	
}
