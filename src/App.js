import React from 'react';
import './App.css';
import { Layout, Content } from 'react-mdl';
import Routing from './components/routing';
import {Navbar, Container} from 'react-bootstrap'
import { Link, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


function App() {
  return (
    <div id="main">
    <Layout>
        <Container className="nav-bar">
            <Navbar expand="lg" sticky="top" variant="dark" style={{justifyContent:"center"}} className="importance-bold">
                <Navbar.Brand><Link className="font-color" to="/">HOME</Link></Navbar.Brand>
                <Navbar.Brand><Link className="font-color" to="/about">ABOUT</Link></Navbar.Brand>
                <Navbar.Brand><Link className="font-color" onClick={window.scrollTo({ top: 0, behavior: 'smooth' })} to="/projects">PROJECTS</Link></Navbar.Brand>
            </Navbar>
        </Container>
        
        <Content>
            <div className="page">
                <Route render={({location}) => (
                    <TransitionGroup>
                        <CSSTransition
                        key={location.key}
                        timeout={700}
                        classNames="fade">
                            <Routing location={location}/>
                        </CSSTransition>
                    </TransitionGroup>
                )}/>
            </div>
        </Content>
    </Layout>
  </div>  
  );
}

export default App;
