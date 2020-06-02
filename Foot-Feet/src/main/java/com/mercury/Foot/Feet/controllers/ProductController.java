package com.mercury.Foot.Feet.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mercury.Foot.Feet.beans.Product;
import com.mercury.Foot.Feet.services.ProductService;

@RestController
@RequestMapping("/products")
public class ProductController {

	
	@Autowired
	private ProductService ps;
	
	@PostMapping
	public void save(@RequestBody Product product) {
		ps.save(product);
	}
	
	@GetMapping("/{id}")
	public Product getProductById(@PathVariable int id) {
		return ps.getByProductId(id);
	}
	
	

	
	@GetMapping
	public List<Product> getAll(){
		return ps.getAll();
	}
}
