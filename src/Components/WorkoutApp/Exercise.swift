//
//  File.swift
//  workoutApp
//
//  Created by Ben Alexander on 1/7/19.
//  Copyright © 2019 Ben Alexander. All rights reserved.
//

import Foundation

class Exercise {
    
    private var name: String
    private var reps: [Int] = []
    private var weight: [Int] = []
    
    init?(name: String, reps: [Int], weight: [Int]){
        if name == ""{
            return nil
        }
        
        self.name = name
        self.reps = reps
        self.weight = weight
    }
    
    func showName() -> String {
        return name
    }
    
    func showReps() -> [Int] {
        return reps
    }
    
    func showWeight() -> [Int] {
        return weight
    }
}
