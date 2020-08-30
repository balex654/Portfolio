import React from 'react';
import { Typography, Row, Col } from 'antd';
import controller from './controller.png';
import SpringbootSS1 from './SpringbootSS1.png';
import SpringbootSS2 from './SpringbootSS2.png';
import SpringbootSS3 from './SpringbootSS3.png';

const Title = Typography.Title;

export default class FirstPortfolio extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>First Portfolio - Google Cloud Platform</Title>
                        <Title level={4}>Technology: Google Cloud Platform, Java, HTML</Title>
                        Before making this portfolio, a thought came to me saying that I needed a better way to
                        showcase my work and my experience. All of my peers have a LinkedIn and resume but
                        very few college engineers have a portfolio that details their work. So I decided to make
                        one on the Google Cloud Platform. I developed the project in Java Springboot and used HTML
                        pages to add all the content. I used HTML and Java Springboot because this was before I knew how
                        to use ReactJS which is what my current porfolio (this website) is made with.
                    </Col>
                </Row>

                <Row>
                    <Col span={24}>
                        <Title level={4}>freshman.jsp</Title>
                        <img width='100%' src={SpringbootSS1} alt=''/>

                        <Title level={4}>coms228.jsp</Title>
                        <img width='100%' src={SpringbootSS2} alt=''/>

                        <Title level={4}>hw3.jsp</Title>
                        <img width='100%' src={SpringbootSS3} alt=''/>

                        <Title level={4}>HomeController.java</Title>
                        <img width='100%' src={controller} alt=''/>
                    </Col>
                </Row>
            </>
        );
    }
}