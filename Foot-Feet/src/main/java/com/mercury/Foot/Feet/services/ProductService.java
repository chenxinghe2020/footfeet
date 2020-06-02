package com.mercury.Foot.Feet.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mercury.Foot.Feet.beans.Product;
import com.mercury.Foot.Feet.daos.ProductDao;

@Service
public class ProductService {

	@Autowired
	private ProductDao pd;
	
	public void save(Product product) {
		pd.save(product);
	}
	
	public Product getByProductId(int id) {
		return pd.findById(id).get();
	}
	
	public List<Product> getByName(String name){
		return pd.findByName(name);
	}
	
	public List<Product> getAll(){
		return pd.findAll();
	}
}
