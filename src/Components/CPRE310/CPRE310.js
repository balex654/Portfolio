import React from 'react';
import { Typography, Row, Col } from 'antd';
import Assignment3SS1 from './Assignment3ss1.png';
import Assignment3SS2 from './Assignment3ss2.png';
import Assignment3SS3 from './Assignment3ss3.png';
import data from './data.png';
import networkFB from './network_fussbook.txt';
import part3PNG from './part3.png';
import part3Java from './part3.png';

const Title = Typography.Title;

export default class CPRE310 extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>Theoretical Foundations of Computer Eng. - CPRE 310</Title>
                        <Title level={2}>Java Social Networking Program</Title>
                        <Title level={4}>Technology: Java, Eclipse</Title>
                        This program uses a text file to construct a social network in Java.
                        <br></br><br></br>
                    </Col>
                </Row>

                <Row justify="center">
                    <Col span={18}>
                        <img width='100%' src={part3PNG} alt=''/>

                        <Title level={4}>Part3.java (click on screenshot to download file)</Title>
                        <a href={part3Java} download="part3.java">
                            <img width='100%' src={Assignment3SS1} alt=''/>
                            <img width='100%' src={Assignment3SS2} alt=''/>
                            <img width='100%' src={Assignment3SS3} alt=''/>
                        </a>

                        <Title level={4}>network_fussbook.txt (click on screenshot to download file)</Title>
                        <a href={networkFB} download="network_fussbook.txt">
                            <img width='50%' src={data} alt=''/>
                        </a>
                    </Col>
                </Row>
            </>
        );
    }
}