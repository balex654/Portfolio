import React from 'react';
import { Typography, Row, Col } from 'antd';
import DictionaryJava from './Dictionary.java';
import DictionaryPNG from './Dictionary.png';
import EntryTree from './EntryTree.java';
import EntryTreeSS1 from './EntryTreeSS1.png';
import EntryTreeSS2 from './EntryTreeSS2.png';
import EntryTreeSS3 from './EntryTreeSS3.png';
import EntryTreeSS4 from './EntryTreeSS4.png';
import ProjectFiles from './hw4.zip';
import output1 from './output1.png';
import output2 from './output2.png';
import output3 from './output3.png';

const Title = Typography.Title;

export default class Project4 extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>Tree Data Structure - Project 4</Title>
                        <Title level={4}>Technology: Java, Eclipse</Title>
                        This project shows the implementation of a tree data structure with the parent and
                        child node objects being connected through the fields in the nodes. There are functions
                        like contains() which returns true if an input node is in the tree, and prefix() which
                        has a sequence of nodes as an input and returns an array of the longest occurrence of
                        the sequence in the tree.
                        <br></br>
                        <a href={ProjectFiles} download="Project_Files.zip">Download project files</a>
                        <br></br><br></br>
                    </Col>
                </Row>

                <Row justify="center">
                    <Col span={18}>
                        <Title level={4}>EntryTree.java (click on image to download file)</Title>
                        <a href={EntryTree} download="EntryTree.java">
                            <img width='100%' src={EntryTreeSS1} alt=''/>
                            <img width='100%' src={EntryTreeSS2} alt=''/>
                            <img width='100%' src={EntryTreeSS3} alt=''/>
                            <img width='100%' src={EntryTreeSS4} alt=''/>
                        </a>

                        <Title level={4}>Dictionary.java (click on image to download file)</Title>
                        <a href={DictionaryJava} download="Dictionary.java">
                            <img width='100%' src={DictionaryPNG} alt=''/>
                        </a>

                        <Title level={4}>Output of Dictionary.java</Title>
                        <img width='100%' src={output1} alt=''/>
                        <img width='100%' src={output2} alt=''/>
                        <img width='100%' src={output3} alt=''/>
                    </Col>
                </Row>
            </>
        );
    }
}