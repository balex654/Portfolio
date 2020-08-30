import React from 'react';
import { Typography, Row, Col } from 'antd';
import Exercise from './Exercise.png';
import ExerciseSwift from './Exercise.swift';
import ExerciseModel from './ExerciseModel.png';
import ExerciseVC from './ExerciseViewController.swift';
import ExerciseViewSS1 from './ExerciseViewSS1.png';
import ExerciseViewSS2 from './ExerciseViewSS2.png';
import HistoryDetails from './HistoryDetails.png';
import HistoryPage from './HistoryPage.png';
import HistoryView from './HistoryView.png';
import HistoryViewController from './HistoryViewController.swift';
import Home from './Home.png';
import Storyboard from './Storyboard.png';
import Workout from './Workout.swift';
import WorkoutModel from './WorkoutModel.png';
import WorkoutView from './WorkoutView.png';
import WorkoutViewController from './WorkoutViewController.swift';
import ProjectFiles from './workoutApp.zip';


const Title = Typography.Title;

export default class WorkoutApp extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>iOS Development - Workout App</Title>
                        <Title level={4}>Technology: Swift, Xcode</Title>
                        I had previously used android for a class project (ComS 309) so I leveraged that experienced
                        to make an iOS app. For this project, I made a workout app that someone can use to
                        start a workout, track exercises, and later view the workouts in a history page.
                        <br></br>
                        <a href={ProjectFiles} download="Project_Files.zip">Download project files</a>
                        <br></br><br></br>
                    </Col>
                </Row>

                <Row justify="center">
                    <Col span={18}>
                        <img width='50%' src={Home} alt=''/>
                        <img width='50%' src={Exercise} alt=''/>
                        <br></br>
                        <img width='50%' src={HistoryPage} alt=''/>
                        <img width='50%' src={HistoryDetails} alt=''/>

                        <Title level={4}>Storyboard showing the screen flow</Title>
                        <img width='100%' src={Storyboard} alt=''/>

                        <Title level={4}>ExerciseViewController.swift (click on image to download file):</Title>
                        <a href={ExerciseVC} download="ExerciseViewController.swift">
                            <img width='100%' src={ExerciseViewSS1} alt=''/>
                            <img width='100%' src={ExerciseViewSS2} alt=''/>
                        </a>

                        <Title level={4}>HistoryViewController.swift (click on image to download file):</Title>
                        <a href={HistoryViewController} download="HistoryViewController.swift">
                            <img width='100%' src={HistoryView} alt=''/>
                        </a>

                        <Title level={4}>WorkoutViewController.swift (click on image to download file):</Title>
                        <a href={WorkoutViewController} download="WorkoutViewController.swift">
                            <img width='100%' src={WorkoutView} alt=''/>
                        </a>

                        <Title level={4}>Exercise.swift (click on image to download file):</Title>
                        <a href={ExerciseSwift} download="Exercise.swift">
                            <img width='100%' src={ExerciseModel} alt=''/>
                        </a>
                        
                        <Title level={4}>Workout.swift (click on image to download file):</Title>
                        <a href={Workout} download="Workout.swift">
                            <img width='100%' src={WorkoutModel} alt=''/>
                        </a>
                    </Col>
                </Row>
            </>
        );
    }
}