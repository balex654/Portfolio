import React from 'react';
import { Typography, Row, Col } from 'antd';
import FrontendFiles from './ShoelaceFrontend.zip';
import BackendFiles from './ShoelaceBackend.zip';
import ShoelacePoster from './ShoelacePoster.png';
import MainActivity1 from './MainActivity1.png';
import MainActivity2 from './MainActivity2.png';
import RedditRest1 from './RedditRest1.png';
import RedditRest2 from './RedditRest2.png';
import RedditRest3 from './RedditRest3.png';
import UserController1 from './UserController1.png';
import UserController2 from './UserController2.png';
import AppLogin from './AppLogin.png';

const Title = Typography.Title;

export default class ComS309 extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>Android Development Project - Computer Science 309</Title>
                        <Title level={4}>Technologies: Java, Android Studio, Springboot, MySQL, Iowa State Server</Title>
                        <li>Created an Android-based social media app called "Shoelace" in a team of four</li>
                        <li>Combined the user's main feed from Facebook, Twitter, and Reddit into a single feed within the app</li>
                        <li>Responsible for creating the frontend UI such as the login, main feed, add post, and settings</li>
                        <li>Communicated with the Facebook, Twitter and Reddit APIs' from the frontend to get the user's feed information</li>
                        <li>Communicated with our school's server instance to store user information such as login, friend, and posting information</li>
                        <li>Implemented the ability to post to any of the three social medias within the app</li>
                        <li>Used Java Springboot to build our app's backend API</li>
                        <li>Successfully used GIT to collaborate and develope with teammates</li>
                        <li>Used web sockets to implement a direct chatting feature</li>
                        <br></br>
                        <a href={FrontendFiles} download="Frontend_File.zip">Download Frontend Files</a>
                        <br></br>
                        <a href={BackendFiles} download="Backend_File.zip">Download Backend Files</a>
                    </Col>
                </Row>

                <Row justify="center">
                    <Col span={24}>
                        <img width='100%' src={ShoelacePoster} alt=''/>

                        <Title level={4}>MainActivity.java: Used for showing the main feed screen of the app</Title>
                        <img width='100%' src={MainActivity1} alt=''/>
                        <img width='100%' src={MainActivity2} alt=''/>

                        <Title level={4}>RedditRestClient.java: This allows a user to login to their Reddit account through Reddit's API using HTTP request methods</Title>
                        <img width='100%' src={RedditRest1} alt=''/>
                        <img width='100%' src={RedditRest2} alt=''/>
                        <img width='100%' src={RedditRest3} alt=''/>

                        <Title level={4}>AppLogin.java: Communicates with our server to retrieve the user's information for logging in</Title>
                        <img width='100%' src={AppLogin} alt=''/>

                        <Title level={4}>UserController: Server-side class that contains all the controller methods for the app</Title>
                        <img width='100%' src={UserController1} alt=''/>
                        <img width='100%' src={UserController2} alt=''/>
                    </Col>
                </Row>
            </>
        );
    }
}