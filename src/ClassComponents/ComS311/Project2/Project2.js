import React from 'react';
import { Typography, Row, Col } from 'antd';

const Title = Typography.Title;

export default class Project2 extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>String Matching Algorithms (Word Searching) - Project 2</Title>
                    </Col>
                </Row>
            </>
        );
    }
}