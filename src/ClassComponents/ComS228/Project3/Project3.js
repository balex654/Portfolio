import React from 'react';
import { Typography, Row, Col } from 'antd';

const Title = Typography.Title;

export default class Project3 extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>Created Adaptive List Object - Project 3</Title>
                    </Col>
                </Row>
            </>
        );
    }
}