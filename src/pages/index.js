import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title" style={{ fontSize: "65px" }}>Luis Vera</h1>
        <h2 className="hero__subtitle" style={{ fontSize: 'xx-large' }}>Personal Website</h2>
        <p className="hero__subtitle" style={{ fontStyle: 'italic', fontSize: "large" }}>"Looking for technology that helps make the world a better place".</p>
      </div>
    </header>
  );
}

function AboutMe() {
    return (
        <header className={clsx('hero hero--primary', styles.aboutBanner)}>
            <div className="container">
                <h1 className="hero__title">Hello!</h1>
                <p className="hero__subtitle">I'm Luis (I also use the nicknames <b>"arima0k | angw97"</b>).
                    <br />
                    I'm an autodidact who likes technology.
                    <br />
                    I like doing experiments (not production environment), Open-Source Enthusiast.
                    I really love Linux, very familiar with it, I use Fedora on my daily driver laptop.</p>
                <p className="hero__subtitle">Some of my skill are: <span style={{ fontStyle: "oblique" }}>intuitive, self-taught,
                    logical thinking, quick learning and versatile.</span>
                    <br />
                    I like computational problem solving and research.
                </p>
            </div>
        </header>
    );
};

function Technology() {
  return (
    <div className={clsx('hero hero--dark', styles.tecstim)}>
      <div className="container">
        <h2 className="hero__subtitle">This my personal website and domain that I use for various things.</h2>
        <h1 className="hero__title">Why tecstim?</h1>
        <p className="hero__subtitle" style={{ fontSize: "110%" }}>Technology means "science of craft", from Greek τέχνη, <span style={{color: '#e17a9b'}}><b>tec</b></span>hne,
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
      <AboutMe />
      <main>
       <Technology />
      </main>
    </Layout>
  );
}