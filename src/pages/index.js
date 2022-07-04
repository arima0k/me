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
        <h1 className="hero__title" style={{ fontSize: "65px" }}>Luis Vera</h1>
        <h2 className="hero__subtitle" style={{ fontSize: 'xx-large' }}>Personal Website</h2>
        <p className="hero__subtitle" style={{ fontStyle: 'italic', fontSize: "1.6em" }}>"Looking for technology that helps make the world a better place".</p>
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
                    I'm a Geek guy from Panamá.
                    <br />
                    I like doing tech experiments (not production environment), Open-Source Enthusiast.
                    I really like Linux, very familiar with it, I use <Link style={{ color: "#072C61" }} to="https://getfedora.org/en/workstation/">Fedora</Link> on my daily driver laptop.</p>
                <p className="hero__subtitle">Some of my skill are: <span style={{ fontStyle: "oblique" }}>intuitive, self-taught,
                    logical thinking, quick learning and versatile.</span>
                    <br />
                    I like computational problem solving and research.
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
            <title>Luis Vera</title>
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