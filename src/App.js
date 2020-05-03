import React from 'react';
import './stylesheet/App.scss';
import Projects from './components/projects';

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    let dc = domRef.current;
    observer.observe(dc);
    return () => observer.unobserve(dc);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}` + ' ' + props.class}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

function App() {
  return (
    <>
      <div className="app-header">
        <FadeInSection>
          <div className="welcome-text">Welcome to Tam's</div>
          <h1>Portfolio 2020</h1>
        </FadeInSection>
      </div>
      <FadeInSection>
        <div className="diagonalTop"/>
        <h2 className="section-title diagonalContent">Quick Description</h2>
        <div id="summary" className="diagonalContent center-80">
          I'm a Software Engineer with a Bachelor of Science in Computer Science from Washington
          State University. I enjoy building useful and meaningful app, but random quirky projects
          are pretty fun too. I have dipped my toes in variety of projects, ranging from web dev to
          AI.
        </div>
        <div className="diagonalBottom"/>
      </FadeInSection>
      <Projects/>
    </>
  );
}

export default App;
