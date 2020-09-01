import React from 'react';
import { Typography, Row, Col } from 'antd';
import lab9C from './lab9.c';
import lab9SS1 from './lab9SS1.png';
import lab9SS2 from './lab9SS2.png';

const Title = Typography.Title;

export default class Lab9 extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>Word Builder - Lab 9</Title>
                        <Title level={4}>Technology: C, Arduino Esplora</Title>
                        For this lab, I created a sentence builder program using the Arduino Esplora. The user
                        could navigate a list of words on the console screen using the buttons of the esplora.
                        They could then select the words and they would be added to a sentence at the top of
                        the console output.
                        <br></br><br></br>
                    </Col>
                </Row>

                <Row justify="center">
                    <Col span={18}>
                        <Title level={4}>lab9.c (click on image to download file)</Title>
                        <a href={lab9C} download="lab9.c">
                            <img width='100%' src={lab9SS1} alt=''/>
                            <img width='100%' src={lab9SS2} alt=''/>
                        </a>
                    </Col>
                </Row>
            </>
        );
    }
}