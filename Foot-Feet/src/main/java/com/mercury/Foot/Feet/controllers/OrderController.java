package com.mercury.Foot.Feet.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mercury.Foot.Feet.beans.Order;
import com.mercury.Foot.Feet.services.OrderService;

@RestController
@RequestMapping("/orders")
public class OrderController {
	
	@Autowired
	private OrderService orderService;
	
	public void save(@RequestBody Order order) {
		orderService.save(order);
	}
	
	@GetMapping("/{id}")
	public List<Order> getOrdersByUserId(@PathVariable int id){
		return orderService.getByUserId(id);
	}
	
}
