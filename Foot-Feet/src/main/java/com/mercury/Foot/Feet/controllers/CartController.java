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

import com.mercury.Foot.Feet.beans.Cart;
import com.mercury.Foot.Feet.services.CartService;

@RestController
@RequestMapping("/carts")
public class CartController {

	@Autowired
	private CartService cartService;
	
	@PostMapping
	public void save(@RequestBody Cart cart){
		cartService.save(cart);
	}
	
	@PostMapping("/update")
	public void update(@RequestBody Cart cart){
		cartService.update(cart);
	}
	
	
	@GetMapping("/{id}")
	public List<Cart> getByUserId(@PathVariable int id){
		return  cartService.getByUserId(id);
	}
	
	@PutMapping("/{id}")
	public void deleteById(@PathVariable int id) {
		cartService.deleteById(id);
	}
}
