package com.mercury.Foot.Feet.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.mercury.Foot.Feet.beans.Email;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.io.File;

import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeUtility;



@Service
public class MailService {

	
	@Autowired
    private JavaMailSender javaMailSender;
	
	@Autowired
	private UserService userService;

    @Value("${spring.mail.username}")
    private String mailUserName;
    
    
    public void sendMail(Email email) {
        long start = System.currentTimeMillis();
        try {
            MimeMessage mimeMessage = javaMailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true, "UTF-8");
            helper.setFrom(mailUserName);
            helper.setTo(email.getToAddress().toArray(new String[email.getToAddress().size()]));
            helper.setSubject(email.getSubject());
            helper.setText(email.getContent(), true);

            javaMailSender.send(mimeMessage);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
