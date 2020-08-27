import React from 'react';
import { Typography, Row, Col } from 'antd';

const Title = Typography.Title;

export default class TallyClass extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>Tally Class - Assignment 1</Title>
                    </Col>
                </Row>
            </>
        );
    }
}