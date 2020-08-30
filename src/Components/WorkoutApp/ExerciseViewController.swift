//
//  ExerciseViewController.swift
//  workoutApp
//
//  Created by Ben Alexander on 1/6/19.
//  Copyright © 2019 Ben Alexander. All rights reserved.
//

import UIKit
import os.log
import CoreData

class ExerciseViewController: UIViewController {
    //MARK: Instance Variables
    private var exercises: [Exercise] = []
    
    //MARK: Properties
    @IBOutlet weak var name: UITextField!
    
    @IBOutlet weak var reps0: UITextField!
    @IBOutlet weak var reps1: UITextField!
    @IBOutlet weak var reps2: UITextField!
    @IBOutlet weak var reps3: UITextField!
    
    @IBOutlet weak var weight0: UITextField!
    @IBOutlet weak var weight1: UITextField!
    @IBOutlet weak var weight2: UITextField!
    @IBOutlet weak var weight3: UITextField!
    
    @IBOutlet weak var endWorkout: UIButton!
    @IBOutlet weak var nextExercise: UIButton!
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }
    
    //MARK: Acitons
    @IBAction func nextExeriseButton(_ sender: UIButton) {
        var reps: [Int] = [0,0,0,0]
        var weights: [Int] = [0,0,0,0]
        
        if reps0.text! != "" { reps[0] = Int(reps0.text!)! }
        if reps1.text! != "" { reps[1] = Int(reps1.text!)! }
        if reps2.text! != "" { reps[2] = Int(reps2.text!)! }
        if reps3.text! != "" { reps[3] = Int(reps3.text!)! }
        
        if weight0.text! != "" { weights[0] = Int(weight0.text!)! }
        if weight1.text! != "" { weights[1] = Int(weight1.text!)! }
        if weight2.text! != "" { weights[2] = Int(weight2.text!)! }
        if weight3.text! != "" { weights[3] = Int(weight3.text!)! }
        
        let exercise = Exercise(name: name.text!, reps: reps, weight: weights)
        if exercise != nil {
            exercises.append(exercise!)
            
            name.text = ""
            reps0.text = ""
            reps1.text = ""
            reps2.text = ""
            reps3.text = ""
            weight0.text = ""
            weight1.text = ""
            weight2.text = ""
            weight3.text = ""
            
            os_log("%@", exercise!.showName())
            os_log("%@", exercise!.showReps())
            os_log("%@", exercise!.showWeight())
            
        }
    }
    
    @IBAction func endWorkout(_ sender: UIButton) {
        let formatter : DateFormatter = DateFormatter()
        formatter.dateFormat = "M/d/yyyy"
        let date : String = formatter.string(from:   NSDate.init(timeIntervalSinceNow: 0) as Date)
        
        let workout = Workout(exercises: self.exercises, date: date)
        
        Variables.workouts.append(workout!)
        
        UserDefaults.standard.set(true, forKey: "appUsed")
        //UserDefaults.standard.set(encodedData, forKey: "userWorkouts")
        
        /*
        guard let appDelegate = UIApplication.shared.delegate as? AppDelegate else { return }
        let managedContext = appDelegate.persistentContainer.viewContext
        let userEntity = NSEntityDescription.entity(forEntityName: "workouts", in: managedContext)!
        let newUser = NSManagedObject(entity: userEntity, insertInto: managedContext)
        newUser.setValue(Variables.workouts, forKey: "userWorkouts")
        do { try managedContext.save() }
        catch { print("Failed to save") }
         */
    }
    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}
