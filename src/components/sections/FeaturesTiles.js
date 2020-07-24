import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

class FeaturesTiles extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,      
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      pushLeft,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'features-tiles section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'features-tiles-inner section-inner pt-0',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap center-content',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: 'Get to know me',
      paragraph: 'I\'m a graduate at Washington State University with a Bachelor of Science in Computer Science and an Associate of Science in Computer Science at Clark College.\
      Some of my skills includes (but not limited to)...'
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={tilesClasses}>

              <div className="tiles-item reveal-from-bottom">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8 text-color-primary">
                      Java
                    </h4>
                    <p className="m-0 text-sm">
                      With Java, I have build a variety of projects, ranging from Android App Dev. to file tracking and manipulation apps.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8 text-color-primary" >
                      C
                    </h4>
                    <p className="m-0 text-sm">
                      The projects I've built some projects using C consists of low-level data parsing to telecommunication via TCP connections with the ability of file transfer.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8 text-color-primary">
                      Python
                    </h4>
                    <p className="m-0 text-sm">
                    With Python, I've made some of the most useful tools (for myself) more often than other languages, such as a browser automation tool to automatically clock me in and out of work everyday.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8 text-color-primary">
                      C#
                    </h4>
                    <p className="m-0 text-sm">
                    The things I've spent programming in C# were only for Game Development using Unity Engine and self-teaching myself ASP.NET (MVC/API).
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8 text-color-primary">
                      HTML/CSS/JS
                    </h4>
                    <p className="m-0 text-sm">
                    Although I do not favor Front End Web Dev. I have the right amount of experience under my belt, such as Web Dev for a client as a freelancer, and working on this website using React.JS
                    </p>
                  </div>
                </div>
              </div> 

            </div>
          </div>
        </div>
      </section>
    );
  }
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;