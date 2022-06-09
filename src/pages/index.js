import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
const FontMod = {
    fontFamily: 'Roboto, sans-serif',
};
const ResponsiveText = {
    lineBreak: 'auto',
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container" style={FontMod}>
        <h1 className="hero__title" style={ResponsiveText}>Luis Vera |<span className="paragraph-1" style={{ fontSize: '60%' }}> AKA arima0k/angw97</span></h1>
        <h2 className="hero__subtitle paragraph-1" style={{ fontSize: '200%' }}>Personal Website</h2>
        <p className="hero__subtitle paragraph-1">Looking for technology that helps make the world a better place.</p>
        <p className="hero__subtitle paragraph-1">I like doing experiments (not production environment), Open-Source Enthusiast.</p>
          <p className="hero__subtitle paragraph-1">Inquisitive, intuitive, self-taught.</p>
      </div>
    </header>
  );
}

function Technology() {
  return (
    <div className="hero hero--dark" style={FontMod}>
      <div className="container">
        <h1 className="hero__title">Why tecstim?</h1>
        <p className="hero__subtitle" style={{fontSize: "99%"}}>Technology means "science of craft", from Greek τέχνη, <span style={{color: '#e17a9b'}}><b>tec</b></span>hne,
        "art, skill, cunning of hand"; and -λογία, -logia. • And κατάστημα (katá<span style={{color: '#e17a9b'}}><b>stim</b></span>a), shop, store. </p>
      </div>
    </div>
    );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      description="Luis Vera's personal website">
      <HomepageHeader />
      <Technology />
    </Layout>
  );
}