import React from 'react';
import { Typography, Row, Col } from 'antd';
import './WorkoutTracker.css';
import Demo from './demo.mov';
import ProjectFiles from './workoutTrackerFiles.zip';
import ERDiagram from './ERdiagram.png';
import WorkoutControllerImage from './workoutController.png';
import WorkoutControllerFile from './WorkoutController.java';
import WorkoutImage from './workoutModel.png';
import WorkoutFile from './workout.java';
import ExerciseControllerImage from './exerciseController.png';
import ExerciseControllerFile from './ExerciseController.java';
import ExerciseImage from './exerciseModel.png';
import ExerciseFile from './exercise.java';
import DDLImage from './DDL.png';
import Storyboard from './navigation.png';
import ExerciseVCImage1 from './ExerciseViewControllerSS1.png';
import ExerciseVCImage2 from './ExerciseViewControllerSS2.png';
import ExerciseVCFile from './ExerciseViewController.swift';
import HistoryVCImage from './HistoryViewController.png';
import HistoryVCFile from './HistoryViewController.swift';
import DetailsVCImage from './DetailsViewController.png';
import DetailsVCFile from './DetailsViewController.swift';

const Title = Typography.Title;

export default class WorkoutTracker extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>Mobile App to Web API - Workout Tracker</Title>
                        <Title level={4}>Technologies: Swift, Xcode, Java Springboot, MySQL, Google Cloud Platform</Title>
                        This app allows someone to track their weight lifting statistics during a workout and
                        then saves them to the cloud. The user can then look at a history of their workouts
                        and view the details of each one.
                        <br></br><br></br>
                        My previous work with iOS and the Google Cloud Platform (GCP) made me take an interest in
                        connecting a mobile app to a GCP API. I first started the server instance on GCP's App Engine
                        then deployed software to it with Java Springboot. I then connected the App Engine to
                        a GCP SQL instance to store user data. Next, I made an entity relation diagram and configured
                        the SQL instance with the SQL file I made from the diagram using MySQL. Lastly, I made
                        all the frontend components in Xcode that communicated with the server using HTTP requests.
                        <br></br>
                        <a href={ProjectFiles} download="Project_Files.zip">Download project files</a>
                        <br></br><br></br>
                    </Col>
                </Row>

                <Row justify="center">
                    <Col span={18}>
                        <Title level={2}>Demo</Title>
                        <video controls width='50%'>
                            <source src={Demo}></source>
                        </video>

                        <Title level={4}>Entity relation diagram showing database design</Title>
                        <img width='100%' src={ERDiagram} alt=''/>

                        <Title level={4}>WorkoutController.java</Title>
                        <a href={WorkoutControllerFile} download="WorkoutController.java">
                            <img width='100%' src={WorkoutControllerImage} alt=''/>
                        </a>
                        
                        <Title level={4}>Workout.java (the entity model of a workout)</Title>
                        <a href={WorkoutFile} download="Workout.java">
                            <img width='100%' src={WorkoutImage} alt=''/>
                        </a>

                        <Title level={4}>ExerciseController.java</Title>
                        <a href={ExerciseControllerFile} download="ExerciseController.java">
                            <img width='100%' src={ExerciseControllerImage} alt=''/>
                        </a>

                        <Title level={4}>exercise.java</Title>
                        <a href={ExerciseFile} download="exercise.java">
                            <img width='100%' src={ExerciseImage} alt=''/>
                        </a>

                        <Title level={4}>WorkoutTracker.sql</Title>
                        <img width='100%' src={DDLImage} alt=''/>
                        
                        <Title level={4}>Main.storyboard (manages navigation and UI components)</Title>
                    </Col>
                    <Col span={24}>
                        <img width='100%' src={Storyboard} alt=''/>
                    </Col>
                    <Col span={18}>
                        <Title level={4}>ExerciseViewController.swift</Title>
                        <a href={ExerciseVCFile} download="ExerciseViewController.swift">
                            <img width='100%' src={ExerciseVCImage1} alt=''/>
                            <img width='100%' src={ExerciseVCImage2} alt=''/>
                        </a>

                        <Title level={4}>HistoryViewController.swift</Title>
                        <a href={HistoryVCFile} download="HistoryViewController.swift">
                            <img width='100%' src={HistoryVCImage} alt=''/>
                        </a>

                        <Title level={4}>DetailsViewController.swift</Title>
                        <a href={DetailsVCFile} download="DetailsViewController.swift">
                            <img width='100%' src={DetailsVCImage} alt=''/>
                        </a>
                    </Col>
                </Row>
            </>
        );
    }
}