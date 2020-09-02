import React from 'react';
import { Typography, Row, Col } from 'antd';
import lab6PNG from './lab6.png';
import lab6C from './Lab6.c';
import ProjectFiles from './lab6.zip';

const Title = Typography.Title;

export default class Lab6 extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>Analog to Digital Converter - Lab 6</Title>
                        <Title level={4}>Technology: C, Embedded Systems</Title>
                        In this project, my team and I configured the WiFi cabability of the robot.
                        <br></br>
                        <a href={ProjectFiles} download="Project_Files.zip">Download project files</a>
                        <br></br><br></br>
                    </Col>
                </Row>

                <Row justify="center">
                    <Col span={18}>
                        <Title level={4}>lab6.c (click on image to download file)</Title>
                        <a href={lab6C} download="lab6.c">
                            <img width='100%' src={lab6PNG} alt=''/>
                        </a>
                    </Col>
                </Row>
            </>
        );
    }
}