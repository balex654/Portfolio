import React from 'react';
import { Typography, Row, Col } from 'antd';
import appSS1 from './appSS1.png';
import appSS2 from './appSS2.png';
import appSS3 from './appSS3.png';
import appSS4 from './appSS4.png';
import appSS5 from './appSS5.png';
import appSS6 from './appSS6.png';
import appSS7 from './appSS7.png';
import appSS8 from './appSS8.png';
import appSS9 from './appSS9.png';
import appSS10 from './appSS10.png';
import appSS11 from './appSS11.png';
import appSS12 from './appSS12.png';
import cipherQueries from './cipherQueries.png';
import ProjectFiles from './ComS363project.zip';
import ddlSS1 from './ddlSS1.png';
import ddlSS2 from './ddlSS2.png';
import ERdiagram from './ERdiagram.png';
import insertData from './insertData.png';
import projectDDL from './projectDDL.sql';
import projectInsert from './projectInsert.sql';
import Q1jsp from './Q1.jsp';
import Q1png from './Q1.png';
import Queries from './Queries.cipher';
import querySolutionsPng from './querySolutions.png';
import querySolutionsSql from './querySolutions.sql';
import resultQ1png from './resultQ1.png';
import resultQ1 from './ResultQ1.jsp';
import SQLqueries from './SQLqueries.png';

const Title = Typography.Title;

export default class ComS363 extends React.Component {
    render() {
        return (
            <>
                <Row justify="center">
                    <Col span={18}>
                        <Title level={1}>Database Management Systems - Computer Science 363</Title>
                        <Title level={3}>Database and Web Application Project</Title>
                        <Title level={4}>Technology: HTML, Java, MySQL, Neo4j Graph Database, Eclipse, Apache Server</Title>
                        This project involved designing entity-relation diagrams (ER diagram), implementing the diagram
                        in SQL DDL statements, entering over 250,000 rows of real Twitter data into the database, performing
                        complicated SQL queries on the data, optimizing these queries, and creating the same queries for a
                        corresponding Neo4j graph database.
                        <br></br><br></br>
                        For the final part of the project, my team (two others) and I used a local Apache server to make a
                        web application in Eclipse using JSP files (Java server page) that connected to the database. The
                        app allowed the user to perform the same queries as mentioned earlier on the Twitter database.
                        <br></br>
                        <a href={ProjectFiles} download="ProjectFile.zip">Download project files</a>
                        <br></br><br></br>
                    </Col>
                </Row>

                <Row justify="center">
                    <Col span={18}>
                        <Title level={4}>The entity-relation diagram</Title>
                        <img width='100%' src={ERdiagram} alt=''/>

                        <Title level={4}>projectDDL.sql (click on image to download file): This is the SQL file that implements the above design</Title>
                        <a href={projectDDL} download="projectDDL.sql">
                            <img width='100%' src={ddlSS1} alt=''/>
                            <img width='100%' src={ddlSS2} alt=''/>
                        </a>

                        <Title level={4}>projectInsert.sql (click on image to download file): This is the SQL file that inserts the data into the database from the specified csv files</Title>
                        <a href={projectInsert} download="projectInsert.sql">
                            <img width='100%' src={insertData} alt=''/>
                        </a>

                        <Title level={4}>These are the descriptions for the SQL queries that we made on the Tweet database</Title>
                        <img width='100%' src={SQLqueries} alt=''/>

                        <Title level={4}>querySolutions.sql (click on image to download file): This file contains the queries that yield the outputs of the descriptions above</Title>
                        <a href={querySolutionsSql} download="querySolutions.sql">
                            <img width='100%' src={querySolutionsPng} alt=''/>
                        </a>

                        <Title level={4}>
                            Queries.cipher (click on image to download file): These are the corresponding Neo4j (graph database) cipher queries. 
                            They give the same results as the SQL queries but are written for a graph database
                        </Title>
                        <a href={Queries} download="cipherQueries.cypher">
                            <img width='100%' src={cipherQueries} alt=''/>
                        </a>

                        <Title level={4}>The login page for the web app:</Title>
                        <img width='100%' src={appSS1} alt=''/>

                        <Title level={4}>After the user logs in, they will be able to run any of the queries on the database:</Title>
                        <img width='100%' src={appSS2} alt=''/>

                        <Title level={4}>
                            Q1.jsp (click on image to download file): HTML description for the
                            user input of the first query on the web application
                        </Title>
                        <a href={Q1jsp} download="Q1.jsp">
                            <img width='100%' src={Q1png} alt=''/>
                            <img width='100%' src={appSS3} alt=''/>
                        </a>

                        <Title level={4}>
                            ResultQ1.jsp (click on image to download file): The page that shows the results
                            of the query after the user enters the information
                        </Title>
                        <a href={resultQ1} download="ResultQ1.jsp">
                            <img width='100%' src={resultQ1png} alt=''/>
                        </a>

                        <Title level={4}>Results of Q1</Title>
                        <img width='100%' src={appSS4} alt=''/>

                        <Title level={4}>Results of Q3:</Title>
                        <img width='100%' src={appSS5} alt=''/>

                        <Title level={4}>Results of Q6:</Title>
                        <img width='100%' src={appSS6} alt=''/>

                        <Title level={4}>Results of Q9:</Title>
                        <img width='100%' src={appSS7} alt=''/>

                        <Title level={4}>Results of Q10:</Title>
                        <img width='100%' src={appSS8} alt=''/>

                        <Title level={4}>Results of Q11:</Title>
                        <img width='100%' src={appSS9} alt=''/>

                        <Title level={4}>Results of Q15:</Title>
                        <img width='100%' src={appSS10} alt=''/>

                        <Title level={4}>Results of Q18:</Title>
                        <img width='100%' src={appSS11} alt=''/>
                        
                        <Title level={4}>Results of Q23:</Title>
                        <img width='100%' src={appSS12} alt=''/>
                    </Col>
                </Row>
            </>
        );
    }
}