import React from 'react';
import { Typography, Row, Col } from 'antd';
import lab6C from './lab6.c';
import lab6SS1 from './lab6.PNG';
import ProjectFiles from './Lab6.zip';
import lab6SS2 from './lab6-2.PNG';
import lab6OutSS1 from './lab6SS1.png';
import lab6OutSS2 from './lab6SS2.png';

const Title = Typography.Title;

export default class Lab6 extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>Accelerometer Drop Testing - Lab 6</Title>
                        <Title level={4}>Technology: C, Arduino Esplora</Title>
                        For this lab, we had to create a program that calculated the distance and time fallen 
                        of an Arduino Esplora based off of the accelerometer data when dropped from a certain
                        height. Also, we had to print periods while the Esplora was waiting to fall, and print
                        exclamation marks for when it was falling. In addition to this we had to implement a
                        feature that would calculate the distance fallen while compensating for air resistance,
                        and calculate the percent difference between this value and the calculated value.
                        <br></br>
                        <a href={ProjectFiles} download="Project_Files.zip">Download project files</a>
                        <br></br><br></br>
                    </Col>
                </Row>

                <Row justify="center">
                    <Col span={18}>
                        <Title level={4}>lab6.c (click on image to download file)</Title>
                        <a href={lab6C} download="lab6.c">
                            <img width='100%' src={lab6OutSS1} alt=''/>
                            <img width='100%' src={lab6OutSS2} alt=''/>
                        </a>

                        <Title level={4}>Example Outputs</Title>
                        <img width='100%' src={lab6SS1} alt=''/>
                        <br></br><br></br>
                        <img width='100%' src={lab6SS2} alt=''/>
                    </Col>
                </Row>
            </>
        );
    }
}