import React from 'react';
import { Typography, Row, Col } from 'antd';

const Title = Typography.Title;

export default class SeniorProject extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>Microbiology Data Entry App - Senior Project</Title>
                        <Title level={4}>Technology: Python, Plotly, Pandas</Title>
                        For senior projects at Iowa State, students are put into groups of four to six and spend two
                        semesters working on a real-world project. In my case, I'm on a team of six and we just finished
                        the first semester of our project and for our project, we are making a desktop application for Iowa
                        State's microbiology department. Our app will allow scientists to import data about their experiments
                        and view a variety of graphs based on the data. We are using Python to write the app and Python
                        libraries like Plotly and Pandas to manage and graph the data.
                    </Col>
                </Row>
            </>
        );
    }
}