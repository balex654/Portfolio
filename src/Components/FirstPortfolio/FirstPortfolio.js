import React from 'react';
import { Typography, Row, Col } from 'antd';

const Title = Typography.Title;

export default class FirstPortfolio extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>First Portfolio - Google Cloud Platform</Title>
                    </Col>
                </Row>
            </>
        );
    }
}