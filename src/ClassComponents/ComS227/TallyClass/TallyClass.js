import React from 'react';
import { Typography, Row, Col } from 'antd';
import ProjectFiles from './miniAssignment1.zip';
import output from './output.png';
import TallyNumberJava from './TallyNumber.java';
import TallyNumberSS1 from './TallyNumberSS1.png';
import TallyNumberSS2 from './TallyNumberSS2.png';
import TallyNumberTestJava from './TallyNumberTest.java';
import TallyNumberTestPNG from './TallyNumberTest.png';

const Title = Typography.Title;

export default class TallyClass extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>Tally Class - Assignment 1</Title>
                        <Title level={4}>Technology: Java, Eclipse</Title>
                        Here, I made a class that performed different actions on a tally numbering system.
                        Such 1 = | 2 = || 3 = ||| 5 = * and so on. Some of the program's methods include combining
                        two tally sets, converting a set to a number, and coverting a number to a tally.
                        <br></br>
                        <a href={ProjectFiles} download="Project_Files.zip">Download project files</a>
                        <br></br><br></br>
                    </Col>
                </Row>

                <Row justify="center">
                    <Col span={18}>
                        <Title level={4}>TallyNumber.java (click on image to download file)</Title>
                        <a href={TallyNumberJava} download="TallyNumber.java">
                            <img width='100%' src={TallyNumberSS1} alt=''/>
                            <img width='100%' src={TallyNumberSS2} alt=''/>
                        </a>

                        <Title level={4}>TallyNumberTest.java (click on image to download file)</Title>
                        <a href={TallyNumberTestJava} download="TallyNumberTest.java">
                            <img width='50%' src={TallyNumberTestPNG} alt=''/>
                        </a>

                        <Title level={4}>Output of TallyNumberTest.java</Title>
                        <img width='50%' src={output} alt=''/>

                    </Col>
                </Row>
            </>
        );
    }
}