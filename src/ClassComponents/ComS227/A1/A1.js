import React from 'react';
import { Typography, Row, Col } from 'antd';
import assignment1SS1 from './assignment1SS1.png';
import assignment1SS2 from './assignment1SS2.png';
import assignment1SS3 from './assignment1SS3.png';
import assignment1SS4 from './assignment1SS4.png';
import output from './output.png';
import TelevisionTestPNG from './TelevisionTest.png';
import TelevisionTestJava from './TelevisonTest.java';

const Title = Typography.Title;

export default class ComS227A1 extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>Simple Television Class - Assignment 1</Title>
                        <Title level={4}>Technology: Java, Eclipse</Title>
                        <li>First java project</li>
                        <li>Created a class that simulated the functions of a television with multiple methods.</li>
                        <br></br><br></br>
                    </Col>
                </Row>

                <Row justify="center">
                    <Col span={18}>
                        <Title level={4}>Television.java</Title>
                        <img width='100%' src={assignment1SS1} alt=''/>
                        <img width='100%' src={assignment1SS2} alt=''/>
                        <img width='100%' src={assignment1SS3} alt=''/>
                        <img width='100%' src={assignment1SS4} alt=''/>

                        <Title level={4}>TelevisionTest.java</Title>
                        <a href={TelevisionTestJava} download="TelevisionTest.java">
                            <img width='50%' src={TelevisionTestPNG} alt=''/>
                        </a>

                        <Title level={4}>Output of TelevisonTest.java</Title>
                        <img width='50%' src={output} alt=''/>
                    </Col>
                </Row>
            </>
        );
    }
}