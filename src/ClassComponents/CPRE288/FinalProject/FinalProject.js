import React from 'react';
import { Typography, Row, Col } from 'antd';
import finalProjectGP1 from './finalProjectGP1.png';
import finalProjectGP2 from './finalProjectGP2.png';
import finalProjectGUIMain from './finalProjectGUIMain.png';
import Graph from './Graph.png';
import GraphPanel from './GraphPanel.java';
import GuiMain from './GuiMain.java';

const Title = Typography.Title;

export default class FinalProject extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>Java GUI - Final Project</Title>
                        <Title level={4}>Technology: Java, C, Eclipse</Title>
                        For this project, I was in a team of three others. We were tasked with programming the robot
                        using embedded systems techniques to be controlled remotely using a WiFi connection from
                        the robot to a lab computer. We needed to write a program to remotely navigate it around
                        an obstacle course to a final destination without directly seeing the robot. My responsibility
                        was to create a java program that would take the data from the optical sensors and display
                        it in a radial graph to detect objects.
                        <br></br><br></br>
                    </Col>
                </Row>

                <Row justify="center">
                    <Col span={18}>
                        <Title level={4}>
                            This graph is made from test data and shows two objects in front of the robot. The red line represents data from
                            the ultrasonic sensor and the blue line (under the red line) represents data from the infrared sensor
                        </Title>
                        <img width='100%' src={Graph} alt=''/>

                        <Title level={4}>GuiMain.java (click on image to download file)</Title>
                        <a href={GuiMain} download="GUIMain.java">
                            <img width='100%' src={finalProjectGUIMain} alt=''/>
                        </a>

                        <Title level={4}>GraphPanel.java (click on image to download file)</Title>
                        <a href={GraphPanel} download="GraphPanel.java">
                            <img width='100%' src={finalProjectGP1} alt=''/>
                            <img width='100%' src={finalProjectGP2} alt=''/>
                        </a>
                    </Col>
                </Row>
            </>
        );
    }
}