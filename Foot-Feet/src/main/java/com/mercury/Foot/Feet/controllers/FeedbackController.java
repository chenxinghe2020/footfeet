package com.mercury.Foot.Feet.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mercury.Foot.Feet.beans.Feedback;
import com.mercury.Foot.Feet.services.FeedbackService;

@RestController
@RequestMapping("/feedbacks")
public class FeedbackController {
	
	@Autowired
	private FeedbackService fbs;
	
	@PostMapping
	public void save(@RequestBody Feedback feedback) {
		fbs.save(feedback);
	}
	
	@GetMapping
	public List<Feedback> getAll(){
		return fbs.getAll();
	}
}
