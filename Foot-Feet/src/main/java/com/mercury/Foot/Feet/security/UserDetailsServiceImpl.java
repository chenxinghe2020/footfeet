package com.mercury.Foot.Feet.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.mercury.Foot.Feet.beans.User;
import com.mercury.Foot.Feet.daos.UserDao;



@Service
public class UserDetailsServiceImpl implements UserDetailsService {
	
	@Autowired
	private UserDao userDao;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User u=userDao.findByUsername(username);
		if(u==null) {
			throw new UsernameNotFoundException("User name is not exist!");
		}
		
		
		return u;
	}

}
