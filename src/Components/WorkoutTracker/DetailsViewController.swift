//
//  DetailsViewController.swift
//  WorkoutTracker
//
//  Created by Ben Alexander on 1/23/20.
//  Copyright © 2020 Ben Alexander. All rights reserved.
//

import UIKit

class DetailsViewController: UIViewController, UITableViewDelegate, UITableViewDataSource {

    var list: [String] = []
    
    override func viewDidLoad() {
        super.viewDidLoad()
        let exercises = Variables.exercises
        let sets = Variables.sets
        
        let lenE = exercises!.count - 1
        //Loops through the exercises
        for i in 0...lenE{
            var eStr = exercises![i]["name"].string! + "\n\n"
            let outerEID = exercises![i]["e_id"].intValue
            
            let lenS = sets!.count - 1
            //Loops through the sets and finds those belonging to current exercise
            for j in 0...lenS {
                let currentSet = sets![j]
                // Found relevant exercise
                if currentSet["e_id"].intValue == outerEID {
                    eStr += "Set " + String(currentSet["orderNum"].intValue) + ":\n"
                    eStr += "   Reps: " + String(currentSet["reps"].intValue)
                    eStr += "   Weight: " + String(currentSet["weight"].intValue) + "\n"
                }
            }
            
            list.append(eStr)
        }
        
    }
    

    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return(list.count)
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "DetailsTableViewCell", for: indexPath) as? DetailsTableViewCell
        cell!.testLabel.text = list[list.count - indexPath.row - 1]
        
        tableView.rowHeight = UITableView.automaticDimension
        tableView.estimatedRowHeight = 600
        
        return cell!
    }

}
