import React from 'react';
import { Typography, Row, Col } from 'antd';
import lab7C from './lab7.c';
import ProjectFiles from './Lab7.zip';
import lab7output from './lab7output.PNG';
import lab7SS1 from './lab7SS1.png';
import lab7SS2 from './lab7SS2.png';

const Title = Typography.Title;

export default class Lab7 extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>Accelerometer Tilt Visualization - Lab 7</Title>
                        <Title level={4}>Technology: C, Arduino Esplora</Title>
                        For this lab we had to use the accelerometer data coming from a Arduino Esplora to make a
                        horizontal oriented bar graph of the magnitude of the pitch and the roll. To do this we used
                        characters L and R. We needed to use the buttons on the Esplora to switch between pitch
                        and roll, and we needed to use another button to stop the program.
                        <br></br>
                        <a href={ProjectFiles} download="Project_Files.zip">Download project files</a>
                        <br></br><br></br>
                    </Col>
                </Row>

                <Row justify="center">
                    <Col span={18}>
                        <Title level={4}>lab7.c (click on image to download file)</Title>
                        <a href={lab7C} download="lab7.c">
                            <img width='100%' src={lab7SS1} alt=''/>
                            <img width='100%' src={lab7SS2} alt=''/>
                        </a>

                        <Title level={4}>Example Output</Title>
                        <img width='100%' src={lab7output} alt=''/>
                    </Col>
                </Row>
            </>
        );
    }
}