package com.mercury.Foot.Feet.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mercury.Foot.Feet.beans.Review;

public interface ReviewDao extends JpaRepository<Review, Integer> {

}
