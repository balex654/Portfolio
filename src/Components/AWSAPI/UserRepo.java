package com.aws.codestar.projecttemplates.dao;

import org.springframework.data.repository.CrudRepository;

import com.aws.codestar.projecttemplates.model.User;

public interface UserRepo extends CrudRepository<User, Integer>{
	
}
