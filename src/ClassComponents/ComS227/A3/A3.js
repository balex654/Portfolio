import React from 'react';
import { Typography, Row, Col } from 'antd';
import ProjectFiles from './assignment3.zip';
import FlowGame from './FlowGame.java';
import FlowGameSS1 from './FlowGameSS1.png';
import FlowGameSS2 from './FlowGameSS2.png';
import FlowGameSS3 from './FlowGameSS3.png';
import guiSS1 from './guiSS1.png';
import guiSS2 from './guiSS2.png';
import guiSS3 from './guiSS3.png';
import Util from './Util.java';
import UtilSS1 from './UtilSS1.png';
import UtilSS2 from './UtilSS2.png';

const Title = Typography.Title;

export default class ComS227A3 extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>Color Flow Game - Assignment 3</Title>
                        <Title level={4}>Technology: Java, Eclipse</Title>
                        <li>Implemented the logic of a color flow game</li>
                        <li>Has ability to create a game from an input string or file</li>
                        <br></br>
                        <a href={ProjectFiles} download="Project_Files.zip">Download project files</a>
                        <br></br><br></br>
                    </Col>
                </Row>

                <Row justify="center">
                    <Col span={18}>
                        <img width='33%' src={guiSS1} alt=''/>
                        <img width='33%' src={guiSS2} alt=''/>
                        <img width='33%' src={guiSS3} alt=''/>

                        <Title level={4}>FlowGame.java (click on image to download file)</Title>
                        <a href={FlowGame} download="FlowGame.java">
                            <img width='100%' src={FlowGameSS1} alt=''/>
                            <img width='100%' src={FlowGameSS2} alt=''/>
                            <img width='100%' src={FlowGameSS3} alt=''/>
                        </a>

                        <Title level={4}>Util.java (click on image to download file)</Title>
                        <a href={Util} download="Util.java">
                            <img width='100%' src={UtilSS1} alt=''/>
                            <img width='100%' src={UtilSS2} alt=''/>
                        </a>
                    </Col>
                </Row>
            </>
        );
    }
}