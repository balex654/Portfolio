package com.aws.codestar.projecttemplates.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.aws.codestar.projecttemplates.dao.UserRepo;
import com.aws.codestar.projecttemplates.model.User;

@RestController
public class UserController {
	@Autowired
	UserRepo rep;
	
	@RequestMapping(method = RequestMethod.POST, path = "/addUser")
	public String saveOwner(User user) {
		rep.save(user);
		return "New User "+ user.getName() + " Saved";
	}
	
	@RequestMapping(method = RequestMethod.GET, path = "/users")
	public List<User> getUsers() {
		List<User> users = (List<User>) rep.findAll();
		System.out.println(users.size());
		return users;
	}
}
