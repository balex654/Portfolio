import React from 'react';
import { Typography, Row, Col } from 'antd';

const Title = Typography.Title;

export default class CPRE281 extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>Digital Logic - CPRE 281</Title>
                    </Col>
                </Row>
            </>
        );
    }
}