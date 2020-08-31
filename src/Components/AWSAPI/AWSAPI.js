import React from 'react';
import { Typography, Row, Col } from 'antd';
import ApplicationJava from './Application.java';
import ApplicationPNG from './Application.png';
import configJava from './config.java';
import configPNG from './Config.png';
import UserJava from './User.java';
import UserPNG from './User.png';
import UserControllerJava from './UserController.java';
import UserControllerPNG from './UserController.png';
import UserRepoJava from './UserRepo.java';
import UserRepoPNG from './UserRepo.png';

const Title = Typography.Title;

export default class AWSAPI extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>Amazon Web Services - Web API</Title>
                        <Title level={4}>Technology: Amazon Web Services, Java, Eclipse, MySQL</Title>
                        This project is an example of a simple web service on AWS using backend technology.
                        I used AWS Codestar to create the server instance and AWS Relational Database Service (RDS)
                        for the database. I was able to run my project locally while using Amazon's RDS.
                        <br></br><br></br>
                    </Col>
                </Row>

                <Row justify="center">
                    <Col span={18}>
                        <Title level={4}>Application.java (click on image to download file):</Title>
                        <a href={ApplicationJava} download="Application.java">
                            <img width='100%' src={ApplicationPNG} alt=''/>
                        </a>

                        <Title level={4}>UserController.java (click on image to download file):</Title>
                        <a href={UserControllerJava} download="UserController.java">
                            <img width='100%' src={UserControllerPNG} alt=''/>
                        </a>

                        <Title level={4}>User.java (click on image to download file):</Title>
                        <a href={UserJava} download="UserJava.java">
                            <img width='100%' src={UserPNG} alt=''/>
                        </a>

                        <Title level={4}>UserRepo.java (click on image to download file):</Title>
                        <a href={UserRepoJava} download="UserRepo.java">
                            <img width='100%' src={UserRepoPNG} alt=''/>
                        </a>

                        <Title level={4}>Config.java (click on image to download file):</Title>
                        <a href={configJava} download="config.java">
                            <img width='100%' src={configPNG} alt=''/>
                        </a>

                    </Col>
                </Row>
            </>
        );
    }
}