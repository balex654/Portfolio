import React from 'react';
import { Typography, Row, Col } from 'antd';
import ThreebitPAregister from './3bitPAregister.png';
import SevenSegDecoder from './7segDecoder.png';
import EightThreeEncoder from './8-3encoder.png';
import comparator from './comparator.png';
import counter from './counter.png';
import decoder from './decoder.png';
import FinalCircuit from './FinalCircuit.png';
import registerFile from './registerFile.png';

const Title = Typography.Title;

export default class CPRE281 extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>Digital Logic - CPRE 281</Title>
                        <Title level={2}>Digital Combination Lock Project</Title>
                        <Title level={4}>Technology: VHDL, Quartus Prime, FPGA board</Title>
                        In this class we used a field programmable gate array board (FPGA) to implement basic
                        logic components that comprises computer hardware. We used a program call Quartus Prime
                        to create the block diagrams of the components and sent them to the board.
                        <br></br><br></br>
                        For the final project, I created a digital combination lock using the switches, the
                        seven-segment displays, and the LEDs on the board. The user could set a combination,
                        enter a combination, and reset a combination.
                        <br></br><br></br>
                    </Col>
                </Row>

                <Row justify="center">
                    <Col span={24}>
                        <Title level={4}>Final Circuit Diagram</Title>
                        <img width='100%' src={FinalCircuit} alt=''/>

                        <Title level={4}>Register File</Title>
                        <img width='100%' src={registerFile} alt=''/>

                        <Title level={4}>Decoder</Title>
                        <img width='100%' src={decoder} alt=''/>

                        <Title level={4}>Counter</Title>
                        <img width='100%' src={counter} alt=''/>

                        <Title level={4}>Comparator</Title>
                        <img width='100%' src={comparator} alt=''/>

                        <Title level={4}>8-3 Encoder</Title>
                        <img width='100%' src={EightThreeEncoder} alt=''/>

                        <Title level={4}>Seven Segment Decoder</Title>
                        <img width='50%' src={SevenSegDecoder} alt=''/>

                        <Title level={4}>Three Bit Parallel Access Register</Title>
                        <img width='100%' src={ThreebitPAregister} alt=''/>
                    </Col>
                </Row>
            </>
        );
    }
}