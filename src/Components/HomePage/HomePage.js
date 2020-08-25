import React from 'react';
import 'antd/dist/antd.css';
import './HomePage.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  MenuOutlined,
  UserOutlined,
  StarOutlined,
} from '@ant-design/icons';
import About from '../About/About.js';
import LiftFlow from '../LiftFlow/LiftFlow.js';
import WorkoutTracker from '../WorkoutTracker/WorkoutTracker.js';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

export default class HomePage extends React.Component {
  state = {
    collapsed: false,
    currentPage: "About"
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  handleAboutClick = () => {
    this.setState({
      currentPage: "About"
    });
  };

  handleCategoriesClick = () => {
    this.setState({
      
    });
  }

  handleLiftFlowClick = () => {
    this.setState({
      currentPage: "Categories/AppDev/LiftFlow"
    });
  };

  handleAppDevWorkoutTrackerClick = () => {
    this.setState({
      currentPage: "Categories/AppDev/WorkoutTracker"
    });
  }

  render() {
    let page;
    let width;
    if (this.state.currentPage === "About") {
      page = <About/>
    }
    else if (this.state.currentPage === "Categories/AppDev/LiftFlow") {
      page = <LiftFlow/>
    }
    else if (this.state.currentPage === "Categories/AppDev/WorkoutTracker") {
      page = <WorkoutTracker/>
    }
    else {
      page = <div>another page</div>
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
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item disabled={true}>Star = Personal Project</Menu.Item>
            <Menu.Divider/>
            <Menu.Item key="1" icon={<UserOutlined />} onClick={this.handleAboutClick}>
              About
            </Menu.Item>

            <SubMenu key="categories" icon={<MenuOutlined />} title="Categories" onClick={this.handleCategoriesClick}>
              <SubMenu key="appDev" title="App Development">
                <Menu.Item key="2" onClick={this.handleLiftFlowClick} icon={<StarOutlined/>}>Fully Developed iOS App - Lift Flow</Menu.Item>
                <Menu.Item key="6">React.JS - This Portfolio</Menu.Item>
                <Menu.Item key="3"onClick={this.handleAppDevWorkoutTrackerClick} icon={<StarOutlined/>}>Mobile App to Web API - Workout Tracker</Menu.Item>
                <Menu.Item key="4">Android Development Project - Com S 309</Menu.Item>
                <Menu.Item key="5">Database Management Systems - Com S 363</Menu.Item>
                <Menu.Item key="7">iOS Development - Workout App</Menu.Item>
                <Menu.Item key="8">Google Cloud Services - First Portfolio</Menu.Item>
              </SubMenu>
              <SubMenu key="java" title="Java">
                <Menu.Item key="9">Intro to Computer Eng. and Problem Solving II</Menu.Item>
                <Menu.Item key="10">Object-Oriented Programming - Com S 227</Menu.Item>
                <Menu.Item key="11">Intro to Data Structures - Com S 228</Menu.Item>
                <Menu.Item key="12">Final Project - Java GUI - CPRE 288</Menu.Item>
                <Menu.Item key="13">Android Development Project</Menu.Item>
                <Menu.Item key="14">Theoretical Foundations of Computer Eng.</Menu.Item>
              </SubMenu>
              <SubMenu key="python" title="Python">
                <Menu.Item key="15">Algorithm Analysis - Com S 311</Menu.Item>
                <Menu.Item key="16">Python - Alien Invasion Game</Menu.Item>
                <Menu.Item key="17">Senior Project - Microbiology Data Entry App</Menu.Item>
              </SubMenu>
              <SubMenu key="dbm" title="Database Management">
                <Menu.Item key="18">Fully Developed iOS App - Lift Flow</Menu.Item>
                <Menu.Item key="19">Database Management Systems - Com S 363</Menu.Item>
                <Menu.Item key="20">Mobile App to Web API - Workout Tracker</Menu.Item>
              </SubMenu>
              <SubMenu key="personalProjects" title="Personal Projects" icon={<StarOutlined/>}>
                <Menu.Item key="21">Lift Flow - Fully Developed iOS App</Menu.Item>
                <Menu.Item key="22">React.JS - This Portfolio</Menu.Item>
                <Menu.Item key="23">Mobile App to Web API - Workout Tracker</Menu.Item>
                <Menu.Item key="24">Amazon Web Services - Web API</Menu.Item>
                <Menu.Item key="25">Google Cloud Services - First Portfolio</Menu.Item>
                <Menu.Item key="26">iOS Development - Workout App</Menu.Item>
                <Menu.Item key="27">Python - Alien Invasion Game</Menu.Item>
              </SubMenu>
              <SubMenu key="lowLevel" title="Low Level (C, Assembly, VHDL)">
                <Menu.Item key="28">Intro to Computer Eng. and Problem Solving - CPRE 185</Menu.Item>
                <Menu.Item key="29">Digital Logic - CPRE 281</Menu.Item>
                <Menu.Item key="30">Labs 5 and 6 - CPRE 288</Menu.Item>
                <Menu.Item key="31">Computer Architecture - CPRE 381</Menu.Item>
              </SubMenu>
            </SubMenu>

            <SubMenu key="years" icon={<MenuOutlined />} title="Years">
              <SubMenu key="freshman" title="Freshman">
                <Menu.Item key="32">Object-Oriented Programming - Com S 227</Menu.Item>
                <Menu.Item key="33">Intro to Computer Eng. and Problem Solving II</Menu.Item>
                <Menu.Item key="34">Intro to Computer Eng. and Problem Solving - CPRE 185</Menu.Item>
              </SubMenu>
              <SubMenu key="sophomore" title="Sophomore">
                <Menu.Item key="35">Intro to Data Structures - Com S 228</Menu.Item>
                <Menu.Item key="36">Construction of User Interfaces - Com S 319</Menu.Item>
                <Menu.Item key="37">Digital Logic - CPRE 281</Menu.Item>
                <Menu.Item key="38">Embedded Systems - CPRE 288</Menu.Item>
              </SubMenu>
              <SubMenu key="junior" title="Junior">
                <Menu.Item key="39">Android Development Project - Com S 309</Menu.Item>
                <Menu.Item key="40">Algorithm Analysis - Com S 311</Menu.Item>
                <Menu.Item key="41">Computer Architecture - CPRE 381</Menu.Item>
                <Menu.Item key="42">Theoretical Foundations of Computer Eng.</Menu.Item>
              </SubMenu>
              <SubMenu key="senior" title="Senior">
                <Menu.Item key="43">Database Management Systems - Com S 363</Menu.Item>
                <Menu.Item key="44">Senior Project - Microbiology Data Entry App</Menu.Item>
              </SubMenu>
            </SubMenu>
          </Menu>
        </Sider>
        
        <Layout className="site-layout" style={{marginLeft:width}}>
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>

            {this.state.currentPage === "Categories/AppDev/LiftFlow" && 
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Categories</Breadcrumb.Item>
                <Breadcrumb.Item>App Development</Breadcrumb.Item>
                <Breadcrumb.Item>Lift Flow - Fully Developed iOS App</Breadcrumb.Item>
              </Breadcrumb>
            }
            {this.state.currentPage === "Categories/AppDev/WorkoutTracker" &&
              <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Categories</Breadcrumb.Item>
                <Breadcrumb.Item>App Development</Breadcrumb.Item>
                <Breadcrumb.Item>Mobile App to Web API - Workout Tracker</Breadcrumb.Item>
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