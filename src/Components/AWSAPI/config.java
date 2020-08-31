package com.aws.codestar.projecttemplates.config;

import javax.sql.DataSource;

import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.aws.codestar.projecttemplates.model.User;


@Configuration
@ComponentScan({ "com.aws.codestar.projecttemplates.config","com.aws.codestar.projecttemplates.dao" })
@PropertySource("classpath:application.properties")
@EnableTransactionManagement
public class config {
	@Bean(name = "dataSource")
	public DataSource datasource(){
		return DataSourceBuilder.create()
		          .driverClassName("com.mysql.cj.jdbc.Driver")
		          .url("jdbc:mysql://test2.ciagitssmgru.us-east-2.rds.amazonaws.com:3306/test2")
		          .username("balex")
		          .password("e2aewc29")
		          .build(); 
	}
	
}
