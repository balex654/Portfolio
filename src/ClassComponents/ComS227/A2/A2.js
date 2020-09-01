import React from 'react';
import { Typography, Row, Col } from 'antd';
import assignment2SS1 from './assignment2SS1.png';
import assignment2SS2 from './assignment2SS2.png';
import assignment2SS3 from './assignment2SS3.png';
import FootballGameTestJava from './FootballGameTest.java';
import FootballGameTestPNG from './FootballGameTest.png';
import output from './output.png';

const Title = Typography.Title;

export default class ComS227A2 extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                    <Title level={1}>Football Game Class - Assignment 2</Title>
                    <Title level={4}>Technology: Java, Eclipse</Title>
                    <li>Created a class that simulated the events of a football game</li>
                    <br></br><br></br>
                    </Col>
                </Row>

                <Row justify="center">
                    <Col span={18}>
                        <Title level={4}>FootballGame.java</Title>
                        <img width='100%' src={assignment2SS1} alt=''/>
                        <img width='100%' src={assignment2SS2} alt=''/>
                        <img width='100%' src={assignment2SS3} alt=''/>

                        <Title level={4}>FootballGameTest.java</Title>
                        <a href={FootballGameTestJava} download="FootballGameTest.java">
                            <img width='50%' src={FootballGameTestPNG} alt=''/>
                        </a>

                        <Title level={4}>Output of FootballGameTest.java</Title>
                        <img width='50%' src={output} alt=''/>
                    </Col>
                </Row>
            </>
        );
    }
}