import React from 'react';
import { Typography, Row, Col } from 'antd';

const Title = Typography.Title;

export default class Project5 extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>Depth First Search Implementation - Project 5</Title>
                    </Col>
                </Row>
            </>
        );
    }
}