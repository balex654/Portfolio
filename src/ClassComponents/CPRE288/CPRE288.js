import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { MenuOutlined, HomeOutlined } from '@ant-design/icons';
import '../../Components/HomePage/HomePage.css';
import { Redirect } from 'react-router-dom';
import FinalProject from './FinalProject/FinalProject.js';
import Lab5 from './Lab5/Lab5.js';
import Lab6 from './Lab6/Lab6.js';

const { Header, Content, Sider } = Layout;

export default class CPRE288 extends React.Component {
    state = {
        collapsed: false,
        currentPage: "FinalProject"
    }

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    handleHomeClick = () => {
        this.setState({
            currentPage: "Home"
        });
    }

    handleFinalProjectClick = () => {
        this.setState({
            currentPage: "FinalProject"
        });
    }

    handleLab5Click = () => {
        this.setState({
            currentPage: "Lab5"
        });
    }

    handleLab6Click = () => {
        this.setState({
            currentPage: "Lab6"
        });
    }

    render() {
        let page;
        let width;
        if (this.state.currentPage === "Home") {
            return <Redirect to={"/Home"}/>
        }
        else if (this.state.currentPage === "FinalProject") {
            page = <FinalProject/>
        }
        else if (this.state.currentPage === "Lab5") {
            page = <Lab5/>
        }
        else if (this.state.currentPage === "Lab6") {
            page = <Lab6/>
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
                        <Menu.Item key="1" icon={<MenuOutlined/>} onClick={this.handleFinalProjectClick}>
                            Java GUI - Final Project
                        </Menu.Item>
                        <Menu.Item key="2" icon={<MenuOutlined/>} onClick={this.handleLab5Click}>
                            Implementing WiFi Connectivity - Lab 5
                        </Menu.Item>
                        <Menu.Item key="3" icon={<MenuOutlined/>} onClick={this.handleLab6Click}>
                            Analog to Digital Converter - Lab 6
                        </Menu.Item>
                    </Menu>
                </Sider>

                <Layout className="site-layout" style={{marginLeft:width}}>
                    <Header className="site-layout-background" style={{ padding: 0 }}/>
                    <Content style={{ margin: '0 16px' }}>

                        {this.state.currentPage === "FinalProject" && 
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Years</Breadcrumb.Item>
                                <Breadcrumb.Item>Sophomore</Breadcrumb.Item>
                                <Breadcrumb.Item>Embedded Systems - CPRE 288</Breadcrumb.Item>
                                <Breadcrumb.Item>Java GUI - Final Project</Breadcrumb.Item>
                            </Breadcrumb>
                        }
                        {this.state.currentPage === "Lab5" && 
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Years</Breadcrumb.Item>
                                <Breadcrumb.Item>Sophomore</Breadcrumb.Item>
                                <Breadcrumb.Item>Embedded Systems - CPRE 288</Breadcrumb.Item>
                                <Breadcrumb.Item>Implementing WiFi Connectivity - Lab 5</Breadcrumb.Item>
                            </Breadcrumb>
                        }
                        {this.state.currentPage === "Lab6" && 
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Years</Breadcrumb.Item>
                                <Breadcrumb.Item>Sophomore</Breadcrumb.Item>
                                <Breadcrumb.Item>Embedded Systems - CPRE 288</Breadcrumb.Item>
                                <Breadcrumb.Item>Analog to Digital Converter - Lab 6</Breadcrumb.Item>
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