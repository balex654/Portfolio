import React from 'react';
import { Typography, Row, Col } from 'antd';
import './About.css';
import photo from './composite2019.jpg';

const Title = Typography.Title;
const Paragraph = Typography.Paragraph;

export default class About extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={16}>
                        <Title level={1} className="title">Software Engineer</Title>
                    </Col>
                </Row>

                <Row justify="end">
                    <Col span={12}>
                        Hello, my name is Ben Alexander and I'm a student at Iowa State majoring in 
                        Software Engineering and graduating in November. I have a passion for finding
                        creative software solutions to challenging problems and I'm eager to continue 
                        my career doing what I enjoy.<br></br><br></br>
                        <Title level={4} className="title">Specialties:</Title>
                        iOS Development, Java Springboot, Google Cloud Platform, MySQL
                        <Title level={4} className="title">Familier With:</Title>
                        React.JS, .NET Framework, Python, Android development
                    </Col>
                    <Col span={8}>
                        <img width='100%' src={photo} className="photo"/>
                    </Col>
                </Row>
            </>
        );
    }
}