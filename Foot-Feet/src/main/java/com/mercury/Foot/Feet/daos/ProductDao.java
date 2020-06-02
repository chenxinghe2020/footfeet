package com.mercury.Foot.Feet.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mercury.Foot.Feet.beans.Product;

public interface ProductDao extends JpaRepository<Product, Integer> {
	public List<Product> findByName(String name);
}
