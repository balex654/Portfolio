import React from 'react';
import { Typography, Row, Col } from 'antd';

const Title = Typography.Title;

export default class Lab8 extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>Moving Averages with Accelerometer - Lab 8</Title>
                    </Col>
                </Row>
            </>
        );
    }
}