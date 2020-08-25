package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.WorkoutRepo;
import com.example.demo.model.workout;

@RestController
public class WorkoutController {
	
	@Autowired
	WorkoutRepo rep;
	
	@RequestMapping(method = RequestMethod.POST, path = "/addWorkout")
	public String saveWorkout(workout w) {
		rep.save(w);
		return "New Workout " + w.toString();
	}
	
	@RequestMapping(method = RequestMethod.GET, path = "/workouts/{user_id}")
	public List<workout> findWorkoutsByUserId(@PathVariable("user_id") int id){
		List<workout> results = rep.findAllByuserID(id);
		return results;
	}
}