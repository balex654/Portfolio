package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.ExerciseRepo;
import com.example.demo.model.exercise;

@RestController
public class ExerciseController {
	
	@Autowired
	ExerciseRepo rep;
	
	@RequestMapping(method = RequestMethod.POST, path = "/addExercise")
	public String saveExercise(exercise e) {
		rep.save(e);
		return "New Exercise " + e.toString();
	}
	
	
	@RequestMapping(method = RequestMethod.GET, path = "/exercises/{w_id}")
	public List<exercise> findExerciseBywID(@PathVariable("w_id") int id){
		List<exercise> results = rep.findAllBywID(id);
		return results;
	}
}
