import React from 'react';
import { Typography, Row, Col } from 'antd';

const Title = Typography.Title;

export default class ProjectA extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>Single-Cycle MIPS Processor - Project A</Title>
                    </Col>
                </Row>
            </>
        );
    }
}