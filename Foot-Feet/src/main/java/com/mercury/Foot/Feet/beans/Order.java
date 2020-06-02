package com.mercury.Foot.Feet.beans;



import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;



@Entity
@Table(name="\"order\"")
public class Order {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column
	private int userId;
	@Column
	private Date date;
	@Column
	private double total;
	
	@OneToMany(fetch=FetchType.EAGER,cascade=CascadeType.ALL,mappedBy="order")
	private List<OrderProduct> purchases;

	public Order() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Order(int id, int userId, Date date, double total, List<OrderProduct> purchases) {
		super();
		this.id = id;
		this.userId = userId;
		this.date = date;
		this.total = total;
		this.purchases = purchases;
	}

	@Override
	public String toString() {
		return "Order [id=" + id + ", userId=" + userId + ", date=" + date + ", total=" + total + ", purchases="
				+ purchases + "]";
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

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public double getTotal() {
		return total;
	}

	public void setTotal(double total) {
		this.total = total;
	}

	public List<OrderProduct> getPurchases() {
		return purchases;
	}

	public void setPurchases(List<OrderProduct> purchases) {
		this.purchases = purchases;
	}
	
	
	
	
	


	
	
	
}
