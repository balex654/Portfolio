import React from 'react';
import { Typography, Row, Col } from 'antd';
import ConwayTransformJava from './ConwayTransform.java';
import ConwayTransformPNG from './ConwayTransform.png';
import GridUtil from './GridUtil.java';
import GridUtilSS1 from './GridUtilSS1.png';
import GridUtilSS2 from './GridUtilSS2.png';
import LifeTestJava from './LifeTest.java';
import LifeTestPNG from './LifeTest.png';
import ProjectFiles from './miniAssignment2.zip';
import output from './output.gif';
import SmoothingTransformJava from './SmoothingTransform.java';
import SmoothingTransformPNG from './SmoothingTransform.png';

const Title = Typography.Title;

export default class TransClasses extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>Transformation Classes - Assignment 2</Title>
                        <Title level={4}>Technology: Java, Eclipse</Title>
                        This program performs transformation operations on 2 dimensional arrays.
                        <br></br>
                        <a href={ProjectFiles} download="Project_Files.zip">Download project files</a>
                        <br></br><br></br>
                    </Col>
                </Row>

                <Row justify="center">
                    <Col span={18}>
                        <Title level={4}>ConwayTransform.java (click on image to download file</Title>
                        <a href={ConwayTransformJava} download="ConwayTransform.java">
                            <img width='100%' src={ConwayTransformPNG} alt=''/>
                        </a>

                        <Title level={4}>SmoothingTransform.java (click on image to download file</Title>
                        <a href={SmoothingTransformJava} download="SmoothingTransform.java">
                            <img width='100%' src={SmoothingTransformPNG} alt=''/>
                        </a>

                        <Title level={4}>GridUtil.java (click on image to download file</Title>
                        <a href={GridUtil} download="GridUtil.java">
                            <img width='100%' src={GridUtilSS1} alt=''/>
                            <img width='100%' src={GridUtilSS2} alt=''/>
                        </a>

                        <Title level={4}>LifeTest.java (click on image to download file</Title>
                        <a href={LifeTestJava} download="LifeTest.java">
                            <img width='100%' src={LifeTestPNG} alt=''/>
                        </a>

                        <Title level={4}>Output of LifeTest.java</Title>
                        <img width='50%' src={output} alt=''/>
                    </Col>
                </Row>
            </>
        );
    }
}