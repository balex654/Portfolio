import React from 'react';
import { Typography, Row, Col } from 'antd';
import project2Q1 from './project2Q1.png';
import project2Q1slide from './project2Q1slide.png';
import project2Q2slide1 from './project2Q2slide1.png';
import project2Q2slide2 from './project2Q2slide2.png';
import project2Q2slide3 from './project2Q2slide3.png';
import project2Q2ss1 from './project2Q2ss1.png';
import project2Q2ss2 from './project2Q2ss2.png';
import project2Q3slide1 from './project2Q3slide1.png';
import project2Q3slide2 from './project2Q3slide2.png';
import project2Q3ss1 from './project2Q3ss1.png';
import project2Q3ss2 from './project2Q3ss2.png';
import project2Q4ss1 from './project2Q4ss1.png';
import project2Q4ss2 from './project2Q4ss2.png';
import project2Q4ss3 from './project2Q4ss3.png';
import q1 from './q1.py';
import q2 from './q2.py';
import q4 from './q4.py';
import q5 from './q5.py';

const Title = Typography.Title;

export default class Project2 extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>String Matching Algorithms (Word Searching) - Project 2</Title>
                        <Title level={4}>Technology: Python, Visual Studio Code</Title>
                        <Title level={2}>Question 1</Title>
                        This algorithm find the longest common substring between two input strings using recursion.
                        This method uses a top-down recursive approach with a cache to store previously calculated results
                        from the recursive calls. The lecture slide below graphically shows the steps of the algorithms.
                        <br></br><br></br>
                    </Col>
                </Row>

                <Row justify="center">
                    <Col span={18}>
                        <img width='100%' src={project2Q1slide} alt=''/>
                        <Title level={4}>q1.py (click on image to download code)</Title>
                        <a href={q1} download="q1.py">
                            <img width='100%' src={project2Q1} alt=''/>
                        </a>

                        <Title level={2}>Question 2</Title>
                        This algorithm is similar to the last but it uses a bottom-up approach instead. It first
                        fills a table with the lengths all combinations of the longest common substrings. Then it
                        retrieves the answer by back-tracing through the table with the findResult() function.
                        <img width='100%' src={project2Q2slide1} alt=''/>
                        <img width='100%' src={project2Q2slide2} alt=''/>
                        <img width='100%' src={project2Q2slide3} alt=''/>
                        <Title level={4}>q2.py (click on image to download code)</Title>
                        <a href={q2} download="q2.py">
                            <img width='100%' src={project2Q2ss1} alt=''/>
                            <img width='100%' src={project2Q2ss2} alt=''/>
                        </a>

                        <Title level={2}>Question 3</Title>
                        The scenario for this problem is that there are two versions of text with multiple lines
                        and the differences between them need to be tracked. For each line, the algorithm outputs a 'T' for
                        transfer, 'D' for delete, 'I' for insert and 'S' for substitution. Following the letter is the older
                        version of the line. Following this is the new version of the line. The algorithm finds the edit
                        distance between the two versions.
                        <img width='100%' src={project2Q3slide1} alt=''/>
                        <img width='100%' src={project2Q3slide2} alt=''/>
                        <Title level={4}>q3.py (click on image to download code)</Title>
                        <a href={q4} download="q3.py">
                            <img width='100%' src={project2Q3ss1} alt=''/>
                            <img width='100%' src={project2Q3ss2} alt=''/>
                        </a>

                        <Title level={2}>Question 4</Title>
                        This problem uses the answer from the previous and the longest common substring algorithm.
                        The output is the same as the last problem except it uses double brackets to signify character
                        changes within each line on substitutions.
                        <Title level={4}>q4.py (click on image to download code)</Title>
                        <a href={q5} download="q4.py">
                            <img width='100%' src={project2Q4ss1} alt=''/>
                            <img width='100%' src={project2Q4ss2} alt=''/>
                            <img width='100%' src={project2Q4ss3} alt=''/>
                        </a>
                    </Col>
                </Row>
            </>
        );
    }
}