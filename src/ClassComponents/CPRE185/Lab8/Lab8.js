import React from 'react';
import { Typography, Row, Col } from 'antd';
import G3shortlong from './G3shortlong.PNG';
import lab8C from './lab8.c';
import ProjectFiles from './Lab8.zip';
import lab8SS1 from './lab8SS1.png';
import lab8SS2 from './lab8SS2.png';

const Title = Typography.Title;

export default class Lab8 extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>Moving Averages with Accelerometer - Lab 8</Title>
                        <Title level={4}>Technology: C, Arduino Esplora</Title>
                        For this lab, we had to print a moving average of the Arduino Esplora's accelerometer
                        values. It also output the maximum and minimum values of the buffer array
                        <br></br>
                        <a href={ProjectFiles} download="Project_Files.zip">Download project files</a>
                        <br></br><br></br>
                    </Col>
                </Row>

                <Row justify="center">
                    <Col span={18}>
                        <Title level={4}>lab8.c (click on image to download file)</Title>
                        <a href={lab8C} download="lab6.c">
                            <img width='100%' src={lab8SS1} alt=''/>
                            <img width='100%' src={lab8SS2} alt=''/>
                        </a>

                        <Title level={4}>
                        Example Output (You can see how the data is "smoothed" out with the moving averages):<br></br>
                        Y-axis = accelerometer data in g's<br></br>
                        X-axis = time in milliseconds
                        </Title>
                        <img width='100%' src={G3shortlong} alt=''/>
                    </Col>
                </Row>
            </>
        );
    }
}