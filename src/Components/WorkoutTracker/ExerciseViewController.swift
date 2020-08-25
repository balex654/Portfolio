//
//  ExerciseViewController.swift
//  WorkoutTracker
//
//  Created by Ben Alexander on 1/11/20.
//  Copyright © 2020 Ben Alexander. All rights reserved.
//

import UIKit

class ExerciseViewController: UIViewController {

    @IBOutlet weak var exerciseName: UITextField!
    @IBOutlet weak var workoutName: UITextField!
    @IBOutlet weak var reps: UITextField!
    @IBOutlet weak var weight: UITextField!
    
    var setOrderNum: Int = 0
    var exerciseNum: Int = 0
    
    var wID: String = ""
    
    var sets: [ExerciseSet] = [] as! [ExerciseSet]
    var exercises: [Exercise] = [] as! [Exercise]
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }
    
    @IBAction func enterSet(_ sender: Any) {
        setOrderNum += 1
        let set = ExerciseSet(reps: reps.text!, weight: weight.text!, orderNum: setOrderNum, exerciseID: -1, exerciseOrder: exerciseNum)
        sets.append(set)
        reps.text = ""
        weight.text = ""
    }
    
    @IBAction func nextExercise(_ sender: Any) {
        exerciseNum += 1
        setOrderNum = 0
        let exercise = Exercise(name: exerciseName.text!, eID: -1)
        exercises.append(exercise)
        exerciseName.text = ""
    }
    
    @IBAction func endWorkout(_ sender: Any) {
        let formatter : DateFormatter = DateFormatter()
        formatter.dateFormat = "yyyy/M/d"
        let date : String = formatter.string(from:   NSDate.init(timeIntervalSinceNow: 0) as Date)
        
        let calDate = Date()
        let calendar = Calendar.current
        let hour = calendar.component(.hour, from: calDate)
        let minute = calendar.component(.minute, from: calDate)
        let second = calendar.component(.second, from: calDate)
        let time = "\(hour):\(minute):\(second)"
        
        let url = URL(string: "https://workoutapp-262402.appspot.com/addWorkout?user_id=" + String(Variables.userID)
            + "&date=" + date + "&time=" + time + "&name=" + workoutName.text!)!
        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        
        let task = URLSession.shared.dataTask(with: request) {(data, response, error) in
            guard let data = data else {return}
            
            let result = String(data: data, encoding: .utf8)
            let items = result?.components(separatedBy: ", ")
            let wIDstr = String(items?[4] ?? "")
            self.wID = wIDstr[5..<(wIDstr.count - 1)]
            
            self.postExercises()
        }
        task.resume()
    }
    
    func postExercises() -> Void {
        var count: Int = 0
        for exercise in exercises{
            let url = URL(string: "https://workoutapp-262402.appspot.com/addExercise?name=" + exercise.showName()
                + "&w_id=" + self.wID)!
            var request = URLRequest(url: url)
            request.httpMethod = "POST"
            
            let task = URLSession.shared.dataTask(with: request) {(data, response, error) in
                guard let data = data else {return}
                
                print(String(data: data, encoding: .utf8) ?? "")
                let result = String(data: data, encoding: .utf8)
                let items = result?.components(separatedBy: ", ")
                let eIDstr = String(items?[0] ?? "")
                let eIDint = Int(eIDstr[28..<(eIDstr.count)])
                exercise.setEID(eID: eIDint ?? -1)
                
                self.postSets(currentEnum: count, currentExercise: exercise) // Only the sets associated with the exercise just posted
                count += 1
            }
            task.resume()
        }
    }
    
    func postSets(currentEnum: Int, currentExercise: Exercise) -> Void {
        //For loop sets the eID in the sets based off the exerciseOrder when entered then posts the set
        for s in sets{
            if currentEnum == s.showExerciseOrder() {
                s.setExerciseID(exerciseID: currentExercise.showEID())
                
                //Posts the set
                var urlString = "https://workoutapp-262402.appspot.com/addSet?reps="
                urlString += s.showReps()
                urlString += "&weight=" + s.showWeight()
                urlString += "&orderNum=" + String(s.showOrderNum())
                urlString += "&e_id=" + String(s.showExerciseID())
                urlString += "&w_id=" + self.wID
                
                let url = URL(string: urlString)!
                var request = URLRequest(url: url)
                request.httpMethod = "POST"
                
                let task = URLSession.shared.dataTask(with: request) {(data, response, error) in
                    print(String(data: data!, encoding: .utf8) ?? "")
                }
                task.resume()
            }
        }
    }
    
}

//For substring ability
extension String {
    subscript(_ range: CountableRange<Int>) -> String {
        let start = index(startIndex, offsetBy: max(0, range.lowerBound))
        let end = index(startIndex, offsetBy: min(self.count, range.upperBound))
        return String(self[start..<end])
    }

    subscript(_ range: CountablePartialRangeFrom<Int>) -> String {
        let start = index(startIndex, offsetBy: max(0, range.lowerBound))
         return String(self[start...])
    }
}
