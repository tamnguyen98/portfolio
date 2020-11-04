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
                    C# (Winform) Project
                  </div>
                  <h3 className="mt-0 mb-12">
                    <a href="https://github.com/tamnguyen98/Doorbell-notifier" target="_blank">Doorbell Notifier</a>
                  </h3>
                  <p className="m-0">
                    A hardware and software project that alerts your Windows PC when someone rang your doorbell. This is good if your room is far from the bell and you often listen to music through headphones.
                  </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item">
                    <video class="vjs-tech" id="vjs_video_1035_html5_api" tabindex="-1" role="application" preload="metadata" muted="muted" src="https://dms.licdn.com/playlist/C4E05AQEKcMvyTaZzmw/mp4-720p-30fp-crf28/0?e=1604548800&amp;v=beta&amp;t=L8PPJIyzrOPUZppqmELBDDMb136XSJyGNYF53kQCGfU" autoplay="autoplay"></video>
                  
                </div>
              </div>

            <div className="split-item">
                <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                  <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                    C# (Winform) Project
                  </div>
                  <h3 className="mt-0 mb-12">
                    <a href="https://github.com/tamnguyen98/Img4Ppt" target="_blank">Image for Powerpoint</a>
                  </h3>
                  <p className="m-0">
                    This windows application is made with Winform to provide images based on the title and <b>bolded phrases</b> in the description and generate a Powerpoint file.
                  </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item">
                  <Image
                    src="https://github.com/tamnguyen98/Img4Ppt/raw/master/Application-Preview.png"
                    alt="Features split 01"
                    width={528}
                    height={396} />
                </div>
              </div>

              <div className="split-item">
                <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                  <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                    Java Project
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
                    Android Project
                  </div>                  
                  <h3 className="mt-0 mb-12">
                    <a href="https://play.google.com/store/apps/details?id=info.ingredientchecker.imgscanner">Skin Care Analyzer</a>
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
                  <Image
                    src={require('./../../assets/images/Skin Care Image.jpg')}
                    alt="Features split 03"
                    width={528}
                    height={396} />
                </div>
              </div>

              <div className="split-item">
                <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                  <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                    Ruby on Rails Project
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