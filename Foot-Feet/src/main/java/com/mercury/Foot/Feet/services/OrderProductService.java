package com.mercury.Foot.Feet.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mercury.Foot.Feet.beans.OrderProduct;
import com.mercury.Foot.Feet.daos.OrderProductDao;

@Service
public class OrderProductService {

	
	@Autowired
	private OrderProductDao opd;
	
	public void save(OrderProduct orderProduct) {
		opd.save(orderProduct);
	}
	
	public List<OrderProduct> getByUserId(int id){
		return opd.findByUserId(id);
	}
	
	public void deleteById(int id) {
		opd.deleteById(id);
	}
	

}
