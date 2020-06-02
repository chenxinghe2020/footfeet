package com.mercury.Foot.Feet.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="category")
public class Category {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column
	private int ProductId;
	@Column
	private String type;
	public Category() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Category(int id, int productId, String type) {
		super();
		this.id = id;
		ProductId = productId;
		this.type = type;
	}
	@Override
	public String toString() {
		return "Category [id=" + id + ", ProductId=" + ProductId + ", type=" + type + "]";
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getProductId() {
		return ProductId;
	}
	public void setProductId(int productId) {
		ProductId = productId;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	
	
}
