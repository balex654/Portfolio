import React from 'react';
import { Typography, Row, Col } from 'antd';
import demo from './aiDemo2.mov';
import alienPNG from './alien.png';
import alienPY from './alien.py';
import alienInvasionPY from './alien_invasion.py';
import ProjectFiles from './alien_invasion.zip';
import alienInvasionSS1 from './alienInvasionSS1.png';
import alienInvasionSS2 from './alienInvasionSS2.png';
import alienInvasionSS3 from './alienInvasionSS3.png';
import bulletPY from './bullet.py';
import bulletPNG from './bullet.png';
import buttonPY from './button.py';
import buttonPNG from './button.png';
import gameStatsPY from './game_stats.py';
import gameStatsPNG from './gameStats.png';
import scoreboardPNG from './scoreboard.png';
import scoreboardPY from './scoreboard.py';
import settingsPNG from './settings.png';
import settingsPY from './settings.py';
import shipPNG from './ship.png';
import shipPY from './ship.py';

const Title = Typography.Title;

export default class AlienInvasion extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>Alien Invasion Game</Title>
                        <Title level={4}>Technology: Python, Pygame, Visual Studio Code</Title>
                        This game features aliens falling from the top of the screen, a ship that moves
                        left and right when the keyboard arrows are pressed, and the ship fires bullets
                        everytime the space bar is pressed. The objective is to shoot down all the aliens
                        before they reach the bottom of the screen. After the user eliminates the aliens, a new
                        level is started and the aliens become faster each time. The amount of ships the user
                        has left is indicated in the top left of the screen. I made this game using the Pygame
                        development kit, which makes it much easier to manage game objects in Python. This
                        project is based off of a tutorial I followed in "Python Crash Course" by Eric Matthes.
                        <br></br>
                        <a href={ProjectFiles} download="Project_Files.zip">Download project files</a>
                        <br></br><br></br>
                    </Col>
                </Row>

                <Row justify="center">
                    <Col span={18}>
                        <Title level={3}>Demo</Title>
                        <video controls width='100%'>
                            <source src={demo}/>
                        </video>

                        <Title level={4}>alien_invasion.py: (The main class that is run)</Title>
                        <a href={alienInvasionPY} download="alien_invasion.py">
                            <img width='100%' src={alienInvasionSS1} alt=''/>
                            <img width='100%' src={alienInvasionSS2} alt=''/>
                            <img width='100%' src={alienInvasionSS3} alt=''/>
                        </a>

                        <Title level={4}>ship.py</Title>
                        <a href={shipPY} download="ship.py">
                            <img width='100%' src={shipPNG} alt=''/>
                        </a>

                        <Title level={4}>alien.py</Title>
                        <a href={alienPY} download="alien.py">
                            <img width='100%' src={alienPNG} alt=''/>
                        </a>

                        <Title level={4}>bullet.py</Title>
                        <a href={bulletPY} download="bullet.py">
                            <img width='100%' src={bulletPNG} alt=''/>
                        </a>

                        <Title level={4}>settings.py</Title>
                        <a href={settingsPY} download="settings.py">
                            <img width='100%' src={settingsPNG} alt=''/>
                        </a>

                        <Title level={4}>game_stats.py</Title>
                        <a href={gameStatsPY} download="game_stats.py">
                            <img width='100%' src={gameStatsPNG} alt=''/>
                        </a>

                        <Title level={4}>scoreboard.py</Title>
                        <a href={scoreboardPY} download="scoreboard.py">
                            <img width='100%' src={scoreboardPNG} alt=''/>
                        </a>

                        <Title level={4}>button.py</Title>
                        <a href={buttonPY} download="button.py">
                            <img width='100%' src={buttonPNG} alt=''/>
                        </a>
                    </Col>
                </Row>
            </>
        );
    }
}