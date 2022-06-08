import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
const Roboto = {
    fontFamily: 'Roboto, sans-serif'
};

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container" style={Roboto}>
        <h1 className="hero__title">Luis Vera
            |<span style={{fontSize: "60%", color: "#57001b" }}> AKA arima0k / angw97</span></h1>
        <h2 className="hero__subtitle">Personal Website</h2>
        <p className="hero__subtitle">Enthusiast of technology that helps make the world a better place.</p>
      </div>
    </header>
  );
}

function Technology() {
  return (
    <div className="hero hero--dark" style={Roboto}>
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