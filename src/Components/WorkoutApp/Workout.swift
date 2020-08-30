//
//  Workout.swift
//  workoutApp
//
//  Created by Ben Alexander on 1/16/19.
//  Copyright © 2019 Ben Alexander. All rights reserved.
//

import Foundation

class Workout {
    private var exercises: [Exercise] = []
    private var date: String
    
    init?(exercises: [Exercise], date: String){
        self.date = date
        self.exercises = exercises
    }
    
    func showDate() -> String {
        return date
    }
    
    func showExercises() -> [Exercise] {
        return exercises
    }
}
