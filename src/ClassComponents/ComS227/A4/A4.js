import React from 'react';
import { Typography, Row, Col } from 'antd';
import ProjectFiles from './assignment4.zip';
import CellUtilJava from './CellUtil.java';
import CellUtilPNG from './CellUtil.png';
import FoodJava from './Food.java';
import FoodPNG from './food.png';
import gui from './guiSS1.png';
import SnakeHeadJava from './SnakeHead.java';
import SnakeHeadPNG from './SnakeHead.png';
import SquareMapJava from './SquareMap.java';
import SquareMapPNG from './SquareMap.png';
import WallJava from './Wall.java';
import WallPNG from './wall.png';

const Title = Typography.Title;

export default class ComS227A4 extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>Snake Game - Assignment 4</Title>
                        <Title level={4}>Technology: Java, Eclipse</Title>
                        Similar to the previous assignment, I implemented the logic that controls a snake
                        game. As shown in the screenshot, the snake's head is the teal square and the body
                        is the red squares. The snake follows your cursor and eats flashing squares to grow
                        in length. If the snake runs into itself it's game over.
                        <br></br>
                        <a href={ProjectFiles} download="Project_Files.zip">Download project files</a>
                        <br></br><br></br>
                    </Col>
                </Row>

                <Row justify="center">
                    <Col span={18}>
                        <img width='100%' src={gui} alt=''/>

                        <Title level={4}>SnakeHead.java (click on image to download file)</Title>
                        <a href={SnakeHeadJava} download="SnakeHead.java">
                            <img width='100%' src={SnakeHeadPNG} alt=''/>
                        </a>

                        <Title level={4}>SquareMap.java (click on image to download file)</Title>
                        <a href={SquareMapJava} download="SquareMap.java">
                            <img width='100%' src={SquareMapPNG} alt=''/>
                        </a>

                        <Title level={4}>Wall.java (click on image to download file)</Title>
                        <a href={WallJava} download="Wall.java">
                            <img width='100%' src={WallPNG} alt=''/>
                        </a>

                        <Title level={4}>Food.java (click on image to download file)</Title>
                        <a href={FoodJava} download="Food.java">
                            <img width='100%' src={FoodPNG} alt=''/>
                        </a>

                        <Title level={4}>CellUtil.java (click on image to download file)</Title>
                        <a href={CellUtilJava} download="CellUtil.java">
                            <img width='100%' src={CellUtilPNG} alt=''/>
                        </a>
                    </Col>
                </Row>
            </>
        );
    }
}