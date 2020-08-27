import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { MenuOutlined, HomeOutlined } from '@ant-design/icons';
import '../../Components/HomePage/HomePage.css';
import { Redirect } from 'react-router-dom';
import Project1 from './Project1/Project1.js';
import Project2 from './Project2/Project2.js';
import Project3 from './Project3/Project3.js';
import Project4 from './Project4/Project4.js';
import Project5 from './Project5/Project5.js';

const { Header, Content, Sider } = Layout;

export default class ComS228 extends React.Component {
    state = {
        collapsed: false,
        currentPage: "Project1"
    }

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    handleHomeClick = () => {
        this.setState({
            currentPage: "Home"
        });
    }

    handleProject1Click = () => {
        this.setState({
            currentPage: "Project1"
        });
    }

    handleProject2Click = () => {
        this.setState({
            currentPage: "Project2"
        });
    }

    handleProject3Click = () => {
        this.setState({
            currentPage: "Project3"
        });
    }

    handleProject4Click = () => {
        this.setState({
            currentPage: "Project4"
        });
    }

    handleProject5Click = () => {
        this.setState({
            currentPage: "Project5"
        });
    }

    render() {
        let page;
        let width;
        if (this.state.currentPage === "Home") {
            return <Redirect to={"/Home"}/>
        }
        else if (this.state.currentPage === "Project1") {
            page = <Project1/>
        }
        else if (this.state.currentPage === "Project2") {
            page = <Project2/>
        }
        else if (this.state.currentPage === "Project3") {
            page = <Project3/>
        }
        else if (this.state.currentPage === "Project4") {
            page = <Project4/>
        }
        else if (this.state.currentPage === "Project5") {
            page = <Project5/>
        }

        if (this.state.collapsed === true) {
            width = 80;
        }
        else {
            width = 400;
        }

        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                    breakpoint="xl"
                    width="400"
                    style={{
                        overflow: 'auto',
                        position: 'fixed',
                        height: '100vh',
                        left: 0,
                      }}
                >
                    {this.state.collapsed===true ?
                        <div className="logo-collapsed">
                        BA
                        </div>
                        :
                        <div className="logo-expanded">
                        Ben Alexander
                        </div>
                    }
                    <Menu theme="dark" defaultSelectKeys={['1']} mode="inline">
                        <Menu.Item key="7" icon={<HomeOutlined/>} onClick={this.handleHomeClick}>
                            Home
                        </Menu.Item>
                        <Menu.Divider/>
                        <Menu.Item key="1" icon={<MenuOutlined/>} onClick={this.handleProject1Click}>
                            DNA Example of Polymorphism - Project 1
                        </Menu.Item>
                        <Menu.Item key="2" icon={<MenuOutlined/>} onClick={this.handleProject2Click}>
                            Sorting Algorithm Implementations - Project 2
                        </Menu.Item>
                        <Menu.Item key="3" icon={<MenuOutlined/>} onClick={this.handleProject3Click}>
                            Created Adaptive List Object - Project 3
                        </Menu.Item>
                        <Menu.Item key="4" icon={<MenuOutlined/>} onClick={this.handleProject4Click}>
                            Tree Data Structure - Project 4
                        </Menu.Item>
                        <Menu.Item key="5" icon={<MenuOutlined/>} onClick={this.handleProject5Click}>
                            Depth First Search Implementation - Project 5
                        </Menu.Item>
                    </Menu>
                </Sider>

                <Layout className="site-layout" style={{marginLeft:width}}>
                    <Header className="site-layout-background" style={{ padding: 0 }}/>
                    <Content style={{ margin: '0 16px' }}>

                        {this.state.currentPage === "Project1" && 
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Years</Breadcrumb.Item>
                                <Breadcrumb.Item>Sophomore</Breadcrumb.Item>
                                <Breadcrumb.Item>Intro to Data Structures - Com S 228</Breadcrumb.Item>
                                <Breadcrumb.Item>DNA Example of Polymorphism - Project 1</Breadcrumb.Item>
                            </Breadcrumb>
                        }
                        {this.state.currentPage === "Project2" && 
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Years</Breadcrumb.Item>
                                <Breadcrumb.Item>Sophomore</Breadcrumb.Item>
                                <Breadcrumb.Item>Intro to Data Structures - Com S 228</Breadcrumb.Item>
                                <Breadcrumb.Item>Sorting Algorithm Implementations - Project 2</Breadcrumb.Item>
                            </Breadcrumb>
                        }
                        {this.state.currentPage === "Project3" && 
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Years</Breadcrumb.Item>
                                <Breadcrumb.Item>Sophomore</Breadcrumb.Item>
                                <Breadcrumb.Item>Intro to Data Structures - Com S 228</Breadcrumb.Item>
                                <Breadcrumb.Item>Created Adaptive List Object - Project 3</Breadcrumb.Item>
                            </Breadcrumb>
                        }
                        {this.state.currentPage === "Project4" && 
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Years</Breadcrumb.Item>
                                <Breadcrumb.Item>Sophomore</Breadcrumb.Item>
                                <Breadcrumb.Item>Intro to Data Structures - Com S 228</Breadcrumb.Item>
                                <Breadcrumb.Item>Tree Data Structure - Project 4</Breadcrumb.Item>
                            </Breadcrumb>
                        }
                        {this.state.currentPage === "Project5" && 
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Years</Breadcrumb.Item>
                                <Breadcrumb.Item>Sophomore</Breadcrumb.Item>
                                <Breadcrumb.Item>Intro to Data Structures - Com S 228</Breadcrumb.Item>
                                <Breadcrumb.Item>Depth First Search Implementation - Project 5</Breadcrumb.Item>
                            </Breadcrumb>
                        }

                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            {page}
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}