package com.mercury.Foot.Feet.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="feedback")
public class Feedback {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column
	private int userId;
	@Column
	private String title;
	@Column
	private String description;
	public Feedback() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Feedback(int id, int userId, String title, String description) {
		super();
		this.id = id;
		this.userId = userId;
		this.title = title;
		this.description = description;
	}
	@Override
	public String toString() {
		return "Feedback [id=" + id + ", userId=" + userId + ", title=" + title + ", description=" + description + "]";
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
	
	
	
}
