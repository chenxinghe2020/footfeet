package com.mercury.Foot.Feet.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mercury.Foot.Feet.beans.Review;
import com.mercury.Foot.Feet.daos.ReviewDao;

@Service
public class ReviewService {

	
	@Autowired
	private ReviewDao rd;
	
	public void save(Review review) {
		rd.save(review);
	}
	
	public List<Review> getByProductId(int id){
		return rd.findByProductId(id);
	}
	
	public Review getById(int id) {
		return rd.findById(id).get();
	}
	
	public List<Review> getAll(){
		return rd.findAll();
	}
}
