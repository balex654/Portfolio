import React from 'react';
import { Typography, Row, Col } from 'antd';
import BroadcastClient from './BroadcastClient.java';
import Buttons from './Buttons.java';
import ButtonsSS1 from './ButtonsSS1.png';
import ButtonsSS2 from './ButtonsSS2.png';
import ButtonsSS3 from './ButtonsSS3.png';
import client from './client.png';
import ProjectFiles from './CPRE186.zip';
import guiSS1 from './guiSS1.png';
import guiSS2 from './guiSS2.png';
import guiSS3 from './guiSS3.png';
import server from './server.png';
import ServerJava from './Server.java';
import TCPServerJava from './TCPServer.java';
import TCPServerPNG from './TCPServer.png';

const Title = Typography.Title;

export default class CPRE186 extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>Intro to Computer Eng. and Problem Solving II - Computer Eng. 186</Title>
                        <Title level={2}>Music Streaming App</Title>
                        <Title level={4}>Technology: Eclipse, Java, Local WiFi Network</Title>
                        In this class, I was in a group of four and we had to make a project for the entire
                        semester. We decided to make a music streaming app in Java. The app used a WiFi network
                        to locally send a music file to a client Raspberry Pi connected to a speaker that plays the
                        song. I was responsible for making the user interface for selecting and playing the song
                        from the serving computer. We used server sockets to transfer the file across the network
                        <br></br>
                        <a href={ProjectFiles} download="Project_Files.zip">Download project files</a>
                        <br></br><br></br>
                    </Col>
                </Row>

                <Row justify="center">
                    <Col span={18}>
                        <img width='100%' src={guiSS1} alt=''/>
                        <img width='100%' src={guiSS2} alt=''/>
                        <img width='100%' src={guiSS3} alt=''/>

                        <Title level={4}>Buttons.java (click on image to download file)</Title>
                        <a href={Buttons} download="Buttons.java">
                            <img width='100%' src={ButtonsSS1} alt=''/>
                            <img width='100%' src={ButtonsSS2} alt=''/>
                            <img width='100%' src={ButtonsSS3} alt=''/>
                        </a>

                        <Title level={4}>TCPServer.java (click on image to download file)</Title>
                        <a href={TCPServerJava} download="TCPServer.java">
                            <img width='100%' src={TCPServerPNG} alt=''/>
                        </a>

                        <Title level={4}>Server.java (click on image to download file)</Title>
                        <a href={ServerJava} download="Server.java">
                            <img width='100%' src={server} alt=''/>
                        </a>

                        <Title level={4}>BroadcastClient.java (click on image to download file): Run on the Raspbery Pi</Title>
                        <a href={BroadcastClient} download="BroadcastClient.java">
                            <img width='100%' src={client} alt=''/>
                        </a>
                    </Col>
                </Row>
            </>
        );
    }
}