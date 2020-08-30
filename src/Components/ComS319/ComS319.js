import React from 'react';
import { Typography, Row, Col } from 'antd';

const Title = Typography.Title;

export default class ComS319 extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>Construction of User Interfaces - Com S 319</Title>
                    </Col>
                </Row>
            </>
        );
    }
}