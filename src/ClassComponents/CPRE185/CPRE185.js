import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { MenuOutlined, HomeOutlined } from '@ant-design/icons';
import '../../Components/HomePage/HomePage.css';
import { Redirect } from 'react-router-dom';
import Lab6 from './Lab6/Lab6.js';
import Lab7 from './Lab7/Lab7.js';
import Lab8 from './Lab8/Lab8.js';
import Lab9 from './Lab9/Lab9.js';

const { Header, Content, Sider } = Layout;

export default class CPRE185 extends React.Component {
    state = {
        collapsed: false,
        currentPage: "Lab6"
    }

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    handleHomeClick = () => {
        this.setState({
            currentPage: "Home"
        });
    }

    handleLab6Click = () => {
        this.setState({
            currentPage: "Lab6"
        });
    }

    handleLab7Click = () => {
        this.setState({
            currentPage: "Lab7"
        });
    }

    handleLab8Click = () => {
        this.setState({
            currentPage: "Lab8"
        });
    }

    handleLab9Click = () => {
        this.setState({
            currentPage: "Lab9"
        });
    }

    render() {
        let page;
        let width;
        let pathItem1 = "default";
        let pathItem2 = "default";

        if (this.state.currentPage === "Home") {
            return <Redirect to={"/Home"}/>
        }
        else if (this.state.currentPage === "Lab6") {
            page = <Lab6/>
        }
        else if (this.state.currentPage === "Lab7") {
            page = <Lab7/>
        }
        else if (this.state.currentPage === "Lab8") {
            page = <Lab8/>
        }
        else if (this.state.currentPage === "Lab9") {
            page = <Lab9/>
        }

        if (this.props.location.state.path === "Categories/LowLevel") {
            pathItem1 = "Categories"
            pathItem2 = "Low Level"
        }
        else if (this.props.location.state.path === "Years/Freshman") {
            pathItem1 = "Years"
            pathItem2 = "Freshman"
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
                        <Menu.Item key="1" icon={<MenuOutlined/>} onClick={this.handleLab6Click}>
                            Accelerometer Drop Testing - Lab 6
                        </Menu.Item>
                        <Menu.Item key="2" icon={<MenuOutlined/>} onClick={this.handleLab7Click}>
                            Accelerometer Tilt Visualization - Lab 7
                        </Menu.Item>
                        <Menu.Item key="3" icon={<MenuOutlined/>} onClick={this.handleLab8Click}>
                            Moving Averages with Accelerometer - Lab 8
                        </Menu.Item>
                        <Menu.Item key="4" icon={<MenuOutlined/>} onClick={this.handleLab9Click}>
                            Word Builder - Lab 9
                        </Menu.Item>
                    </Menu>
                </Sider>

                <Layout className="site-layout" style={{marginLeft:width}}>
                    <Header className="site-layout-background" style={{ padding: 0 }}/>
                    <Content style={{ margin: '0 16px' }}>
                        
                        {this.state.currentPage === "Lab6" && 
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>{pathItem1}</Breadcrumb.Item>
                                <Breadcrumb.Item>{pathItem2}</Breadcrumb.Item>
                                <Breadcrumb.Item>Intro to Computer Eng. and Problem Solving - CPRE 185</Breadcrumb.Item>
                                <Breadcrumb.Item>Accelerometer Drop Testing - Lab 6</Breadcrumb.Item>
                            </Breadcrumb>
                        }
                        {this.state.currentPage === "Lab7" && 
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>{pathItem1}</Breadcrumb.Item>
                                <Breadcrumb.Item>{pathItem2}</Breadcrumb.Item>
                                <Breadcrumb.Item>Intro to Computer Eng. and Problem Solving - CPRE 185</Breadcrumb.Item>
                                <Breadcrumb.Item>Accelerometer Tilt Visualization - Lab 7</Breadcrumb.Item>
                            </Breadcrumb>
                        }
                        {this.state.currentPage === "Lab8" && 
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>{pathItem1}</Breadcrumb.Item>
                                <Breadcrumb.Item>{pathItem2}</Breadcrumb.Item>
                                <Breadcrumb.Item>Intro to Computer Eng. and Problem Solving - CPRE 185</Breadcrumb.Item>
                                <Breadcrumb.Item>Moving Averages with Accelerometer - Lab 8</Breadcrumb.Item>
                            </Breadcrumb>
                        }
                        {this.state.currentPage === "Lab9" && 
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>{pathItem1}</Breadcrumb.Item>
                                <Breadcrumb.Item>{pathItem2}</Breadcrumb.Item>
                                <Breadcrumb.Item>Intro to Computer Eng. and Problem Solving - CPRE 185</Breadcrumb.Item>
                                <Breadcrumb.Item>Word Builder - Lab 9</Breadcrumb.Item>
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