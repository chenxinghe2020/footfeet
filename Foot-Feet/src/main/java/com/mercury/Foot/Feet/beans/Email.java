package com.mercury.Foot.Feet.beans;

import java.io.File;
import java.util.List;


public class Email {

	private List<String> toAddress;
    private String subject;
    private String content;
	public Email() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Email(List<String> toAddress, String subject, String content) {
		super();
		this.toAddress = toAddress;
		this.subject = subject;
		this.content = content;
	}
	@Override
	public String toString() {
		return "Email [toAddress=" + toAddress + ", subject=" + subject + ", content=" + content + "]";
	}
	public List<String> getToAddress() {
		return toAddress;
	}
	public void setToAddress(List<String> toAddress) {
		this.toAddress = toAddress;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
    
    
}
