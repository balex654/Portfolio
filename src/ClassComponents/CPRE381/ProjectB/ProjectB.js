import React from 'react';
import { Typography, Row, Col } from 'antd';

const Title = Typography.Title;

export default class ProjectB extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>32-bit MIPS Pipline Processor - Project B</Title>
                    </Col>
                </Row>
            </>
        );
    }
}