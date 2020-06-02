package com.mercury.Foot.Feet.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mercury.Foot.Feet.beans.OrderProduct;

public interface OrderProductDao extends JpaRepository<OrderProduct, Integer> {
	public List<OrderProduct> findByUserId(int id);
}
