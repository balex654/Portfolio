//
//  WorkoutViewController.swift
//  workoutApp
//
//  Created by Ben Alexander on 1/20/19.
//  Copyright © 2019 Ben Alexander. All rights reserved.
//

import UIKit

class WorkoutViewController: UIViewController, UITableViewDelegate, UITableViewDataSource {
    
    @IBOutlet weak var workoutTableView: UITableView!
    
    private var workout: Workout = Variables.workouts[Variables.clickedOn]
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        // Do any additional setup after loading the view.
    }
    
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return Variables.workouts[Variables.clickedOn].showExercises().count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        //let cell = UITableViewCell(style:  UITableViewCell.CellStyle.default, reuseIdentifier: "cell")
        
        let cell = tableView.dequeueReusableCell(withIdentifier: "cell", for: indexPath) as? WorkoutTableViewCell
        cell!.exerciseName.text = Variables.workouts[Variables.clickedOn].showExercises()[indexPath.row].showName()
        
        let reps = "Reps: "
        let weight = "Weight: "
        cell!.reps1.text = reps + String(Variables.workouts[Variables.clickedOn].showExercises()[indexPath.row].showReps()[0])
        cell!.reps2.text = reps + String(Variables.workouts[Variables.clickedOn].showExercises()[indexPath.row].showReps()[1])
        cell!.reps3.text = reps + String(Variables.workouts[Variables.clickedOn].showExercises()[indexPath.row].showReps()[2])
        cell!.reps4.text = reps + String(Variables.workouts[Variables.clickedOn].showExercises()[indexPath.row].showReps()[3])
        
        cell!.weight1.text = weight + String(Variables.workouts[Variables.clickedOn].showExercises()[indexPath.row].showWeight()[0])
        cell!.weight2.text = weight + String(Variables.workouts[Variables.clickedOn].showExercises()[indexPath.row].showWeight()[1])
        cell!.weight3.text = weight + String(Variables.workouts[Variables.clickedOn].showExercises()[indexPath.row].showWeight()[2])
        cell!.weight4.text = weight + String(Variables.workouts[Variables.clickedOn].showExercises()[indexPath.row].showWeight()[3])
        
        return cell!
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
