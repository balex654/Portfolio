import React from 'react';
import { Typography, Row, Col } from 'antd';

const Title = Typography.Title;

export default class SeniorProject extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>Microbiology Data Entry App - Senior Project</Title>
                    </Col>
                </Row>
            </>
        );
    }
}