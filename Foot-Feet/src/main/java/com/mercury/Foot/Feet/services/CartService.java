package com.mercury.Foot.Feet.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mercury.Foot.Feet.beans.Cart;
import com.mercury.Foot.Feet.daos.CartDao;

@Service
public class CartService {

	
	@Autowired
	private CartDao cartDao;
	
	public void save(Cart cart) {
		cartDao.save(cart);
	}
	
	
	public List<Cart> getByUserId(int id){
		return cartDao.findByUserId(id);
	}
	
	public void deleteById(int id) {
		cartDao.deleteById(id);
	}
	
}
