package com.mercury.Foot.Feet.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mercury.Foot.Feet.beans.Feedback;

public interface FeedbackDao extends JpaRepository<Feedback, Integer> {

}
