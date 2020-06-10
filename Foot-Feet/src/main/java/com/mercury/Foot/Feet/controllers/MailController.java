package com.mercury.Foot.Feet.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mercury.Foot.Feet.beans.Email;
import com.mercury.Foot.Feet.beans.User;
import com.mercury.Foot.Feet.daos.UserDao;
import com.mercury.Foot.Feet.http.Response;
import com.mercury.Foot.Feet.services.MailService;
import com.mercury.Foot.Feet.services.UserService;

@RestController
@RequestMapping("/sendMail")
public class MailController {

	@Autowired
	private UserDao userDao;
	@Autowired
	private PasswordEncoder passwordEncoder;
	@Autowired
    private MailService mailService;
    
    @Autowired 
    private UserService userService;
    
    @PostMapping
    public Response sendEmail1(@RequestBody List<String> addressList) {
        Email email_email = new Email();
        String newPassword=Integer.toString((int) Math.floor(Math.random()*11559973)) ;
        email_email.setToAddress(addressList);
        List<User> users=userService.getAllByEmail(addressList.get(0));
        for(User user:users) {
        	user.setPassword(passwordEncoder.encode(newPassword));
			userDao.save(user);
        }
        email_email.setSubject("CHANGE PASSWORD");
        email_email.setContent("Your new Password is "+newPassword);
        mailService.sendMail(email_email);

        return new Response(true);
    }
}
