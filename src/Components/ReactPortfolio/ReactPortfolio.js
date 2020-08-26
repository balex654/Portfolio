import React from 'react';
import { Typography, Row, Col } from 'antd';

const Title = Typography.Title;

export default class ReactPortfolio extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>This Portfolio - React.JS</Title>
                    </Col>
                </Row>
            </>
        );
    }
}