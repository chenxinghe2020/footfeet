package com.mercury.Foot.Feet.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mercury.Foot.Feet.beans.User;

public interface UserDao extends JpaRepository<User,Integer> {
	public User findByUsername(String name);
}
