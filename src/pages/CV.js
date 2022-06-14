import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './CV.module.css';

export default function Hello() {
    return (
        <Layout
            description="Luis Vera's personal website">
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">Resume</h1>
                <h1 className="hero__subtitle" style={{ fontSize: "large" }}> AKA arima0k/angw97</h1>
                <h2 className="hero__subtitle" style={{ fontSize: 'xx-large' }}>Personal Website</h2>
                <p className="hero__subtitle" style={{ fontStyle: 'italic', fontSize: "large" }}>"Looking for technology that helps make the world a better place".</p>
            </div>
        </header>
        </Layout>
    );
}