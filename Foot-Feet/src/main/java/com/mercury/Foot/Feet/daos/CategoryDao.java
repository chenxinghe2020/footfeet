package com.mercury.Foot.Feet.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mercury.Foot.Feet.beans.Category;

public interface CategoryDao extends JpaRepository<Category, Integer> {

}
