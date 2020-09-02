import React from 'react';
import { Typography, Row, Col } from 'antd';
import AdaptiveList from './AdaptiveList.java';
import AdaptiveListSS1 from './AdaptiveListSS1.png';
import AdaptiveListSS2 from './AdaptiveListSS2.png';
import AdaptiveListSS3 from './AdaptiveListSS3.png';
import AdaptiveListSS4 from './AdaptiveListSS4.png';
import AdaptiveListSS5 from './AdaptiveListSS5.png';
import AdaptiveListSS6 from './AdaptiveListSS6.png';
import ProjectFiles from './hw3.zip';
import output from './output.png';
import testJava from './test.java';
import testPNG from './test.png';

const Title = Typography.Title;

export default class Project3 extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>Created Adaptive List Object - Project 3</Title>
                        <Title level={4}>Technology: Java, Eclipse</Title>
                        For this project, I created a linked-list data structure in Java, similar to an ArrayList.
                        The list worked by creating a node object for every item and linking the nodes together with
                        the fields in the node objects. The list is generic so it can be used with any type of object
                        in Java. Also, it has many built-in function such as clear(), add(), and contains().
                        <br></br>
                        <a href={ProjectFiles} download="Project_Files.zip">Download project files</a>
                        <br></br><br></br>
                    </Col>
                </Row>

                <Row justify="center">
                    <Col span={18}>
                        <Title level={4}>test.java (click on image to download file)</Title>
                        <a href={testJava} download="test.java">
                            <img width='100%' src={testPNG} alt=''/>
                        </a>

                        <Title level={4}>Output of test.java</Title>
                        <img width='100%' src={output} alt=''/>

                        <Title level={4}>AdaptiveList.java (click on image to download file)</Title>
                        <a href={AdaptiveList} download="AdaptiveList.java">
                            <img width='100%' src={AdaptiveListSS1} alt=''/>
                            <img width='100%' src={AdaptiveListSS2} alt=''/>
                            <img width='100%' src={AdaptiveListSS3} alt=''/>
                            <img width='100%' src={AdaptiveListSS4} alt=''/>
                            <img width='100%' src={AdaptiveListSS5} alt=''/>
                            <img width='100%' src={AdaptiveListSS6} alt=''/>
                        </a>
                    </Col>
                </Row> 
            </>
        );
    }
}