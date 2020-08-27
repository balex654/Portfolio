import React from 'react';
import { Typography, Row, Col } from 'antd';

const Title = Typography.Title;

export default class Lab7 extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>Accelerometer Tilt Visualization - Lab 7</Title>
                    </Col>
                </Row>
            </>
        );
    }
}