package com.mercury.Foot.Feet.beans;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="cart")
public class Cart {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column
	private int userId;
	@Column
	private int qty;
	
	@ManyToOne(fetch=FetchType.EAGER,cascade=CascadeType.DETACH)
	private Product product;

	public Cart() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Cart(int id, int userId, int qty, Product product) {
		super();
		this.id = id;
		this.userId = userId;
		this.qty = qty;
		this.product = product;
	}

	@Override
	public String toString() {
		return "Cart [id=" + id + ", userId=" + userId + ", qty=" + qty + ", product=" + product + "]";
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getQty() {
		return qty;
	}

	public void setQty(int qty) {
		this.qty = qty;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}
	
	
}
