import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './CV.module.css';
import Link from "@docusaurus/core/lib/client/exports/Link";

const svgIcon = {
    display:"inline-flex",
    alignSelf: "center",
    top: ".125em",
    position: "relative",
    height: "1em",
    width: "1em"
}

const inherit = {
    color: "inherit",
}

function Info() {
    return (
        <header className={clsx('hero hero--primary', styles.infoBanner)}>
            <div className="container">
                <h1 className="hero__title">Luis Vera</h1>
                <h2 className="hero__subtitle">
                    <svg xmlns="http://www.w3.org/2000/svg" style = {svgIcon} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg> Panamá</h2>
                <p className="hero__subtitle"><svg xmlns="http://www.w3.org/2000/svg" style={svgIcon} viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg> <a style={{ color: "inherit" }} href="mailto:lvera@tecstim.com">lvera@tecstim.com</a></p>
                <hr className={styles.Line}/>
                <h2 style={{ fontSize: "2em"}}>Summary</h2>
                <p style={{ fontSize: "1.5em" }}>
                    A driven autodidact with strong learning and problem solving skills
                    who dabbles in the tech world, not only for fun. Primarily focused on problem solving and research.
                    More interested in prevention by keeping the infrastructure up to date while maintaining stability and usability and end-user education.
                </p>
            </div>
        </header>
    );
}

function TSkills() {
    return (
        <header className={clsx('hero hero--primary', styles.TSkills)}>
            <div className="container">
                <h1 className="hero__title">Technical Skills</h1>
                <ul style={{ fontSize: "1.5em" }}><li style={{ fontSize: "1.5em" }}>Servers</li>
                    Hardware and software (Windows Server, GNU/Linux (Ubuntu , Debian, CentOS, Fedora, Arch)).
                </ul>
                <ul style={{ fontSize: "1.5em" }}><li style={{ fontSize: "1.5em" }}>Cloud Computing</li>
                    Google Cloud, Microsoft Azure, Amazon Web Services, DigitalOcean.
                </ul>
                <p style={{ fontSize: "2em" }}>Other Knowledge </p>
                <p style={{ fontSize: "1.5em" }}>Docker, NGINX, SSH, SSL, Cloudflare, Git.</p>
            </div>
        </header>
    );
}

function Experience() {
    return (
        <header className={clsx('hero hero--primary', styles.expBanner)}>
            <div className="container">
                <h1 className="hero__title">Experience</h1>
                <h2 style={{ fontSize: "2em"}}>Professional</h2>
                <ul className="hero__subtitle">
                    <li><b>IT Support Technician</b></li>
                    <ul>
                        <li>Provide support to costumers through Jira Service Desk.</li>
                        <li>Customer's computer systems setup with the necessary tools and programs.</li>
                        <li>Mail, Active Directory, office and other enterprise tools account configuration.</li>
                        <li>Dell PowerEdge and HPE ProLiant server hardware and software configuration.</li>
                        <li>Virtual Machines administration in VMware ESXi.</li>
                        <li>Installation, configuration and troubleshooting of Video Surveillance Systems like Hikvision.</li>
                        <li>Troubleshooting in record time of problems that disrupt customer workflows.</li>
                    </ul>
                </ul>
                <ul className="hero__subtitle">
                    <li><b>Business ISP Technician</b></li>
                        <ul>
                            <li>Network bandwidth certification with Fluke Networks enterprise tools.</li>
                            <li>Cuts, damages and device failure fiber link troubleshooting.</li>
                            <li>Cisco enterprise routers installation.</li>
                        </ul>
                    </ul>
                <h2 style={{ fontSize: "2em"}}>Independent</h2>
                <ul className="hero__subtitle">
                    <li>IT Support Consultant</li>
                    <li>System Administration</li>
                        <ul>
                            <li>Cloud and bare metal Linux servers setup.</li>
                            <li>A, MX, TXT, and CNAME DNS record administration.</li>
                            <li>Cloud Virtual Machine instances creation and configuration.</li>
                            <li>VMware Workstation setup.</li>
                            <li>NGINX Web Server Configuration.</li>
                            <li>Database and user MariaDB creation for Web Server.</li>
                            <li>Basic Docker container creation, registration and deployment.</li>
                            <li>SSL Certificates creation with Certbot.</li>
                            <li>OpenSSH server and client configuration.</li>
                            <li>SSH key creation and VPN secure access trough <Link style={inherit} to="https://www.zerotier.com/"> ZeroTier</Link>.</li>
                        </ul>
                </ul>
            </div>
        </header>
    );
}

function Courses() {
    return (
        <header className={clsx('hero hero--primary', styles.coursesBanner)}>
            <div className="container">
                <h1 className="hero__title">Courses</h1>
                <ul className="hero__subtitle"><li>CCNA Routing and Switching</li></ul>
                <ul className="hero__subtitle"><li><Link style={inherit}
                    to="https://www.coursera.org/professional-certificates/google-it-support">
                    Google IT Support by Google at Coursera
                </Link></li>
                    <ul>
                        <li><Link style={inherit}
                            to="https://www.coursera.org/learn/technical-support-fundamentals?specialization=google-it-support">
                            Technical Support Fundamentals
                        </Link></li>
                        <li><Link style={inherit}
                                  to="https://www.coursera.org/learn/computer-networking?specialization=google-it-support">
                            The Bits and Bytes of Computer Networking
                        </Link></li>
                        <li><Link style={inherit}
                                  to="https://www.coursera.org/learn/os-power-user?specialization=google-it-support">
                            Operating Systems and You: Becoming a Power User
                        </Link></li>
                        <li><Link style={inherit}
                                  to="https://www.coursera.org/learn/system-administration-it-infrastructure-services?specialization=google-it-support">
                            System Administration and IT Infrastructure Services
                        </Link></li>
                        <li><Link style={inherit}
                                  to="https://www.coursera.org/learn/it-security?specialization=google-it-support">
                            IT Security: Defense against the digital dark arts
                        </Link></li>
                    </ul>
                </ul>
            </div>
        </header>
    );
}

export default function CV() {
    return (
        <Layout
            title={`Resume`}
            description="Luis Vera's Resume">
            <Info />
            <TSkills />
            <Experience />
            <Courses />
        </Layout>
    );
}