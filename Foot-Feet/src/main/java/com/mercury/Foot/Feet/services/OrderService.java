package com.mercury.Foot.Feet.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mercury.Foot.Feet.beans.Order;
import com.mercury.Foot.Feet.daos.OrderDao;

@Service
public class OrderService {
	@Autowired
	private OrderDao od;
	
	public void save(Order order) {
		od.save(order);
	}
	
	public List<Order> getByUserId(int id) {
		return od.findByUserId(id);
	}
	
	public List<Order> getAll(){
		return od.findAll();
	}
	
}
