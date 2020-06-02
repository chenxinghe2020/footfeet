package com.mercury.Foot.Feet.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import com.mercury.Foot.Feet.beans.User;
import com.mercury.Foot.Feet.beans.UserInfo;
import com.mercury.Foot.Feet.daos.UserDao;
import com.mercury.Foot.Feet.daos.UserInfoDao;
import com.mercury.Foot.Feet.http.Response;
import com.mercury.Foot.Feet.http.UserInfoResponse;


@Service
public class UserInfoService {

	@Autowired
	UserDao userDao;
	
	@Autowired
	UserInfoDao userInfoDao;
	
	public UserInfo getByUserId(int id) {
		return userInfoDao.findByUserId(id);
	}
	
	public Response addUserInfo(UserInfo userInfo, Authentication authentication) {
		User user = userDao.findByUsername(authentication.getName());
		userInfo.setUser(user);
		return new UserInfoResponse(true, userInfoDao.save(userInfo));
	}
	
	public Response updateUserInfo(UserInfo userInfo) {
		UserInfo ud = userInfoDao.findById(userInfo.getId()).get();
		System.out.println(ud);
		userInfo.setUser(ud.getUser());
		ud = userInfo;
		userInfoDao.save(ud);
		return new Response(true);
	}
}
