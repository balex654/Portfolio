import React from 'react';
import { Typography, Row, Col } from 'antd';
import ProjectFiles from './assignment1.zip';
import GameMainJava from './GameMain.java';
import GameMainPNG from './GameMain.png';
import TicTacToe from './TicTacToe.java';
import TicTacToeSS1 from './TicTacToeSS1.png';
import TicTacToeSS2 from './TicTacToeSS2.png';
import UI1 from './UI1.png';
import UI2 from './UI2.png';
import UI3 from './UI3.png';

const Title = Typography.Title;

export default class ComS319 extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>Construction of User Interfaces - Com S 319</Title>
                        <Title level={2}>Tic-Tac-Toe Game in Java</Title>
                        <Title level={4}>Technology: Java, Eclipse</Title>
                        For this assignment, I was tasked with creating a tic-tac-toe game with a working UI
                        using any language of my choice. I chose Java because of my class experience with it.
                        <br></br>
                        <a href={ProjectFiles} download="Project_Files.zip">Download project files</a>
                        <br></br><br></br>
                    </Col>
                </Row>

                <Row justify="center">
                    <Col span={18}>
                        <img width='33%' src={UI1} alt=''/>
                        <img width='33%' src={UI2} alt=''/>
                        <img width='33%' src={UI3} alt=''/>

                        <Title level={4}>TicTacToe.java (click on image to download file)</Title>
                        <a href={TicTacToe} download="TicTacToe.java">
                            <img width='100%' src={TicTacToeSS1} alt=''/>
                            <img width='100%' src={TicTacToeSS2} alt=''/>
                        </a>

                        <Title level={4}>GameMain.java (click on image to download file)</Title>
                        <a href={GameMainJava} download="GameMain.java">
                            <img width='100%' src={GameMainPNG} alt=''/>
                        </a>
                    </Col>
                </Row>
            </>
        );
    }
}