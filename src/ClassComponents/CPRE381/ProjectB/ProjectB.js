import React from 'react';
import { Typography, Row, Col } from 'antd';
import Diagram from './Diagram.png';
import instructions from './Project_instructions.pdf';
import ProjectFiles from './projectB.zip';

const Title = Typography.Title;

export default class ProjectB extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>32-bit MIPS Pipline Processor - Project B</Title>
                        <Title level={4}>Technology: VHDL, Quartus Prime, Assembly</Title>
                        For project A, my teammate and I built a 32 bit single-cylcle MIPS processor and for
                        this project, we built a 32 bit processor with five stages and a hazard detection and
                        forwarding unit. After finishing the processor, we were able to execute assembly statements
                        with it.
                        <br></br>
                        <a href={instructions} download="Project-B-Instruction.pdf">Download project description</a>
                        <br></br>
                        <a href={ProjectFiles} download="Project_Files.zip">Download project files</a>
                        <br></br><br></br>
                    </Col>
                </Row>

                <Row justify="center">
                    <Col span={18}>
                        <Title level={4}>High-Level Block Diagram</Title>
                        <img width='100%' src={Diagram} alt=''/>
                    </Col>
                </Row>
            </>
        );
    }
}