import React from 'react';
import { Typography, Row, Col } from 'antd';

const Title = Typography.Title;

export default class CPRE310 extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>Theoretical Foundations of Computer Eng. - CPRE 310</Title>
                    </Col>
                </Row>
            </>
        );
    }
}