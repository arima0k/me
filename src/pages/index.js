import React from 'react';
import clsx from 'clsx';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img className="SvgLogo"  alt=""/>
        <h1 className="hero__title">Tecstim</h1>
        <h1 className="hero__title" style={{ fontSize: "65px" }}>Luis Vera</h1>
        <h2 className="hero__title" style={{fontSize: "2rem"}}>"A life-changing and life-enhancing technology hunter."</h2>
      </div>
    </header>
  );
}

function AboutMe() {
    return (
        <header className={clsx('hero hero--primary', styles.aboutBanner)}>
            <div className="container">
                <h1 className="hero__title">Hello! </h1>
                <p className="hero__subtitle">Check my <Link to="/CV"><b className="custom-btn-1">Resume</b></Link></p>
                <h2>I'm Luis (I use the nicknames "arima0k" and "angw97").</h2>
                <h2>I'm a Computer science enthusiast,
                    from Panamá</h2>
                <p className="hero__subtitle">
                    I like doing tech experiments (not production environment).<br />
                    Open-Source Fan, I use <Link style={{ color: "#0c89c5" }} to="https://getfedora.org/en/workstation/">Fedora</Link> on my daily driver laptop.</p>
                <p className="hero__subtitle">Some of my skill are: <span style={{ fontStyle: "oblique" }}>intuitive, self-taught,
                    problem-solving, logical thinking, quick learning and versatile.</span>
                    <br />
                </p>
            </div>
        </header>
    );
}

function Technology() {
  return (
    <div className={clsx('hero hero--dark', styles.tecstim)}>
      <div className="container">
        <h2 className="hero__subtitle">This is my personal website and domain.</h2>
        <h1 className="hero__title">Why tecstim?</h1>
        <p className="hero__subtitle" style={{ fontSize: "110%" }}>Technology means "science of craft", from Greek τέχνη, <span style={{color: '#e17a9b'}}><b>tec</b></span>hne,
        "art, skill, cunning of hand"; and -λογία, -logia. • And κατάστημα (katá<span style={{color: '#e17a9b'}}><b>stim</b></span>a).</p>
        <h2 className="hero__subtitle"><b>Why English?</b></h2>
        <p className="hero__subtitle">"It is the language of science, aviation, computers, diplomacy and tourism.
            Last but not least, it is the language of international communication, the media and the internet."
            (<Link to="https://www.etsglobal.org/pa/en/blog/news/importance-of-learning-english">source</Link>) </p>
      </div>
    </div>
    );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home Page`}
      description="Luis Vera's personal website">
        <Head>
            <title>Luis Vera | Tecstim</title>
            <meta
                property="og:title"
                content="Luis Vera"
            />
            <meta
                property="twitter:title"
                content="Luis Vera"
            />
            <meta name="twitter:card" content="summary_large_image"/>
        </Head>
        <main>
      <HomepageHeader />
      <AboutMe />
       <Technology />
      </main>
    </Layout>
  );
}