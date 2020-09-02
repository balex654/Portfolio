import React from 'react';
import { Typography, Row, Col } from 'antd';
import Diagram from './Diagram.png';
import instructions from './Project-A-Instruction.pdf';
import ProjectFiles from './projectA.zip';

const Title = Typography.Title;

export default class ProjectA extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>Single-Cycle MIPS Processor - Project A</Title>
                        <Title level={4}>Technology: VHDL, Quartus Prime, Assembly</Title>
                        For this project, my teammate and I created a MIPS processor that reads 32 bit instruction
                        sets. Single-cycle means that the processor is only capable of executing one instruction
                        per clock cycle. We connected previously created logic components together in Quartus Prime,
                        converted it to a VHDL file and ran it in a separate program.
                        <br></br>
                        <a href={instructions} download="Project-A-Instruction.pdf">Download project description</a>
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