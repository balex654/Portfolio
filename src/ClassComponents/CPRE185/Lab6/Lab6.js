import React from 'react';
import { Typography, Row, Col } from 'antd';

const Title = Typography.Title;

export default class Lab6 extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>Accelerometer Drop Testing - Lab 6</Title>
                    </Col>
                </Row>
            </>
        );
    }
}