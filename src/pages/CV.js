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
            </div>
        </header>
        </Layout>
    );
}