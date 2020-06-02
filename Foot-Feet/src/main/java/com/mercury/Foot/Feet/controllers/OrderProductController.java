package com.mercury.Foot.Feet.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mercury.Foot.Feet.beans.OrderProduct;
import com.mercury.Foot.Feet.services.OrderProductService;

@RestController
@RequestMapping("/orderProducts")
public class OrderProductController {

	@Autowired
	private OrderProductService ops;
	
	@PostMapping
	public void save(@RequestBody OrderProduct orderProduct){
		ops.save(orderProduct);
	}
	
	@GetMapping("/{id}")
	public List<OrderProduct> getByUserId(@PathVariable int id){
		return  ops.getByUserId(id);
	}
	
	@PutMapping("/{id}")
	public void deleteById(@PathVariable int id) {
		ops.deleteById(id);
	}
}
