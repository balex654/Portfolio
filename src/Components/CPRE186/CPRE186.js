import React from 'react';
import { Typography, Row, Col } from 'antd';

const Title = Typography.Title;

export default class CPRE186 extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>Intro to Computer Eng. and Problem Solving II - Computer Eng. 186</Title>
                    </Col>
                </Row>
            </>
        );
    }
}