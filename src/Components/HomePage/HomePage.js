import React from 'react';
import 'antd/dist/antd.css';
import './HomePage.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  MenuOutlined,
  UserOutlined,
  StarOutlined,
} from '@ant-design/icons';
import { Redirect } from 'react-router-dom';
import About from '../About/About.js';
import LiftFlow from '../LiftFlow/LiftFlow.js';
import WorkoutTracker from '../WorkoutTracker/WorkoutTracker.js';
import ComS309 from '../ComS309/ComS309.js';
import ReactPortfolio from '../ReactPortfolio/ReactPortfolio.js';
import ComS363 from '../ComS363/ComS363.js';
import WorkoutApp from '../WorkoutApp/WorkoutApp.js';
import FirstPortfolio from '../FirstPortfolio/FirstPortfolio.js';
import CPRE186 from '../CPRE186/CPRE186.js';
import ComS319 from '../ComS319/ComS319.js';
import CPRE281 from '../CPRE281/CPRE281.js';
import CPRE310 from '../CPRE310/CPRE310.js';
import SeniorProject from '../SeniorProject/SeniorProject';
import FinalProject from '../../ClassComponents/CPRE288/FinalProject/FinalProject.js';
import AlienInvasion from '../AlienInvasion/AlienInvasion.js';
import AWSAPI from '../AWSAPI/AWSAPI.js';

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

  handleAppDevLiftFlowClick = () => {
    this.setState({
      currentPage: "Categories/AppDev/LiftFlow"
    });
  };
  handlePPLiftFlowClick = () => {
    this.setState({
      currentPage: "Categories/PersonalProjects/LiftFlow"
    });
  }
  handleDBLiftFlowClick = () => {
    this.setState({
      currentPage: "Categories/DBMS/LiftFlow"
    });
  }

  handleAppDevWorkoutTrackerClick = () => {
    this.setState({
      currentPage: "Categories/AppDev/WorkoutTracker"
    });
  }
  handleDBWorkoutTrackerClick = () => {
    this.setState({
      currentPage: "Categories/DBMS/WorkoutTracker"
    });
  }
  handlePPWorkoutTrackerClick = () => {
    this.setState({
      currentPage: "Categories/PersonalProjects/WorkoutTracker"
    });
  }

  handleAppDevComS309Click = () => {
    this.setState({
      currentPage: "Categories/AppDev/ComS309"
    });
  }
  handleJavaComS309Click = () => {
    this.setState({
      currentPage: "Categories/Java/ComS309"
    });
  }
  handleJuniorComS309Click = () => {
    this.setState({
      currentPage: "Years/Junior/ComS309"
    });
  }

  handleAppDevReactPortfolioClick = () => {
    this.setState({
      currentPage: "Categories/AppDev/ReactPortfolio"
    });
  }
  handlePPReactPortfolio = () => {
    this.setState({
      currentPage: "Categories/PersonalProjects/ReactPortfolio"
    });
  }

  handleAppDevComS363Click = () => {
    this.setState({
      currentPage: "Categories/AppDev/ComS363"
    });
  }
  handleDBMSComS363Click = () => {
    this.setState({
      currentPage: "Categories/DBMS/ComS363"
    });
  }
  handleSeniorComS363Click = () => {
    this.setState({
      currentPage: "Years/Senior/ComS363"
    });
  }

  handleAppDevWorkoutAppClick = () => {
    this.setState({
      currentPage: "Categories/AppDev/WorkoutApp"
    });
  }
  handlePPWorkoutAppClick = () => {
    this.setState({
      currentPage: "Categories/PersonalProjects/WorkoutApp"
    });
  }

  handleAppDevFirstPortfolioClick = () => {
    this.setState({
      currentPage: "Categories/AppDev/FirstPortfolio"
    });
  }
  handlePPFirstPortfolioClick = () => {
    this.setState({
      currentPage: "Categories/PersonalProjects/FirstPortfolio"
    });
  }

  handleComS227Click = () => {
    this.setState({
      currentPage: "Years/Freshman/ComS227"
    });
  }

  handleCPRE185Click = () => {
    this.setState({
      currentPage: "Years/Freshman/CPRE185"
    });
  }

  handleComS228Click = () => {
    this.setState({
      currentPage: "Years/Sophomore/ComS228"
    });
  }

  handleCPRE288Click = () => {
    this.setState({
      currentPage: "Years/Sophomore/CPRE288"
    });
  }
  handleJavaCPRE288Click = () => {
    this.setState({
      currentPage: "Categories/Java/CPRE288"
    });
  }

  handleComS311Click = () => {
    this.setState({
      currentPage: "Years/Junior/ComS311"
    });
  }

  handleCPRE381Click = () => {
    this.setState({
      currentPage: "Years/Junior/CPRE381"
    });
  }

  handleJavaComS227Click = () => {
    this.setState({
      currentPage: "Categories/Java/ComS227"
    });
  }
  handleJavaComS228Click = () => {
    this.setState({
      currentPage: "Categories/Java/ComS228"
    });
  }
  handlePythonComS311Click = () => {
    this.setState({
      currentPage: "Categories/Python/ComS311"
    });
  }
  handleLLCPRE288Click = () => {
    this.setState({
      currentPage: "Categories/LowLevel/CPRE288"
    });
  }
  handleLLCPRE381Click = () => {
    this.setState({
      currentPage: "Categories/LowLevel/CPRE381"
    });
  }
  handleLLCPRE185Click = () => {
    this.setState({
      currentPage: "Categories/LowLevel/CPRE185"
    });
  }

  handleCPRE186Click = () => {
    this.setState({
      currentPage: "Years/Freshman/CPRE186"
    });
  }
  handleJavaCPRE186Click = () => {
    this.setState({
      currentPage: "Categories/Java/CPRE186"
    });
  }

  handleComS319Click = () => {
    this.setState({
      currentPage: "Years/Sophomore/ComS319"
    });
  }

  handleCPRE281Click = () => {
    this.setState({
      currentPage: "Years/Sophomore/CPRE281"
    });
  }
  handleLLCPRE281Click = () => {
    this.setState({
      currentPage: "Categories/LowLevel/CPRE281"
    });
  }

  handleCPRE310Click = () => {
    this.setState({
      currentPage: "Years/Junior/CPRE310"
    });
  }
  handleJavaCPRE310Click = () => {
    this.setState({
      currentPage: "Categories/Java/CPRE310"
    });
  }

  handleSeniorProjectClick = () => {
    this.setState({
      currentPage: "Years/Senior/SeniorProject"
    });
  }
  handlePythonSeniorProjectClick = () => {
    this.setState({
      currentPage: "Categories/Python/SeniorProject"
    });
  }

  handlePythonAliensClick = () => {
    this.setState({
      currentPage: "Categories/Python/Aliens"
    });
  }
  handlePPAliensClick = () => {
    this.setState({
      currentPage: "Categories/PersonalProjects/Aliens"
    });
  }

  handlePPAWSAPIClick = () => {
    this.setState({
      currentPage: "Categories/PersonalProjects/AWSAPI"
    });
  }

  render() {
    let page;
    let width;
    if (this.state.currentPage === "About") {
      page = <About/>
    }
    else if (this.state.currentPage === "Categories/AppDev/LiftFlow" || this.state.currentPage === "Categories/PersonalProjects/LiftFlow" || this.state.currentPage === "Categories/DBMS/LiftFlow") {
      page = <LiftFlow/>
    }
    else if (this.state.currentPage === "Categories/AppDev/WorkoutTracker" || this.state.currentPage === "Categories/DBMS/WorkoutTracker" || this.state.currentPage === "Categories/PersonalProjects/WorkoutTracker") {
      page = <WorkoutTracker/>
    }
    else if (this.state.currentPage === "Categories/AppDev/ComS309" || this.state.currentPage === "Categories/Java/ComS309" || this.state.currentPage === "Years/Junior/ComS309") {
      page = <ComS309/>
    }
    else if (this.state.currentPage === "Categories/AppDev/ReactPortfolio" || this.state.currentPage === "Categories/PersonalProjects/ReactPortfolio") {
      page = <ReactPortfolio/>
    }
    else if (this.state.currentPage === "Categories/AppDev/ComS363" || this.state.currentPage === "Categories/DBMS/ComS363" || this.state.currentPage === "Years/Senior/ComS363") {
      page = <ComS363/>
    }
    else if (this.state.currentPage === "Categories/AppDev/WorkoutApp" || this.state.currentPage === "Categories/PersonalProjects/WorkoutApp") {
      page = <WorkoutApp/>
    }
    else if (this.state.currentPage === "Categories/AppDev/FirstPortfolio" || this.state.currentPage === "Categories/PersonalProjects/FirstPortfolio") {
      page = <FirstPortfolio/>
    }
    else if (this.state.currentPage === "Years/Freshman/ComS227") {
      return <Redirect to={{pathname: "/ComS227", state: {path: "Years/Freshman"}}}/>
    }
    else if (this.state.currentPage === "Years/Freshman/CPRE185") {
      return <Redirect to={{pathname: "/CPRE185", state: {path: "Years/Freshman"}}}/>
    }
    else if (this.state.currentPage === "Years/Sophomore/ComS228") {
      return <Redirect to={{pathname: "/ComS228", state: {path: "Years/Sophomore"}}}/>
    }
    else if (this.state.currentPage === "Years/Sophomore/CPRE288") {
      return <Redirect to={{pathname: "/CPRE288", state: {path: "Years/Sophomore"}}}/>
    }
    else if (this.state.currentPage === "Years/Junior/ComS311") {
      return <Redirect to={{pathname: "/ComS311", state: {path: "Years/Junior"}}}/>
    }
    else if (this.state.currentPage === "Years/Junior/CPRE381") {
      return <Redirect to={{pathname: "/CPRE381", state: {path: "Years/Junior"}}}/>
    }
    else if (this.state.currentPage === "Categories/Java/ComS227") {
      return <Redirect to={{pathname: "/ComS227", state: {path: "Categories/Java"}}}/>
    }
    else if (this.state.currentPage === "Categories/Java/ComS228") {
      return <Redirect to={{pathname: "/ComS228", state: {path: "Categories/Java"}}}/>
    }
    else if (this.state.currentPage === "Categories/Python/ComS311") {
      return <Redirect to={{pathname: "/ComS311", state: {path: "Categories/Python"}}}/>
    }
    else if (this.state.currentPage === "Categories/LowLevel/CPRE288") {
      return <Redirect to={{pathname: "/CPRE288", state: {path: "Categories/LowLevel"}}}/>
    }
    else if (this.state.currentPage === "Categories/LowLevel/CPRE381") {
      return <Redirect to={{pathname: "/CPRE381", state: {path: "Categories/LowLevel"}}}/>
    }
    else if (this.state.currentPage === "Categories/LowLevel/CPRE185") {
      return <Redirect to={{pathname: "/CPRE185", state: {path: "Categories/LowLevel"}}}/>
    }
    else if (this.state.currentPage === "Years/Freshman/CPRE186" || this.state.currentPage === "Categories/Java/CPRE186") {
      page = <CPRE186/>
    }
    else if (this.state.currentPage === "Years/Sophomore/ComS319") {
      page = <ComS319/>
    }
    else if (this.state.currentPage === "Years/Sophomore/CPRE281" || this.state.currentPage === "Categories/LowLevel/CPRE281") {
      page = <CPRE281/>
    }
    else if (this.state.currentPage === "Years/Junior/CPRE310" || this.state.currentPage === "Categories/Java/CPRE310") {
      page = <CPRE310/>
    }
    else if (this.state.currentPage === "Years/Senior/SeniorProject" || this.state.currentPage === "Categories/Python/SeniorProject") {
      page = <SeniorProject/>
    }
    else if (this.state.currentPage === "Categories/Java/CPRE288") {
      page = <FinalProject/>
    }
    else if (this.state.currentPage === "Categories/Python/Aliens" || this.state.currentPage === "Categories/PersonalProjects/Aliens") {
      page = <AlienInvasion/>
    }
    else if (this.state.currentPage === "Categories/PersonalProjects/AWSAPI") {
      page = <AWSAPI/>
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
                <Menu.Item key="2" onClick={this.handleAppDevLiftFlowClick} icon={<StarOutlined/>}>Fully Developed iOS App - Lift Flow</Menu.Item>
                <Menu.Item key="6" onClick={this.handleAppDevReactPortfolioClick} icon={<StarOutlined/>}>React.JS - This Portfolio</Menu.Item>
                <Menu.Item key="3" onClick={this.handleAppDevWorkoutTrackerClick} icon={<StarOutlined/>}>Mobile App to Web API - Workout Tracker</Menu.Item>
                <Menu.Item key="4" onClick={this.handleAppDevComS309Click}>Android Development Project - Com S 309</Menu.Item>
                <Menu.Item key="5" onClick={this.handleAppDevComS363Click}>Database Management Systems - Com S 363</Menu.Item>
                <Menu.Item key="7" onClick={this.handleAppDevWorkoutAppClick} icon={<StarOutlined/>}>iOS Development - Workout App</Menu.Item>
                <Menu.Item key="8" onClick={this.handleAppDevFirstPortfolioClick} icon={<StarOutlined/>}>First Portfolio - Google Cloud Services</Menu.Item>
              </SubMenu>
              <SubMenu key="java" title="Java">
                <Menu.Item key="9" onClick={this.handleJavaCPRE186Click}>Intro to Computer Eng. and Problem Solving II</Menu.Item>
                <Menu.Item key="10" onClick={this.handleJavaComS227Click}>Object-Oriented Programming - Com S 227</Menu.Item>
                <Menu.Item key="11" onClick={this.handleJavaComS228Click}>Intro to Data Structures - Com S 228</Menu.Item>
                <Menu.Item key="12" onClick={this.handleJavaCPRE288Click}>Final Project - Java GUI - CPRE 288</Menu.Item>
                <Menu.Item key="13" onClick={this.handleJavaComS309Click}>Android Development Project - Com S 309</Menu.Item>
                <Menu.Item key="14" onClick={this.handleJavaCPRE310Click}>Theoretical Foundations of Computer Eng.</Menu.Item>
              </SubMenu>
              <SubMenu key="python" title="Python">
                <Menu.Item key="15" onClick={this.handlePythonComS311Click}>Algorithm Analysis - Com S 311</Menu.Item>
                <Menu.Item key="16" onClick={this.handlePythonAliensClick}>Python - Alien Invasion Game</Menu.Item>
                <Menu.Item key="17" onClick={this.handlePythonSeniorProjectClick} icon={<StarOutlined/>}>Senior Project - Microbiology Data Entry App</Menu.Item>
              </SubMenu>
              <SubMenu key="dbm" title="Database Management">
                <Menu.Item key="18" onClick={this.handleDBLiftFlowClick} icon={<StarOutlined/>}>Fully Developed iOS App - Lift Flow</Menu.Item>
                <Menu.Item key="19" onClick={this.handleDBMSComS363Click}>Database Management Systems - Com S 363</Menu.Item>
                <Menu.Item key="20" onClick={this.handleDBWorkoutTrackerClick} icon={<StarOutlined/>}>Mobile App to Web API - Workout Tracker</Menu.Item>
              </SubMenu>
              <SubMenu key="personalProjects" title="Personal Projects" icon={<StarOutlined/>}>
                <Menu.Item key="21" onClick={this.handlePPLiftFlowClick}>Lift Flow - Fully Developed iOS App</Menu.Item>
                <Menu.Item key="22" onClick={this.handlePPReactPortfolio}>React.JS - This Portfolio</Menu.Item>
                <Menu.Item key="23" onClick={this.handlePPWorkoutTrackerClick}>Mobile App to Web API - Workout Tracker</Menu.Item>
                <Menu.Item key="24" onClick={this.handlePPAWSAPIClick}>Amazon Web Services - Web API</Menu.Item>
                <Menu.Item key="25" onClick={this.handlePPFirstPortfolioClick}>First Portfolio - Google Cloud Services</Menu.Item>
                <Menu.Item key="26" onClick={this.handlePPWorkoutAppClick}>iOS Development - Workout App</Menu.Item>
                <Menu.Item key="27" onClick={this.handlePPAliensClick}>Python - Alien Invasion Game</Menu.Item>
              </SubMenu>
              <SubMenu key="lowLevel" title="Low Level (C, Assembly, VHDL)">
                <Menu.Item key="28" onClick={this.handleLLCPRE185Click}>Intro to Computer Eng. and Problem Solving - CPRE 185</Menu.Item>
                <Menu.Item key="29" onClick={this.handleLLCPRE281Click}>Digital Logic - CPRE 281</Menu.Item>
                <Menu.Item key="30" onClick={this.handleLLCPRE288Click}>Labs 5 and 6 - CPRE 288</Menu.Item>
                <Menu.Item key="31" onClick={this.handleLLCPRE381Click}>Computer Architecture - CPRE 381</Menu.Item>
              </SubMenu>
            </SubMenu>

            <SubMenu key="years" icon={<MenuOutlined />} title="Years">
              <SubMenu key="freshman" title="Freshman">
                <Menu.Item key="32" onClick={this.handleComS227Click}>Object-Oriented Programming - Com S 227</Menu.Item>
                <Menu.Item key="33" onClick={this.handleCPRE186Click}>Intro to Computer Eng. and Problem Solving II</Menu.Item>
                <Menu.Item key="34" onClick={this.handleCPRE185Click}>Intro to Computer Eng. and Problem Solving - CPRE 185</Menu.Item>
              </SubMenu>
              <SubMenu key="sophomore" title="Sophomore">
                <Menu.Item key="35" onClick={this.handleComS228Click}>Intro to Data Structures - Com S 228</Menu.Item>
                <Menu.Item key="36" onClick={this.handleComS319Click}>Construction of User Interfaces - Com S 319</Menu.Item>
                <Menu.Item key="37" onClick={this.handleCPRE281Click}>Digital Logic - CPRE 281</Menu.Item>
                <Menu.Item key="38" onClick={this.handleCPRE288Click}>Embedded Systems - CPRE 288</Menu.Item>
              </SubMenu>
              <SubMenu key="junior" title="Junior">
                <Menu.Item key="39" onClick={this.handleJuniorComS309Click}>Android Development Project - Com S 309</Menu.Item>
                <Menu.Item key="40" onClick={this.handleComS311Click}>Algorithm Analysis - Com S 311</Menu.Item>
                <Menu.Item key="41" onClick={this.handleCPRE381Click}>Computer Architecture - CPRE 381</Menu.Item>
                <Menu.Item key="42" onClick={this.handleCPRE310Click}>Theoretical Foundations of Computer Eng.</Menu.Item>
              </SubMenu>
              <SubMenu key="senior" title="Senior">
                <Menu.Item key="43" onClick={this.handleSeniorComS363Click}>Database Management Systems - Com S 363</Menu.Item>
                <Menu.Item key="44" onClick={this.handleSeniorProjectClick}>Microbiology Data Entry App - Senior Project</Menu.Item>
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
            {this.state.currentPage === "Categories/PersonalProjects/LiftFlow" &&
              <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Categories</Breadcrumb.Item>
                <Breadcrumb.Item>Personal Projects</Breadcrumb.Item>
                <Breadcrumb.Item>Lift Flow - Fully Developed iOS App</Breadcrumb.Item>
              </Breadcrumb>
            }
            {this.state.currentPage === "Categories/DBMS/LiftFlow" &&
              <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Categories</Breadcrumb.Item>
                <Breadcrumb.Item>Database Management</Breadcrumb.Item>
                <Breadcrumb.Item>Lift Flow - Fully Developed iOS App</Breadcrumb.Item>
              </Breadcrumb>
            }
            {this.state.currentPage === "Categories/DBMS/WorkoutTracker" &&
              <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Categories</Breadcrumb.Item>
                <Breadcrumb.Item>Database Management</Breadcrumb.Item>
                <Breadcrumb.Item>Mobile App to Web API - Workout Tracker</Breadcrumb.Item>
              </Breadcrumb>
            }
            {this.state.currentPage === "Categories/PersonalProjects/WorkoutTracker" &&
              <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Categories</Breadcrumb.Item>
                <Breadcrumb.Item>Personal Projects</Breadcrumb.Item>
                <Breadcrumb.Item>Mobile App to Web API - Workout Tracker</Breadcrumb.Item>
              </Breadcrumb>
            }
            {this.state.currentPage === "Categories/AppDev/ComS309" &&
              <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Categories</Breadcrumb.Item>
                <Breadcrumb.Item>App Development</Breadcrumb.Item>
                <Breadcrumb.Item>Android Development Project - Com S 309</Breadcrumb.Item>
              </Breadcrumb>
            }
            {this.state.currentPage === "Categories/Java/ComS309" &&
              <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Categories</Breadcrumb.Item>
                <Breadcrumb.Item>Java</Breadcrumb.Item>
                <Breadcrumb.Item>Android Development Project - Com S 309</Breadcrumb.Item>
              </Breadcrumb>
            }
            {this.state.currentPage === "Years/Junior/ComS309" &&
              <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Years</Breadcrumb.Item>
                <Breadcrumb.Item>Junior</Breadcrumb.Item>
                <Breadcrumb.Item>Android Development Project - Com S 309</Breadcrumb.Item>
              </Breadcrumb>
            }
            {this.state.currentPage === "Categories/AppDev/ReactPortfolio" &&
              <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Categories</Breadcrumb.Item>
                <Breadcrumb.Item>App Development</Breadcrumb.Item>
                <Breadcrumb.Item>React.JS - This Portfolio</Breadcrumb.Item>
              </Breadcrumb>
            }
            {this.state.currentPage === "Categories/PersonalProjects/ReactPortfolio" &&
              <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Categories</Breadcrumb.Item>
                <Breadcrumb.Item>Personal Projects</Breadcrumb.Item>
                <Breadcrumb.Item>React.JS - This Portfolio</Breadcrumb.Item>
              </Breadcrumb>
            }
            {this.state.currentPage === "Categories/AppDev/ComS363" &&
              <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Categories</Breadcrumb.Item>
                <Breadcrumb.Item>App Development</Breadcrumb.Item>
                <Breadcrumb.Item>Database Management Systems - Computer Science 363</Breadcrumb.Item>
              </Breadcrumb>
            }
            {this.state.currentPage === "Categories/DBMS/ComS363" &&
              <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Categories</Breadcrumb.Item>
                <Breadcrumb.Item>Database Management</Breadcrumb.Item>
                <Breadcrumb.Item>Database Management Systems - Computer Science 363</Breadcrumb.Item>
              </Breadcrumb>
            }
            {this.state.currentPage === "Years/Senior/ComS363" &&
              <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Years</Breadcrumb.Item>
                <Breadcrumb.Item>Senior</Breadcrumb.Item>
                <Breadcrumb.Item>Database Management Systems - Computer Science 363</Breadcrumb.Item>
              </Breadcrumb>
            }
            {this.state.currentPage === "Categories/AppDev/WorkoutApp" &&
              <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Categories</Breadcrumb.Item>
                <Breadcrumb.Item>App Development</Breadcrumb.Item>
                <Breadcrumb.Item>iOS Development - Workout App</Breadcrumb.Item>
              </Breadcrumb>
            }
            {this.state.currentPage === "Categories/PersonalProjects/WorkoutApp" &&
              <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Categories</Breadcrumb.Item>
                <Breadcrumb.Item>Personal Projects</Breadcrumb.Item>
                <Breadcrumb.Item>iOS Development - Workout App</Breadcrumb.Item>
              </Breadcrumb>
            }
            {this.state.currentPage === "Categories/AppDev/FirstPortfolio" &&
              <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Categories</Breadcrumb.Item>
                <Breadcrumb.Item>App Development</Breadcrumb.Item>
                <Breadcrumb.Item>First Portfolio - Google Cloud Services</Breadcrumb.Item>
              </Breadcrumb>
            }
            {this.state.currentPage === "Categories/PersonalProjects/FirstPortfolio" &&
              <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Categories</Breadcrumb.Item>
                <Breadcrumb.Item>Personal Projects</Breadcrumb.Item>
                <Breadcrumb.Item>First Portfolio - Google Cloud Services</Breadcrumb.Item>
              </Breadcrumb>
            }
            {this.state.currentPage === "Years/Freshman/CPRE186" &&
              <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Years</Breadcrumb.Item>
                <Breadcrumb.Item>Freshman</Breadcrumb.Item>
                <Breadcrumb.Item>Intro to Computer Eng. and Problem Solving II</Breadcrumb.Item>
              </Breadcrumb>
            }
            {this.state.currentPage === "Categories/Java/CPRE186" &&
              <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Categories</Breadcrumb.Item>
                <Breadcrumb.Item>Java</Breadcrumb.Item>
                <Breadcrumb.Item>Intro to Computer Eng. and Problem Solving II</Breadcrumb.Item>
              </Breadcrumb>
            }
            {this.state.currentPage === "Years/Sophomore/ComS319" &&
              <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Years</Breadcrumb.Item>
                <Breadcrumb.Item>Sophomore</Breadcrumb.Item>
                <Breadcrumb.Item>Construction of User Interfaces - Com S 319</Breadcrumb.Item>
              </Breadcrumb>
            }
            {this.state.currentPage === "Years/Sophomore/CPRE281" &&
              <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Years</Breadcrumb.Item>
                <Breadcrumb.Item>Sophomore</Breadcrumb.Item>
                <Breadcrumb.Item>Digital Logic - CPRE 281</Breadcrumb.Item>
              </Breadcrumb>
            }
            {this.state.currentPage === "Categories/LowLevel/CPRE281" &&
              <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Categories</Breadcrumb.Item>
                <Breadcrumb.Item>LowLevel</Breadcrumb.Item>
                <Breadcrumb.Item>Digital Logic - CPRE 281</Breadcrumb.Item>
              </Breadcrumb>
            }
            {this.state.currentPage === "Years/Junior/CPRE310" &&
              <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Years</Breadcrumb.Item>
                <Breadcrumb.Item>Junior</Breadcrumb.Item>
                <Breadcrumb.Item>Theoretical Foundations of Computer Eng.</Breadcrumb.Item>
              </Breadcrumb>
            }
            {this.state.currentPage === "Categories/Java/CPRE310" &&
              <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Categories</Breadcrumb.Item>
                <Breadcrumb.Item>Java</Breadcrumb.Item>
                <Breadcrumb.Item>Theoretical Foundations of Computer Eng.</Breadcrumb.Item>
              </Breadcrumb>
            }
            {this.state.currentPage === "Years/Senior/SeniorProject" &&
              <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Years</Breadcrumb.Item>
                <Breadcrumb.Item>Senior</Breadcrumb.Item>
                <Breadcrumb.Item>Microbiology Data Entry App - Senior Project</Breadcrumb.Item>
              </Breadcrumb>
            }
            {this.state.currentPage === "Categories/Python/SeniorProject" &&
              <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Categories</Breadcrumb.Item>
                <Breadcrumb.Item>Python</Breadcrumb.Item>
                <Breadcrumb.Item>Microbiology Data Entry App - Senior Project</Breadcrumb.Item>
              </Breadcrumb>
            }
            {this.state.currentPage === "Categories/Java/CPRE288" &&
              <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Categories</Breadcrumb.Item>
                <Breadcrumb.Item>Java</Breadcrumb.Item>
                <Breadcrumb.Item>Java GUI - Final Project - CPRE 288</Breadcrumb.Item>
              </Breadcrumb>
            }
            {this.state.currentPage === "Categories/Python/Aliens" &&
              <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Categories</Breadcrumb.Item>
                <Breadcrumb.Item>Python</Breadcrumb.Item>
              </Breadcrumb>
            }
            {this.state.currentPage === "Categories/PersonalProjects/Aliens" &&
              <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Categories</Breadcrumb.Item>
                <Breadcrumb.Item>Personal Projects</Breadcrumb.Item>
              </Breadcrumb>
            }
            {this.state.currentPage === "Categories/PersonalProjects/AWSAPI" &&
              <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Categories</Breadcrumb.Item>
                <Breadcrumb.Item>Personal Projects</Breadcrumb.Item>
                <Breadcrumb.Item>Amazon Web Services - Web API</Breadcrumb.Item>
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