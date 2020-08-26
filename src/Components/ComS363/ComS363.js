import React from 'react';
import { Typography, Row, Col } from 'antd';

const Title = Typography.Title;

export default class ComS363 extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>Database Management Systems - Computer Science 363</Title>
                    </Col>
                </Row>
            </>
        );
    }
}