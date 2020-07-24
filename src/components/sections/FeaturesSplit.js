import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

class FeaturesSplit extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,      
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      invertMobile,
      invertDesktop,
      alignTop,
      imageFill,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'features-split section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'features-split-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const splitClasses = classNames(
      'split-wrap',
      invertMobile && 'invert-mobile',
      invertDesktop && 'invert-desktop',
      alignTop && 'align-top'
    );

    const sectionHeader = {
      title: 'Some awesome works',
      paragraph: 'Below are some works that I\'m proud of. They\'re not in any specific order, and some may be a lot newer than others. Additionally, if they\'re open source, you can click the title to visit the git repository.'
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={splitClasses}>

              <div className="split-item">
                <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                  <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                    Independent Project
                  </div>
                  <h3 className="mt-0 mb-12">
                    <a href="https://github.com/tamnguyen98/Update-Transfer-Only" target="_blank">Transfer app's update only tool</a>
                  </h3>
                  <p className="m-0">
                    This tool was made in Java so that it can work cross-platform, and what it does is it scans through an old copy of the application, keeps track of every file's last modified date and then compares it to a recently updated directory and see what was changed (update) in the application's directory. From there, it copies <u>only</u> the changes to the destination.
                  </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item">
                  <Image
                    src={require('./../../assets/images/project1.jpg')}
                    alt="Features split 01"
                    width={528}
                    height={396} />
                </div>
              </div>

              <div className="split-item">
                <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                  <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                    Group Project (2)
                  </div>                  
                  <h3 className="mt-0 mb-12">
                    Skin Care Analyzer
                  </h3>
                  <p className="m-0">
                  As seen from the video, this app lets the user take a picture of their <i>skin care product</i>'s ingredients, which will grab the text using an OCR to analyze and calculate the quality of the product.
                  </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item">
                  <iframe width="560" height="335" src="https://www.youtube-nocookie.com/embed/4pR0RKU0lqs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>

              <div className="split-item">
                <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                  <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                    Independent Work
                  </div>                  
                  <h3 className="mt-0 mb-12">
                    <a href="https://github.com/autolab/Autolab/pull/1139" target="_blank">Autolab dark theme implementation</a>
                  </h3>
                  <p className="m-0">
                  For my capstone project at WSU, I was working on implementing <a href="http://www.autolabproject.com/" target="_blank">Autolab</a>'s latest update onto the school system. During that time, one of my big projects was implementing a dark mode theme that users can toggle on and off and have it reload the theme when they signed in again. Because of the success, I decide to make a PR to the original repo.
                  </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item">
                  <Image
                    src={require('./../../assets/images/autolab.gif')}
                    alt="Features split 03"
                    width={528}
                    height={396} />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;