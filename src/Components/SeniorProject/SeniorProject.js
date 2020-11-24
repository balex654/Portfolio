import React from 'react';
import { Typography, Row, Col } from 'antd';
import Presentation from './Final Presentation.pdf';
import UI from './UI.png';

const Title = Typography.Title;

export default class SeniorProject extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>Microbiology Data Entry App - Senior Project</Title>
                        <Title level={4}>Technology: Python, Plotly, Pandas, PyQt5</Title>
                        For senior projects at Iowa State, students are put into groups of four to six and spend two
                        semesters working on a real-world project. In my case, I was on a team of six and we are making a 
                        desktop graphing application for Iowa
                        State's microbiology department. Our app allows scientists to import Excel data about their experiments
                        and view a variety of graphs based on the data. We used Python to write the app and Python
                        libraries like Plotly to make customized graphs, Pandas to import and manage the data, PyQt5 for UI
                        construction, and Python's Pickle module for storing data locally.
                        <a href={Presentation} download="Presentation.pdf"> Click here to download our final Presentation.</a>
                        <a href="https://docs.google.com/file/d/124qSnbh09i01BNGcJzjEYOeTo_q1gbfD/preview" target="_blank" rel="noopener noreferrer"> Click here to view our demo video.</a>
                    </Col>
                </Row>

                <Row justify="center">
                    <Col span={18}>
                        <br></br>
                        <img width='100%' src={UI} alt=''/>
                    </Col>
                </Row>
            </>
        );
    }
}