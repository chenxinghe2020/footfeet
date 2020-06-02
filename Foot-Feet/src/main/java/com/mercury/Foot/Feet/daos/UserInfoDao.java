package com.mercury.Foot.Feet.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mercury.Foot.Feet.beans.UserInfo;

public interface UserInfoDao extends JpaRepository<UserInfo, Integer> {
	public UserInfo findByUserId(int id);
}
