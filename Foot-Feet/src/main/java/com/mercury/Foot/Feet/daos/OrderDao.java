package com.mercury.Foot.Feet.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mercury.Foot.Feet.beans.Order;

public interface OrderDao extends JpaRepository<Order, Integer> {
	public List<Order> findByUserId(int id);
	
}
