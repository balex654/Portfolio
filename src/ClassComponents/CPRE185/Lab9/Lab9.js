import React from 'react';
import { Typography, Row, Col } from 'antd';

const Title = Typography.Title;

export default class Lab9 extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>Word Builder - Lab 9</Title>
                    </Col>
                </Row>
            </>
        );
    }
}