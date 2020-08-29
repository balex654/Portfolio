import React from 'react';
import { Typography, Row, Col } from 'antd';

const Title = Typography.Title;

export default class Project1 extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>Graph Traversal Algorithms (Shortest path algorithms) - Project 1</Title>
                    </Col>
                </Row>
            </>
        );
    }
}