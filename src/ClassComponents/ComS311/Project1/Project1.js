import React from 'react';
import { Typography, Row, Col } from 'antd';
import project1Q1 from './project1Q1.png'
import project1Q2 from './project1Q2.png'
import project1Q3ss1 from './project1Q3ss1.png'
import project1Q3ss2 from './project1Q3ss2.png'
import project1Q4ss1 from './project1Q4ss1.png'
import project1Q4ss2 from './project1Q4ss2.png'
import q1 from './q1.py';
import q3 from './q3.py';
import q4 from './q4.py';
import q5 from './q5.py';


const Title = Typography.Title;

export default class Project1 extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>Graph Traversal Algorithms (Shortest path algorithms) - Project 1</Title>
                        <Title level={4}>Technology: Python, Visual Studio Code</Title>
                        <Title level={2}>Graph Representation</Title>
                        The strings at the bottom of the file represent the graph with the first character of the
                        first line indicating whether the graph is directed (D) or undirected (U). The second character
                        on the first line indicated how many nodes are in the graph. The rest of the lines indicate the edges,
                        with the first number being the starting node and the second character being the ending node.
                        <Title level={2}>Question 1</Title>
                        For this, I implemented a breadth first search algorithm on a directed graph with the analogy of using wall outlet adapters. The scenario
                        for the problem is that you are in a different country that uses a different type of wall outlet and you
                        have a certain amount of different adapters with you that convert your charger's type to the wall outlet type.
                        The algorithm outputs the least amount of adapters that you have to link together in order to convert your
                        charger to the wall outlet.
                        <br></br><br></br>
                    </Col>
                </Row>

                <Row justify="center">
                    <Col span={18}>
                        <Title level={4}>q1.py (click on image to download code)</Title>
                        <a href={q1} download="q1.py">
                            <img width='100%' src={project1Q1} alt=''/>
                        </a>

                        <Title level={2}>Question 2</Title>
                        This algorithm performs a topological sort on a directed graph.
                        <Title level={4}>q2.py (click on image to download code)</Title>
                        <a href={q3} download="q2.py">
                            <img width='100%' src={project1Q2} alt=''/>
                        </a>

                        <Title level={2}>Question 3</Title>
                        The scenario for this question is you are at a building on a college campus and you need to get
                        to another building via walkways taking the route with the least distance. The scenario uses an undirected
                        graph with the nodes being the buildings and the edges being the walkways. The graph representation is
                        the same as the directed graph's but there is a third number in each edge description which represents
                        the weight of the edge (walkway distance). The 'W' in the first line of the description indicates that
                        the graph is weighted. The algorithm finds the shortest path using Prim's algorithm.
                        <Title level={4}>q3.py (click on image to download code)</Title>
                        <a href={q4} download="q3.py">
                            <img width='100%' src={project1Q3ss1} alt=''/>
                            <img width='100%' src={project1Q3ss2} alt=''/>
                        </a>

                        <Title level={2}>Question 4</Title>
                        This question uses Dijkstra's algorithm on an undirected weighted graph which is represented the
                        same way as the previous question. The algorithm find the shortest distances from a starting node
                        to every other node in the graph and returns the maximum of these distances.
                        <Title level={4}>q4.py (click on image to download code)</Title>
                        <a href={q5} download="q4.py">
                            <img width='100%' src={project1Q4ss1} alt=''/>
                            <img width='100%' src={project1Q4ss2} alt=''/>
                        </a>
                    </Col>
                </Row>
            </>
        );
    }
}