import React from 'react';
import { Typography, Row, Col } from 'antd';

const Title = Typography.Title;

export default class ReactPortfolio extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>This Portfolio - React.JS</Title>
                        <Title level={4}>Technologies: React.JS, Google Cloud Platform, Node.JS Server</Title>
                        Over the summer of 2020, I had the opportunity to work with Buildertrend on converting
                        their webapp from using Webforms to React.JS. After using React, I found it very fascinating
                        and I wanted to do more with it. For my previous portfolio, <a href="https://portfolio-258522.appspot.com" target="_blank" rel="noopener noreferrer">here</a>, I used html pages and
                        Java Springboot for the backend. React is a much more modern way of making a webapp which is
                        why I wanted to use it. Click the link below to view the code for this portfolio on my github
                        page.
                        <br></br>
                        <a href="https://github.com/balex654/Portfolio" target="_blank" rel="noopener noreferrer">View this portfolio on github</a>
                    </Col>
                </Row>
            </>
        );
    }
}