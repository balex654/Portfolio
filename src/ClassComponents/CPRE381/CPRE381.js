import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { MenuOutlined, HomeOutlined } from '@ant-design/icons';
import '../../Components/HomePage/HomePage.css';
import { Redirect } from 'react-router-dom';
import ProjectA from './ProjectA/ProjectA.js';
import ProjectB from './ProjectB/ProjectB.js';

const { Header, Content, Sider } = Layout;

export default class CPRE381 extends React.Component {
    state = {
        collapsed: false,
        currentPage: "ProjectA"
    }

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    handleHomeClick = () => {
        this.setState({
            currentPage: "Home"
        });
    }

    handleProjectAClick = () => {
        this.setState({
            currentPage: "ProjectA"
        });
    }

    handleProjectBClick = () => {
        this.setState({
            currentPage: "ProjectB"
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
        else if (this.state.currentPage === "ProjectA") {
            page = <ProjectA/>
        }
        else if (this.state.currentPage === "ProjectB") {
            page = <ProjectB/>
        }

        if (this.props.location.state.path === "Categories/LowLevel") {
            pathItem1 = "Categories"
            pathItem2 = "Low Level"
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
                        <Menu.Item key="1" icon={<MenuOutlined/>} onClick={this.handleProjectAClick}>
                            Single-Cycle MIPS Processor - Project A
                        </Menu.Item>
                        <Menu.Item key="2" icon={<MenuOutlined/>} onClick={this.handleProjectBClick}>
                            32-bit MIPS Pipline Processor - Project B
                        </Menu.Item>
                    </Menu>
                </Sider>

                <Layout className="site-layout" style={{marginLeft:width}}>
                    <Header className="site-layout-background" style={{ padding: 0 }}/>
                    <Content style={{ margin: '0 16px' }}>

                        {this.state.currentPage === "ProjectA" && 
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>{pathItem1}</Breadcrumb.Item>
                                <Breadcrumb.Item>{pathItem2}</Breadcrumb.Item>
                                <Breadcrumb.Item>Computer Architecture - CPRE 381</Breadcrumb.Item>
                                <Breadcrumb.Item>Single-Cycle MIPS Processor - Project A</Breadcrumb.Item>
                            </Breadcrumb>
                        }
                        {this.state.currentPage === "ProjectB" && 
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>{pathItem1}</Breadcrumb.Item>
                                <Breadcrumb.Item>{pathItem2}</Breadcrumb.Item>
                                <Breadcrumb.Item>Computer Architecture - CPRE 381</Breadcrumb.Item>
                                <Breadcrumb.Item>32-bit MIPS Pipline Processor - Project B</Breadcrumb.Item>
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