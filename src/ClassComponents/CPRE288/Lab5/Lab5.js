import React from 'react';
import { Typography, Row, Col } from 'antd';

const Title = Typography.Title;

export default class Lab5 extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>Implementing WiFi Connectivity - Lab 5</Title>
                    </Col>
                </Row>
            </>
        );
    }
}