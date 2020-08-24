import React from 'react';
import { Typography, Row, Col } from 'antd';
import CreateAccount from './CreateAccount.mov';
import Login from './Login.MP4';
import CreatePlan from './CreatePlan.mov';
import TrackWorkout from './TrackWorkout.mp4';
import ViewHistory from './ViewHistory.mov';
import FriendRequest from './FriendRequest.mov';
import Leaderboard from './Leaderboard.mov';
import SearchPlans from './SearchPlans.mov';
import ERDiagram from './ERDiagram.png';
import TopStoryboard from './TopStoryboard.png';
import BottomStoryboard from './BottomStoryboard.png';
import './LiftFlow.css';

const Title = Typography.Title;

export default class LiftFlow extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>Lift Flow</Title>
                        <Title level={4}>Technologies: Swift, Xcode, Java Springboot, MySQL, Google Cloud Platform</Title>
                            Lift Flow is an iOS app that allows the user to create an account, make customized workout plans,
                            track their workouts, view graphical data of their performance, share workout plans with other
                            Lift Flow users, and be motivated by competition between their friends with a leaderboard. It's essentially
                            a refined version of both of my previous iOS projects. Before using this app, I used an Excel spreadsheet to enter
                            weight lifting data. The problem was that it wasn't very easy to enter data during a workout or view
                            my trends over time. I also didn't have a way to easily share my workout plans.
                            Lift Flow solves these problems. After beta testing on TestFlight and working with Apple through
                            their review process, Lift Flow is now available on the App Store.  
                            <a href="https://apps.apple.com/us/app/lift-flow/id1524340982" target="_blank" rel="noopener noreferrer"> Click here to view it.</a>
                            <br></br><br></br>
                            Lift Flow is composed of a frontend and backend component. The frontend is, of course, iOS and the
                            backend I wrote with Java Springboot. I deployed the Springboot project to an App Engine server instance
                            on Google Cloud Platform (GCP). The server then communicates with a MySQL database which is also
                            provided by GCP. I also implemented security measures such as user password encryption and server API
                            authentication.
                            <br></br><br></br>
                    </Col>
                </Row>

                <Row justify="end">
                    <Col span={13}>
                        <Title level={2}>Creating an Account</Title>
                        When the user selects the register button, there are many checks that are done before the account is
                        created. Character count of all inputs are checked, the app checks the database for pre existing
                        usernames and emails, and the password needs to meet certain standards like length and character
                        content. Also, internet connection is constantly monitored throughout the app. You may notice that
                        the text entry in the password fields aren't visible, but this is because of the screen capture
                        software. The app itself would show the dots representing the password.
                    </Col>
                    <Col span={8}>
                        <br></br>
                        <video controls className="video">
                            <source src={CreateAccount}></source>
                        </video>
                    </Col>
                </Row>

                <Row justify="end">
                    <Col span={13}>
                        <Title level={2}>Logging In</Title>
                        This demonstrates the forgot password and login function. If the user is already logged in, the next
                        time they open the app they will be automatically logged in and brought to their plans screen. If the
                        User forgets their password, they can enter their account email and get a verification code
                        sent to their inbox to reset their password.
                    </Col>
                    <Col span={8}>
                        <br></br>
                        <video controls className="video">
                            <source src={Login}></source>
                        </video>
                    </Col>
                </Row>

                <Row justify="end">
                    <Col span={13}>
                        <Title level={2}>Creating a Plan</Title>
                        A plan in Lift Flow can have any number of workouts and each workout can have multiple exercises.
                        An example of a plan name could be "Weight Loss" or "Strength Training" and workout could be named
                        "Legs" or "Upper Body". The workouts and exercises within workouts can be deleted and reordered while
                        creating a plan and a plan is completely modifiable after it has been created. The visibility of a plan
                        can also be changed. The user has a choice of making the plan visible to anyone, only their friends or
                        to just the user.
                    </Col>
                    <Col span={8}>
                        <br></br>
                        <video controls className="video">
                            <source src={CreatePlan}></source>
                        </video>
                    </Col>
                </Row>

                <Row justify="end">
                    <Col span={13}>
                        <Title level={2}>Tracking a Plan</Title>
                        A user can select a workout from a plan to track. They can then enter their number of reps and weight
                        for each set of each exercise. After the user ends the workout they're brought to the summary screen
                        which shows the time and volume for the workout. The volume for the workout is the sum of all reps multiplied
                        by weight. After the user finishes their first workout, they will see all of their statistics from their
                        previous workout the next time they track the workout as shown in the demo.
                    </Col>
                    <Col span={8}>
                        <br></br>
                        <video controls className="video">
                            <source src={TrackWorkout}></source>
                        </video>
                    </Col>
                </Row>

                <Row justify="end">
                    <Col span={13}>
                        <Title level={2}>Viewing History</Title>
                        Cumulative statistics can be viewed in the history tab. The first view shows the overall statistic
                        history with the red line showing volume per workout over the past month. The other two graphs on
                        this view shows the average volume per month over the past 6 months and all time. This way, the user
                        can determine if their performance is trending up or down. As the user selects a workout, they see
                        similar graphs but only about the specific workout. From there, the user can select an exercise from
                        a workout and then see volume graphs of the specific exercise. The user can select a point on any graph
                        to view details of the data point.
                    </Col>
                    <Col span={8}>
                        <br></br>
                        <video controls className="video">
                            <source src={ViewHistory}></source>
                        </video>
                    </Col>
                </Row>

                <Row justify="end">
                    <Col span={13}>
                        <Title level={2}>Friend Requests</Title>
                        In this demo, I start with being logged in as the new user and then searched for user "balex654" and
                        sent the request. I logged in as "balex654" and accepted the request. Lastly, I logged back into
                        the new user account to show that the request was accepted and that "balex654" was listed as a friend
                        for the new user.
                    </Col>
                    <Col span={8}>
                        <br></br>
                        <video controls className="video">
                            <source src={FriendRequest}></source>
                        </video>
                    </Col>
                </Row>

                <Row justify="end">
                    <Col span={13}>
                        <Title level={2}>Friend Leaderboard and Profile</Title>
                        When the friend tab is selected from the bottom, the user sees a leaderboard with their friends listed
                        on it. The leaderboard ranks the user and the user's friends by the average volume per workout over the
                        past 30 days. This keeps the competition fair regardless of how long a user has been using the app. After
                        selecting friend "balex654", the user is brought to the friend profile screen which shows the friend's
                        total weight lifted and average volume of all workouts. You can also see your friend's plans that they
                        have made or that they follow and you have the ability to add their plans to your set of plans. Theses
                        features are not enabled if the friend has set their account to private.
                    </Col>
                    <Col span={8}>
                        <br></br>
                        <video controls className="video">
                            <source src={Leaderboard}></source>
                        </video>
                    </Col>
                </Row>

                <Row justify="end">
                    <Col span={13}>
                        <Title level={2}>Searching for Plans</Title>
                        With many users making plans, a good feature to have is being able to search through all public plans
                        on the Lift Flow database and having the option to add the plans to the users own set of plans. When the
                        "Find Plans" tab is selected, the user first sees the most popular plans on Lift Flow ranked by number of
                        followers. The user is then able to search for a plan by the plan name, the user who created the plan, or
                        both. Lastly, the user can view the plan and then add the plan by selecting the "Add To My Plans" button
                    </Col>
                    <Col span={8}>
                        <br></br>
                        <video controls className="video">
                            <source src={SearchPlans}></source>
                        </video>
                    </Col>
                </Row>

                <Row justify="start">
                    <Col span={24}>
                        <Title level={2}>Database Design</Title>
                    </Col>
                    <Col span={24}>
                        <img width='100%' src={ERDiagram} className='image' alt=''/>
                        <br></br><br></br>
                    </Col>

                    <Col span={24}>
                        <Title level={2}>UI Storyboard (top and bottom halves)</Title>
                        <img width='100%' src={TopStoryboard} alt=''/>
                        <br></br><br></br>
                        <img width='100%' src={BottomStoryboard} alt=''/>
                    </Col>
                </Row>
            </>
        );
    }
}