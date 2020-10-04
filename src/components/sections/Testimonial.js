import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

class Testimonial extends React.Component {

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
      'testimonial section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'testimonial-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: 'Recommendations',
      paragraph: ''
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

              <div className="tiles-item reveal-from-right" data-reveal-delay="200">
                <div className="tiles-item-inner">
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                    — He is a passionate programmer and always is the first to figure out any bugs with code in a team project... Tam is also very keen with problem solving and is very quick with his thinking which will make a fantastic addition to any team he joins in the future
                      </p>
                  </div>
                  <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                    <span className="testimonial-item-name text-color-high">Amanda S.</span>
                    <span className="text-color-low"> / </span>
                    <span className="testimonial-item-link">
                      Co-worker
                    </span>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom">
                <div className="tiles-item-inner">
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      — Needed a new website for our business and Tam delivered. Additionally, he taught us how to keep our website up for cheap!
                      </p>
                  </div>
                  <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                    <span className="testimonial-item-name text-color-high">LGD Professional Painting</span>
                    <span className="text-color-low"> / </span>
                    <span className="testimonial-item-link">
                      <a href="https://lgdprofessionalpainting.expert/" target="_blank">Client</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-left" data-reveal-delay="200">
                <div className="tiles-item-inner">
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      — Tam is a dependable worker. I was able to ask him to complete any task and he always exceeded expectation. He requires little to no oversight and produces quality work every time.
                      </p>
                  </div>
                  <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                    <span className="testimonial-item-name text-color-high">Rebecca Daniel</span>
                    <span className="text-color-low"> / </span>
                    <span className="testimonial-item-link">
                      Co-worker
                    </span>
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

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;