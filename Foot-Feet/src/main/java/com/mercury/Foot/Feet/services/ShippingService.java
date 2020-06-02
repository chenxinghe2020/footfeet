package com.mercury.Foot.Feet.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mercury.Foot.Feet.beans.Shipping;
import com.mercury.Foot.Feet.daos.ShippingDao;

@Service
public class ShippingService {
	@Autowired
	private ShippingDao sd;
	
	public void save(Shipping shipping) {
		sd.save(shipping);
	}
	
	public List<Shipping> getAll(){
		return sd.findAll();
	}
	
	public Shipping getByShippingId(int id) {
		return sd.findById(id).get();
	}
}
