package com.mercury.Foot.Feet.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mercury.Foot.Feet.beans.Feedback;
import com.mercury.Foot.Feet.daos.FeedbackDao;

@Service
public class FeedbackService {
	
	@Autowired
	private FeedbackDao fd;
	
	public void save(Feedback feedback) {
		fd.save(feedback);
	}
	
	public Feedback getById(int id) {
		return fd.findById(id).get();
	}
	
	public List<Feedback> getAll(){
		return fd.findAll();
	}
}
