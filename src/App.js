import React from 'react';
import './stylesheet/App.scss';
import Projects from './components/projects';
import FadeInSection from './components/fadein';
import Education from './components/education';

function App() {
  return (
    <>
    
      <FadeInSection>
        <div className="app-header">
          <div className="welcome-text">Welcome to Tam's</div>
          <h1>Portfolio 2020</h1>
        </div>
      </FadeInSection>
        <div className="diagonalTop"/>
        <div className="diagonalContent">
          {/* <FadeInSection> */}
            <h2 className="section-title">Quick Description</h2>
            <div id="summary" className="center">
              I'm a Software Engineer with a Bachelor of Science in Computer Science from Washington
              State University. I enjoy building useful and meaningful app, but random quirky projects
              are pretty fun too. I have dipped my toes in variety of projects, ranging from web dev to
              AI.
            </div>
          {/* </FadeInSection> */}
        </div>
        <div className="diagonalBottom"/>
      <Projects/>
      <Education/>
    </>
  );
}

export default App;
