import React from 'react';
import { useEffect } from 'react';
import './About.css';

const About = ({ totalNotes = 0 }) => {
    useEffect(() => {
        document.title = "WriteUp | About";
    }, []);

    return (
        <div className="about-wrapper">
            <header className="about-header">
                <h1 className="brand-name">WriteUp</h1>
                <div className="accent-line"></div>
                <p className="tagline">Your thoughts, organized and refined.</p>
            </header>

            <section className="stats-section">
                <div className="stat-card">
                    <div className="stat-info">
                        <span className="stat-label">Total Notes Captured</span>
                        <h2 className="stat-count">{totalNotes}</h2>
                    </div>
                    <div className="stat-status">
                        <span className="pulse-icon"></span>
                        <p>Live Local Sync</p>
                    </div>
                </div>
            </section>

            <section className="vision-grid">
                <div className="vision-card">
                    <h3>The Vision</h3>
                    <p>
                        WriteUp is built on a minimalist philosophy. Our goal is to provide a clutter-free environment where technology meets productivity, allowing you to focus entirely on your ideas without any distractions.
                    </p>
                </div>
                <div className="vision-card">
                    <h3>Privacy First</h3>
                    <p>
                        Your data belongs solely to you. We utilize LocalStorage to ensure your notes stay within your browser's environment. We never upload your personal thoughts to any cloud server, keeping your privacy absolutely intact.
                    </p>
                </div>
            </section>

            <footer className="about-footer">
                <div className="divider"></div>
                <p className="credit">
                    Handcrafted by {" "}
                    <a
                        href="https://github.com/ritesh-builds-dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dev-link"
                    >
                        RITESH CHOUDHARY
                    </a>
                </p>
            </footer>
        </div>
    );
};

export default About;