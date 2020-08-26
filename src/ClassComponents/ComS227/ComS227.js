import React from 'react';
import { Layout, Menu } from 'antd';
import { MenuOutlined, HomeOutlined } from '@ant-design/icons';
import '../../Components/HomePage/HomePage.css';
import { Redirect } from 'react-router-dom';

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

    render() {
        let page;
        let width;
        if (this.state.currentPage === "Home") {
            return <Redirect to={"/Home"}/>
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
                        <Menu.Item key="1" icon={<MenuOutlined/>}>
                            Simple Television Class - Assignment 1
                        </Menu.Item>
                        <Menu.Item key="2" icon={<MenuOutlined/>}>
                            Football Game Class - Assignment 2
                        </Menu.Item>
                        <Menu.Item key="3" icon={<MenuOutlined/>}>
                            Color Flow Class - Assignment 3
                        </Menu.Item>
                        <Menu.Item key="4" icon={<MenuOutlined/>}>
                            Snake Game - Assignment 4
                        </Menu.Item>
                        <Menu.Item key="5" icon={<MenuOutlined/>}>
                            Tally Class - Assignment 1
                        </Menu.Item>
                        <Menu.Item key="6" icon={<MenuOutlined/>}>
                            Transformation Classes - Assignment 2
                        </Menu.Item>
                    </Menu>
                </Sider>

                <Layout className="site-layout" style={{marginLeft:width}}>
                    <Header className="site-layout-background" style={{ padding: 0 }}/>
                    <Content style={{ margin: '0 16px' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            {page}
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}