//
//  HistoryViewController.swift
//  WorkoutTracker
//
//  Created by Ben Alexander on 1/20/20.
//  Copyright © 2020 Ben Alexander. All rights reserved.
//

import UIKit

class HistoryViewController: UIViewController, UITableViewDelegate, UITableViewDataSource{
    
    var list: [String] = []
    var workouts = Variables.workouts
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        let len: Int = workouts!.count - 1
        for i in 0...len {
            let time = workouts![i]["time"].string!
            
            list.append(workouts![i]["date"].string! + " " + time)
        }
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return(list.count)
    }

    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "HistoryTableViewCell", for: indexPath) as? HistoryTableViewCell
        cell!.dateLabel.text = list[list.count - indexPath.row - 1]
        
        //let cell = UITableViewCell(style: UITableViewCell.CellStyle.default, reuseIdentifier: "HistoryTableViewCell")
        //cell.textLabel?.text = list[indexPath.row]
        
        return cell!
    }
    
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return CGFloat(85)
    }
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        let clickedOn: Int = list.count - indexPath.row - 1
        
        let wID = workouts![clickedOn]["w_id"]
        getExercises(wID: wID.intValue)
    }
    
    func getExercises(wID: Int) -> Void {
        
        let url = URL(string: "https://workoutapp-262402.appspot.com/exercises/" + String(wID))!
        let task = URLSession.shared.dataTask(with: url) {(data, response, error) in
            guard let data = data else {return}
            
            let result = JSON(data)
            Variables.exercises = result
            
            self.getSets(wID: wID)
        }
        task.resume()
    }
    
    func getSets(wID: Int) -> Void {
        
        let url = URL(string: "https://workoutapp-262402.appspot.com/setsByWID/" + String(wID))!
        let task = URLSession.shared.dataTask(with: url) {(data, response, error) in
            guard let data = data else {return}
            
            let result = JSON(data)
            Variables.sets = result
            self.goToDetails()
        }
        task.resume()
    }
    
    func goToDetails() -> Void {
        DispatchQueue.main.async {
            let vc = self.storyboard!.instantiateViewController(identifier: "detailsScreen")
            self.present(vc, animated: true, completion: nil)
        }
    }
}

