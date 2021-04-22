import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Layout, Menu, Row, Col, Card } from 'antd';
import Country from "./pages/Country";
import About from "./pages/About";
import WeatherCity from "./component/WeatherCity";

// import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './App.css';


const { Header } = Layout;

function App() {
  return (
    <div className="App">
        <Layout>
            <Router>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">
                            <Link to="/">Home</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/country">Country</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/About">About</Link>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Switch>
                    <Route path="/country" exact component={Country} />
                    <Route path="/about"  component={About} />
                </Switch>
            </Router>
            <div className="page-content" style={{ height : 'calc(100vh - 70px)'}}>
                <Row justify="center" style={{ alignItems: 'center', height: '100%' }}>
                    <Col span={8}>
                        <Card>
                            <WeatherCity />
                        </Card>
                    </Col>
                </Row>
            </div>

        </Layout>
    </div>
  );
}

export default App;
