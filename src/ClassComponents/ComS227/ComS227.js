import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { MenuOutlined, HomeOutlined } from '@ant-design/icons';
import '../../Components/HomePage/HomePage.css';
import { Redirect } from 'react-router-dom';
import A1 from './A1/A1.js';
import A2 from './A2/A2.js';
import A3 from './A3/A3.js';
import A4 from './A4/A4.js';
import TallyClass from './TallyClass/TallyClass.js';
import TransClasses from './TransClasses/TransClasses.js';

const { Header, Content, Sider } = Layout;

export default class ComS227 extends React.Component {
    state = {
        collapsed: false,
        currentPage: "A1"
    }

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    handleHomeClick = () => {
        this.setState({
            currentPage: "Home"
        });
    }

    handleA1Click = () => {
        this.setState({
            currentPage: "A1"
        });
    }

    handleA2Click = () => {
        this.setState({
            currentPage: "A2"
        });
    }

    handleA3Click = () => {
        this.setState({
            currentPage: "A3"
        });
    }

    handleA4Click = () => {
        this.setState({
            currentPage: "A4"
        });
    }

    handleTallyClassClick = () => {
        this.setState({
            currentPage: "TallyClass"
        });
    }

    handleTransClassesClick = () => {
        this.setState({
            currentPage: "TransClasses"
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
        else if (this.state.currentPage === "A1") {
            page = <A1/>
        }
        else if (this.state.currentPage === "A2") {
            page = <A2/>
        }
        else if (this.state.currentPage === "A3") {
            page = <A3/>
        }
        else if (this.state.currentPage === "A4") {
            page = <A4/>
        }
        else if (this.state.currentPage === "TallyClass") {
            page = <TallyClass/>
        }
        else if (this.state.currentPage === "TransClasses") {
            page = <TransClasses/>
        }

        if (this.props.location.state.path === "Categories/Java") {
            pathItem1 = "Categories"
            pathItem2 = "Java"
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
                        <Menu.Item key="1" icon={<MenuOutlined/>} onClick={this.handleA1Click}>
                            Simple Television Class - Assignment 1
                        </Menu.Item>
                        <Menu.Item key="2" icon={<MenuOutlined/>} onClick={this.handleA2Click}>
                            Football Game Class - Assignment 2
                        </Menu.Item>
                        <Menu.Item key="3" icon={<MenuOutlined/>} onClick={this.handleA3Click}>
                            Color Flow Game - Assignment 3
                        </Menu.Item>
                        <Menu.Item key="4" icon={<MenuOutlined/>} onClick={this.handleA4Click}>
                            Snake Game - Assignment 4
                        </Menu.Item>
                        <Menu.Item key="5" icon={<MenuOutlined/>} onClick={this.handleTallyClassClick}>
                            Tally Class - Assignment 1
                        </Menu.Item>
                        <Menu.Item key="6" icon={<MenuOutlined/>} onClick={this.handleTransClassesClick}>
                            Transformation Classes - Assignment 2
                        </Menu.Item>
                    </Menu>
                </Sider>

                <Layout className="site-layout" style={{marginLeft:width}}>
                    <Header className="site-layout-background" style={{ padding: 0 }}/>
                    <Content style={{ margin: '0 16px' }}>

                        {this.state.currentPage === "A1" && 
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>{pathItem1}</Breadcrumb.Item>
                                <Breadcrumb.Item>{pathItem2}</Breadcrumb.Item>
                                <Breadcrumb.Item>Object-Oriented Programming - Com S 227</Breadcrumb.Item>
                                <Breadcrumb.Item>Simple Television Class - Assignment 1</Breadcrumb.Item>
                            </Breadcrumb>
                        }
                        {this.state.currentPage === "A2" && 
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>{pathItem1}</Breadcrumb.Item>
                                <Breadcrumb.Item>{pathItem2}</Breadcrumb.Item>
                                <Breadcrumb.Item>Object-Oriented Programming - Com S 227</Breadcrumb.Item>
                                <Breadcrumb.Item>Football Game Class - Assignment 2</Breadcrumb.Item>
                            </Breadcrumb>
                        }
                        {this.state.currentPage === "A3" && 
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>{pathItem1}</Breadcrumb.Item>
                                <Breadcrumb.Item>{pathItem2}</Breadcrumb.Item>
                                <Breadcrumb.Item>Object-Oriented Programming - Com S 227</Breadcrumb.Item>
                                <Breadcrumb.Item>Color Flow Game - Assignment 3</Breadcrumb.Item>
                            </Breadcrumb>
                        }
                        {this.state.currentPage === "A4" && 
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>{pathItem1}</Breadcrumb.Item>
                                <Breadcrumb.Item>{pathItem2}</Breadcrumb.Item>
                                <Breadcrumb.Item>Object-Oriented Programming - Com S 227</Breadcrumb.Item>
                                <Breadcrumb.Item>Snake Game - Assignment 4</Breadcrumb.Item>
                            </Breadcrumb>
                        }
                        {this.state.currentPage === "TallyClass" && 
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>{pathItem1}</Breadcrumb.Item>
                                <Breadcrumb.Item>{pathItem2}</Breadcrumb.Item>
                                <Breadcrumb.Item>Object-Oriented Programming - Com S 227</Breadcrumb.Item>
                                <Breadcrumb.Item>Tally Class - Assignment 1</Breadcrumb.Item>
                            </Breadcrumb>
                        }
                        {this.state.currentPage === "TransClasses" && 
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>{pathItem1}</Breadcrumb.Item>
                                <Breadcrumb.Item>{pathItem2}</Breadcrumb.Item>
                                <Breadcrumb.Item>Object-Oriented Programming - Com S 227</Breadcrumb.Item>
                                <Breadcrumb.Item>Transformation Classes - Assignment 2</Breadcrumb.Item>
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