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
	private String userId;
	@Column
	private String title;
	@Column
	private String description;
	@Column
	private int rate;
	public Review() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Review(int id, String userId, String title, String description, int rate) {
		super();
		this.id = id;
		this.userId = userId;
		this.title = title;
		this.description = description;
		this.rate = rate;
	}
	@Override
	public String toString() {
		return "Review [id=" + id + ", userId=" + userId + ", title=" + title + ", description=" + description
				+ ", rate=" + rate + "]";
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
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
