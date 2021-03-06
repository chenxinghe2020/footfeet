package com.mercury.Foot.Feet.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mercury.Foot.Feet.beans.Review;
import com.mercury.Foot.Feet.services.ReviewService;

@RestController
@RequestMapping("/reviews")
public class ReviewController {

	
	@Autowired
	private ReviewService reviewService;
	
	@PostMapping
	public void save(@RequestBody Review review){
		reviewService.save(review);
	}
	
	@GetMapping("/{id}")
	public List<Review> getByProductId(@PathVariable int id){
		return reviewService.getByProductId(id);
	}
	
	@GetMapping
	public List<Review> getAll(){
		return reviewService.getAll();
	}
}
