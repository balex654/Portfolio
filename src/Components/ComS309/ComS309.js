import React from 'react';
import { Typography, Row, Col } from 'antd';

const Title = Typography.Title;

export default class ComS309 extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>Android Development Project - Computer Science 309</Title>
                    </Col>
                </Row>
            </>
        );
    }
}