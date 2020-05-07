import React from 'react';
import './stylesheet/App.scss';
import Projects from './components/projects';
import FadeInSection from './components/fadeinslide';
import Education from './components/education';
import Experiences from './components/experiences';
import { Navbar, Container } from 'react-bootstrap';
function App() {
  return (
    <>
    
      <FadeInSection>
        <div className="app-header">
          <div className="welcome-text">Welcome to Tam's</div>
          <h1>Portfolio 2020</h1>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="diagonalTop"/>
        <div className="diagonalContent">
          {/* <FadeInSection> */}
            <h2 className="section-title">Quick Description</h2>
            <hr className="section-hr"/>
            <div id="summary" className="center">
              I'm a Software Engineer with a Bachelor of Science in Computer Science from Washington State University. 
              I enjoy building a useful and meaningful app, but random quirky projects are pretty fun too. 
              I have dipped my toes in a variety of projects, ranging from web dev to AI. Feel free to visit my <a href="https://github.com/tamnguyen98" target="_blank">Github page</a>
            </div>
          {/* </FadeInSection> */}
        </div>
        <div className="diagonalBottom"/>
      </FadeInSection>
      <Projects/>
      <Education/>
      <Experiences/>
      <Navbar sticky="bottom">
      </Navbar>
    </>
  );
}

export default App;
