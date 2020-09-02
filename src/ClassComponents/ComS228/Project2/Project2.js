import React from 'react';
import { Typography, Row, Col } from 'antd';
import AbstractSorter from './AbstractSorter.java';
import AbstractSorterSS1 from './AbstractSorterSS1.png';
import AbstractSorterSS2 from './AbstractSorterSS2.png';
import AbstractSorterSS3 from './AbstractSorterSS3.png';
import CompareSorters from './CompareSorters.java';
import CompareSortersSS1 from './CompareSortersSS1.png';
import CompareSortersSS2 from './CompareSortersSS2.png';
import ProjectFiles from './hw2.zip';
import InsertionSorterJava from './InsertionSorter.java';
import InsertionSorterPNG from './InsertionSorter.png';
import InsertionSorterTest from './InsertionSorterTest.java';
import InsertTest from './InsertTest.png';
import InsertTest2 from './InsertTest2.png';
import MergeSorter from './MergeSorter.java';
import MergeSorterSS1 from './MergeSorterSS1.png';
import MergeSorterSS2 from './MergeSorterSS2.png';
import output from './output.png';
import PACSS1 from './PACSS1.png';
import PACSS2 from './PACSS2.png';
import PointJava from './Point.java';
import PointPNG from './Point.png';
import PolarAngleComparator from './PolarAngleComparator.java';
import QuickSorter from './QuickSorter.java';
import QuickSorterSS1 from './QuickSorterSS1.png';
import QuickSorterSS2 from './QuickSorterSS2.png';
import SelectionSorterJava from './SelectionSorter.java';
import SelectionSorterPNG from './SelectionSorter.png';

const Title = Typography.Title;

export default class Project2 extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>Sorting Algorithm Implementations - Project 2</Title>
                        <Title level={4}>Technology: Java, Eclipse</Title>
                        For this project, I implemented algorithms such as insertion sort, merge sort,
                        quick sort, and selection sort to sort points from lowest to highest. The user had
                        a choice of the points being in a cartesian graph format or a polar angle graph format.
                        I also used an abstract class called AbstractSorter that's used by the sorting
                        classes to adapt to the chosen sorting method and format (cartesian vs polar).
                        <br></br>
                        <a href={ProjectFiles} download="Project_Files.zip">Download project files</a>
                        <br></br><br></br>
                    </Col>
                </Row>

                <Row justify="center">
                    <Col span={24}>
                        <Title level={4}>InsertionSorterTest.java (click on image to download file)</Title>
                        <a href={InsertionSorterTest} download="InsertionSorterTest.java">
                            <img width='100%' src={InsertTest} alt=''/>
                            <img width='100%' src={InsertTest2} alt=''/>
                        </a>

                        <Title level={4}>Output of the above test case, the test cases for the rest of the algorithms are the same</Title>
                        <img width='50%' src={output} alt=''/>

                        <Title level={4}>Point.java (click on image to download file)</Title>
                        <a href={PointJava} download="Point.java">
                            <img width='100%' src={PointPNG} alt=''/>
                        </a>

                        <Title level={4}>Point.java (click on image to download file)</Title>
                        <a href={PointJava} download="Point.java">
                            <img width='100%' src={PointPNG} alt=''/>
                        </a>

                        <Title level={4}>PolarAngleComparator.java (click on image to download file)</Title>
                        <a href={PolarAngleComparator} download="PolarAngleComparator.java">
                            <img width='100%' src={PACSS1} alt=''/>
                            <img width='100%' src={PACSS2} alt=''/>
                        </a>

                        <Title level={4}>AbstractSorter.java (click on image to download file)</Title>
                        <a href={AbstractSorter} download="AbstractSorter.java">
                            <img width='100%' src={AbstractSorterSS1} alt=''/>
                            <img width='100%' src={AbstractSorterSS2} alt=''/>
                            <img width='100%' src={AbstractSorterSS3} alt=''/>
                        </a>

                        <Title level={4}>CompareSorters.java (click on image to download file)</Title>
                        <a href={CompareSorters} download="CompareSorters.java">
                            <img width='100%' src={CompareSortersSS1} alt=''/>
                            <img width='100%' src={CompareSortersSS2} alt=''/>
                        </a>

                        <Title level={4}>InsertionSorter.java (click on image to download file)</Title>
                        <a href={InsertionSorterJava} download="InsertionSorter.java">
                            <img width='100%' src={InsertionSorterPNG} alt=''/>
                        </a>

                        <Title level={4}>MergeSorter.java (click on image to download file)</Title>
                        <a href={MergeSorter} download="MergeSorter.java">
                            <img width='100%' src={MergeSorterSS1} alt=''/>
                            <img width='100%' src={MergeSorterSS2} alt=''/>
                        </a>

                        <Title level={4}>QuickSorter.java (click on image to download file)</Title>
                        <a href={QuickSorter} download="QuickSorter.java">
                            <img width='100%' src={QuickSorterSS1} alt=''/>
                            <img width='100%' src={QuickSorterSS2} alt=''/>
                        </a>

                        <Title level={4}>SelectionSorter.java (click on image to download file)</Title>
                        <a href={SelectionSorterJava} download="SelectionSorter.java">
                            <img width='100%' src={SelectionSorterPNG} alt=''/>
                        </a>
                    </Col>
                </Row>
            </>
        );
    }
}