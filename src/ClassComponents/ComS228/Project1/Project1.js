import React from 'react';
import { Typography, Row, Col } from 'antd';
import BioSeqDataJava from './BioSeqData.java';
import BioSeqDataPNG from './BioSeqData.png';
import BSDoutput from './BSDoutput.png';
import DNASequenceJava from './DNASequence.java';
import DNASequencePNG from './DNASequence.png';
import GenDNASequencePNG from './GenDNAsequence.png';
import GenDNASequenceJava from './GenomicDNASequence.java';
import ProjectFiles from './hw1.zip';
import ProteinSequenceJava from './ProteinSequence.java';
import ProteinSequencePNG from './ProteinSequence.png';
import Sequence from './Sequence.java';
import SequenceSS1 from './SequenceSS1.png';
import SequenceSS2 from './SequenceSS2.png';

const Title = Typography.Title;

export default class Project1 extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>DNA Example of Polymorphism - Project 1</Title>
                        <Title level={4}>Technology: Java, Eclipse</Title>
                        This project involved displaying data about example biological sequences. This kind of data is
                        good for experimenting with polymorphism because there are subtypes of DNA sequences such as
                        genomic DNA sequences and protein sequences.
                        <br></br>
                        <a href={ProjectFiles} download="Project_Files.zip">Download project files</a>
                        <br></br><br></br>
                    </Col>
                </Row>

                <Row justify="center">
                    <Col span={18}>
                        <Title level={4}>Sequence.java (click on image to download file)</Title>
                        <a href={Sequence} download="Sequence.java">
                            <img width='100%' src={SequenceSS1} alt=''/>
                            <img width='100%' src={SequenceSS2} alt=''/>
                        </a>

                        <Title level={4}>DNASequence.java (click on image to download file)</Title>
                        <a href={DNASequenceJava} download="DNASequence.java">
                            <img width='100%' src={DNASequencePNG} alt=''/>
                        </a>

                        <Title level={4}>GenomicDNASequence.java (click on image to download file)</Title>
                        <a href={GenDNASequenceJava} download="GenomicDNASequence.java">
                            <img width='100%' src={GenDNASequencePNG} alt=''/>
                        </a>

                        <Title level={4}>ProteinSequence.java (click on image to download file)</Title>
                        <a href={ProteinSequenceJava} download="ProteinSequence.java">
                            <img width='100%' src={ProteinSequencePNG} alt=''/>
                        </a>

                        <Title level={4}>BioSeqData.java (click on image to download file)</Title>
                        <a href={BioSeqDataJava} download="BioSeqData.java">
                            <img width='100%' src={BioSeqDataPNG} alt=''/>
                        </a>

                        <Title level={4}>Example output of BioSeqData.java</Title>
                        <img width='100%' src={BSDoutput} alt=''/>
                    </Col>
                </Row>
            </>
        );
    }
}