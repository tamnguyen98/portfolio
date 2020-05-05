import React from 'react';



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

export default FadeInSection;
