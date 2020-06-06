package com.mercury.Foot.Feet.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mercury.Foot.Feet.beans.Cart;

public interface CartDao extends JpaRepository<Cart, Integer> {
	public List<Cart> findByUserId(int id);
}
