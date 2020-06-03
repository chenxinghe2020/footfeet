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
import com.mercury.Foot.Feet.beans.Shipping;
import com.mercury.Foot.Feet.services.ShippingService;

@RestController
@RequestMapping("/shippings")
public class ShippingController {
	@Autowired
	private ShippingService ss;
	
	@PostMapping
	public void save(@RequestBody Shipping shipping) {
		ss.save(shipping);
	}
	
	@GetMapping
	public List<Shipping> getAll(){
		return ss.getAll();
	}
}
