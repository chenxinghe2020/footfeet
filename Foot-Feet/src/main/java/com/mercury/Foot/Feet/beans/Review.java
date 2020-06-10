package com.mercury.Foot.Feet.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="review")
public class Review {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column
	private int userId;
	@Column
	private int productId;
	@Column
	private String title;
	@Column(length=3000)
	private String description;
	@Column
	private int rate;
	public Review() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Review(int id, int userId, int productId, String title, String description, int rate) {
		super();
		this.id = id;
		this.userId = userId;
		this.productId = productId;
		this.title = title;
		this.description = description;
		this.rate = rate;
	}
	@Override
	public String toString() {
		return "Review [id=" + id + ", userId=" + userId + ", productId=" + productId + ", title=" + title
				+ ", description=" + description + ", rate=" + rate + "]";
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
	public int getProductId() {
		return productId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getRate() {
		return rate;
	}
	public void setRate(int rate) {
		this.rate = rate;
	}
	
	
	
	
	
	
}
