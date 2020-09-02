import React from 'react';
import { Typography, Row, Col } from 'antd';
import DFSJava from './DFS.java';
import DFSPNG from './DFS.png';
import DiGraphJava from './DiGraph.java';
import DiGraphPNG from './DiGraph.png';
import EdgeJava from './Edge.java';
import EdgePNG from './Edge.png';
import ProjectFiles from './hw5.zip';
import MaxPath from './MaxPath.java';
import MaxPathSS1 from './MaxPathSS1.png';
import MaxPathSS2 from './MaxPathSS2.png';
import output from './output.png';
import UseDFS from './UseDFS.png';
import UseDFSMaxPath from './UseDFSMaxPath.java';

const Title = Typography.Title;

export default class Project5 extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>Depth First Search Implementation - Project 5</Title>
                        <Title level={4}>Technology: Java, Eclipse</Title>
                        This project uses graph traversal algorithms such as Depth First Search to search through
                        a graph to find a path of maximum length among other functions. It uses a graph with
                        directed and weighted edges.
                        <br></br>
                        <a href={ProjectFiles} download="Project_Files.zip">Download project files</a>
                        <br></br><br></br>
                    </Col>
                </Row>

                <Row justify="center">
                    <Col span={18}>
                        <Title level={4}>DFS.java (click on image to download file)</Title>
                        <a href={DFSJava} download="DFS.java">
                            <img width='100%' src={DFSPNG} alt=''/>
                        </a>

                        <Title level={4}>DiGraph.java (click on image to download file)</Title>
                        <a href={DiGraphJava} download="DiGraph.java">
                            <img width='100%' src={DiGraphPNG} alt=''/>
                        </a>

                        <Title level={4}>Edge.java (click on image to download file)</Title>
                        <a href={EdgeJava} download="Edge.java">
                            <img width='100%' src={EdgePNG} alt=''/>
                        </a>

                        <Title level={4}>MaxPath.java (click on image to download file)</Title>
                        <a href={MaxPath} download="MaxPath.java">
                            <img width='100%' src={MaxPathSS1} alt=''/>
                            <img width='100%' src={MaxPathSS2} alt=''/>
                        </a>

                        <Title level={4}>UseDFSMaxPath.java (click on image to download file): An example of how MaxPath is used</Title>
                        <a href={UseDFSMaxPath} download="UseDFSMaxPath.java">
                            <img width='100%' src={UseDFS} alt=''/>
                        </a>

                        <Title level={4}>Output of UseDFSMaxPath.java</Title>
                        <img width='50%' src={output} alt=''/>
                    </Col>
                </Row>
            </>
        );
    }
}