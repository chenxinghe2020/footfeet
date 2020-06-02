package com.mercury.Foot.Feet.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mercury.Foot.Feet.beans.Category;
import com.mercury.Foot.Feet.daos.CategoryDao;

@Service
public class CategoryService {
	
	@Autowired
	private CategoryDao cd;
	
	
	public void save(Category category) {
		cd.save(category);
	}
	
	public List<Category> getAll(){
		return cd.findAll();
	}
}
