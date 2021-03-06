/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const ReactDOM = require('react-dom');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        {/*<Logo img_src={`${baseUrl}img/icon.svg`} />*/}
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            { <Button href="#try">Try It Out</Button>}
            { <Button href={docUrl('docs.html')}>Documentation</Button>}
            { <Button href={docUrl('api.html')}>API Overview</Button>}
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}
        className={props.className}
        style={props.style}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <Block layout="threeColumn"
      className="productShowcaseSection paddingBottom"
      stype={{textAlign: 'center'}}>
        {[
          {
            content: '',
            title: '',
            // image: `${baseUrl}img/code.svg`,
            imageAlign: 'left',

          },
          {
            content: 'LittleJohn can help you manage your risks and maximize your returns.',
            title: 'Simple, Intuitive, Interactive',
            // image: `${baseUrl}img/code.svg`,
            // imageAlign: 'bottom',

          },
          {
            content: '',
            title: '',
            // image: `${baseUrl}img/code.svg`,
            imageAlign: 'right',
          },

        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'This is another description of how this project is useful',
            image: `${baseUrl}img/code.svg`,
            imageAlign: 'left',
            title: 'Description',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn" background="light">
        {[
          {
            content: 'LittleJohn provides powerful tools for analyzing and hedging risk, performing simulated trades and backtests, all in realtime.',
            image: `${baseUrl}img/line-chart.svg`,
            imageAlign: 'top',
            title: 'Real time risk and trade analysis',
          },
          {
            content: 'Leveraging popular open source charting tools, LittleJohn provides the latest and greatest portfolio and market data visualization.',
            image: `${baseUrl}img/pie-chart.svg`,
            imageAlign: 'top',
            title: 'Interactive and cross-sectional visualization',
          },
        ]}
      </Block>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          {/*<Description />*/}
        </div>
      </div>
    );
  }
}

module.exports = Index;
