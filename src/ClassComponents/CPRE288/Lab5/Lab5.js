import React from 'react';
import { Typography, Row, Col } from 'antd';
import lab5C from './lab5.c';
import lab5PNG from './lab5.png';
import ProjectFiles from './lab5Files.zip';
import WiFiC from './WiFi.c';
import WiFiPNG from './WiFi.png';

const Title = Typography.Title;

export default class Lab5 extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>Implementing WiFi Connectivity - Lab 5</Title>
                        <Title level={4}>Technology: C, Embedded Systems</Title>
                        In this project, my team and I configured the WiFi cabability of the robot
                        <br></br>
                        <a href={ProjectFiles} download="Project_Files.zip">Download project files</a>
                        <br></br><br></br>
                    </Col>
                </Row>

                <Row justify="center">
                    <Col span={18}>
                        <Title level={4}>lab5.c (click on image to download file)</Title>
                        <a href={lab5C} download="lab5.c">
                            <img width='100%' src={lab5PNG} alt=''/>
                        </a>

                        <Title level={4}>WiFi.c (click on image to download file)</Title>
                        <a href={WiFiC} download="WiFi.c">
                            <img width='100%' src={WiFiPNG} alt=''/>
                        </a>

                    </Col>                    
                </Row>
            </>
        );
    }
}