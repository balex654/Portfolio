//
//  HistoryViewController.swift
//  workoutApp
//
//  Created by Ben Alexander on 1/20/19.
//  Copyright © 2019 Ben Alexander. All rights reserved.
//

import UIKit

class HistoryViewController: UIViewController, UITableViewDelegate, UITableViewDataSource  {
    
    @IBOutlet weak var HistoryTableView: UITableView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        //Sample Data
        /*
        let exercise1 = Exercise(name: "bench", reps: [10,10,9,9], weight: [165,165,165,165])
        let exercise2 = Exercise(name: "rows", reps: [9,9,9,9], weight: [120,120,120,120])
        let exercise3 = Exercise(name: "deadlift", reps: [8,8,7,6], weight: [225,225,225,225])
        let exercise4 = Exercise(name: "incline", reps: [10,10,10,10], weight: [80,80,80,80])
        let workout1 = Workout(exercises: [exercise1!], date: "1/19/2019")
        let workout2 = Workout(exercises: [exercise1!], date: "1/20/2019")
        let workout3 = Workout(exercises: [exercise1!, exercise2!, exercise3!, exercise4!], date: "1/21/2019")
        Variables.workouts.append(workout1!)
        Variables.workouts.append(workout2!)
        Variables.workouts.append(workout3!)
        */
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return Variables.workouts.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        //let cell = UITableViewCell(style:  UITableViewCell.CellStyle.default, reuseIdentifier: "cell")
        
        let cell = tableView.dequeueReusableCell(withIdentifier: "cell", for: indexPath) as? HistoryTableViewCell
        cell!.label.text = Variables.workouts[Variables.workouts.count - indexPath.row - 1].showDate()
        return cell!
    }
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        Variables.clickedOn = Variables.workouts.count - indexPath.row - 1
        
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
