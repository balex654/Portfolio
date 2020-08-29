import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { MenuOutlined, HomeOutlined } from '@ant-design/icons';
import '../../Components/HomePage/HomePage.css';
import { Redirect } from 'react-router-dom';
import Project1 from './Project1/Project1.js';
import Project2 from './Project2/Project2.js';

const { Header, Content, Sider } = Layout;

export default class ComS311 extends React.Component {
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

    render() {
        let page;
        let width;
        let pathItem1 = "default";
        let pathItem2 = "default";

        if (this.state.currentPage === "Home") {
            return <Redirect to={"/Home"}/>
        }
        else if (this.state.currentPage === "Project1") {
            page = <Project1/>
        }
        else if (this.state.currentPage === "Project2") {
            page = <Project2/>
        }

        if (this.props.location.state.path === "Categories/Python") {
            pathItem1 = "Categories"
            pathItem2 = "Python"
        }
        else if (this.props.location.state.path === "Years/Junior") {
            pathItem1 = "Years"
            pathItem2 = "Junior"
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
                            Graph Traversal Algorithms (Shortest path algorithms) - Project 1
                        </Menu.Item>
                        <Menu.Item key="2" icon={<MenuOutlined/>} onClick={this.handleProject2Click}>
                            String Matching Algorithms (Word Searching) - Project 2
                        </Menu.Item>
                    </Menu>
                </Sider>

                <Layout className="site-layout" style={{marginLeft:width}}>
                    <Header className="site-layout-background" style={{ padding: 0 }}/>
                    <Content style={{ margin: '0 16px' }}>
                        
                        {this.state.currentPage === "Project1" && 
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>{pathItem1}</Breadcrumb.Item>
                                <Breadcrumb.Item>{pathItem2}</Breadcrumb.Item>
                                <Breadcrumb.Item>Algorithm Analysis - Com S 311</Breadcrumb.Item>
                                <Breadcrumb.Item>Graph Traversal Algorithms (Shortest path algorithms) - Project 1</Breadcrumb.Item>
                            </Breadcrumb>
                        }
                        {this.state.currentPage === "Project2" && 
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>{pathItem1}</Breadcrumb.Item>
                                <Breadcrumb.Item>{pathItem2}</Breadcrumb.Item>
                                <Breadcrumb.Item>Algorithm Analysis - Com S 311</Breadcrumb.Item>
                                <Breadcrumb.Item>String Matching Algorithms (Word Searching) - Project 2</Breadcrumb.Item>
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