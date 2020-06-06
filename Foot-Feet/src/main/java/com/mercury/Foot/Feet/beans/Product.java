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
@Table(name="product")
public class Product{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column
	private String name;
	@Column
	private double price;
	@Column
	private String description;
	@Column
	private String brand;
	@Column
	private int size;
	@Column
	private String color;
	@Column
	private int stock;
	@Column
	private Date releaseDate;
	@Column
	private String tags;
	@Column
	private int soldNumber;
	@Column
	private String image1;
	@Column
	private String image2;
	@Column
	private String image3;
	@Column
	private String image4;
	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Product(int id, String name, double price, String description, String brand, int size, String color,
			int stock, Date releaseDate, String tags, int soldNumber, String image1, String image2, String image3,
			String image4) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
		this.description = description;
		this.brand = brand;
		this.size = size;
		this.color = color;
		this.stock = stock;
		this.releaseDate = releaseDate;
		this.tags = tags;
		this.soldNumber = soldNumber;
		this.image1 = image1;
		this.image2 = image2;
		this.image3 = image3;
		this.image4 = image4;
	}
	@Override
	public String toString() {
		return "Product [id=" + id + ", name=" + name + ", price=" + price + ", description=" + description + ", brand="
				+ brand + ", size=" + size + ", color=" + color + ", stock=" + stock + ", releaseDate=" + releaseDate
				+ ", tags=" + tags + ", soldNumber=" + soldNumber + ", image1=" + image1 + ", image2=" + image2
				+ ", image3=" + image3 + ", image4=" + image4 + "]";
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public int getSize() {
		return size;
	}
	public void setSize(int size) {
		this.size = size;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}
	public int getStock() {
		return stock;
	}
	public void setStock(int stock) {
		this.stock = stock;
	}
	public Date getReleaseDate() {
		return releaseDate;
	}
	public void setReleaseDate(Date releaseDate) {
		this.releaseDate = releaseDate;
	}
	public String getTags() {
		return tags;
	}
	public void setTags(String tags) {
		this.tags = tags;
	}
	public int getSoldNumber() {
		return soldNumber;
	}
	public void setSoldNumber(int soldNumber) {
		this.soldNumber = soldNumber;
	}
	public String getImage1() {
		return image1;
	}
	public void setImage1(String image1) {
		this.image1 = image1;
	}
	public String getImage2() {
		return image2;
	}
	public void setImage2(String image2) {
		this.image2 = image2;
	}
	public String getImage3() {
		return image3;
	}
	public void setImage3(String image3) {
		this.image3 = image3;
	}
	public String getImage4() {
		return image4;
	}
	public void setImage4(String image4) {
		this.image4 = image4;
	}
	
	

	


	

	
}
