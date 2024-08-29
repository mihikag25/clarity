import React from 'react';
import Navbar from '../components/navbar/activeNavbar';
import Footer from '../components/footer/footer';

export default function LegalStuff() {
    return (
        <div>
            <Navbar />
            <div style={styles.container}>
                <h1 style={styles.header}>Legal Stuff</h1>
                <p style={styles.text}>
                    At CardsClarity, we believe in transparency and clarity, especially when it comes to legal matters. This page serves as a central hub for all our important legal documents. While we're in the process of developing comprehensive documentation, we want to provide you with an overview of the key legal aspects that govern our relationship with our users, partners, and visitors.
                </p>

                <h2 style={styles.subHeader}>For Users</h2>
                <p style={styles.text}>
                    As a user of CardsClarity, the following documents are essential for understanding your rights and responsibilities:
                </p>
                <ol style={styles.list}>
                    <li style={styles.listItem}>
                        <strong>Terms of Service:</strong> This document outlines the rules and regulations for using our platform, including user responsibilities, content guidelines, and our service commitments.
                    </li>
                    <li style={styles.listItem}>
                        <strong>Privacy Policy:</strong> Our privacy policy details how we collect, use, and protect your personal information, ensuring compliance with data protection laws.
                    </li>
                    <li style={styles.listItem}>
                        <strong>Cookie Policy:</strong> This policy explains how we use cookies and similar technologies on our website, and how you can manage your preferences.
                    </li>
                    <li style={styles.listItem}>
                        <strong>Acceptable Use Policy:</strong> This document sets out the permitted uses and prohibited activities when using our platform.
                    </li>
                </ol>

                <h2 style={styles.subHeader}>For Partners</h2>
                <p style={styles.text}>
                    If you're considering a partnership with CardsClarity, these documents will be relevant:
                </p>
                <ol style={styles.list}>
                    <li style={styles.listItem}>
                        <strong>Partner Agreement:</strong> This agreement outlines the terms and conditions for our various partnership programs.
                    </li>
                    <li style={styles.listItem}>
                        <strong>Affiliate Program Terms:</strong> If you're interested in our affiliate program, this document details the rules and compensation structure.
                    </li>
                </ol>

                <h2 style={styles.subHeader}>For Everyone</h2>
                <p style={styles.text}>
                    These documents apply to all visitors of our website and users of our services:
                </p>
                <ol style={styles.list}>
                    <li style={styles.listItem}>
                        <strong>Website Terms of Use:</strong> This document governs your use of our website, regardless of whether you're a registered user.
                    </li>
                    <li style={styles.listItem}>
                        <strong>Intellectual Property Rights:</strong> Information about our trademarks, copyrights, and how you can use our brand assets.
                    </li>
                    <li style={styles.listItem}>
                        <strong>Accessibility Statement:</strong> Our commitment to making our website and services accessible to all users.
                    </li>
                </ol>

                <h2 style={styles.subHeader}>Data Privacy and Security</h2>
                <p style={styles.text}>
                    At CardsClarity, we take data privacy and security seriously. While we're finalizing our comprehensive documentation, please know that we adhere to industry-standard practices for data protection, including:
                </p>
                <ul style={styles.list}>
                    <li style={styles.listItem}>
                        Implementing robust security measures to protect user data
                    </li>
                    <li style={styles.listItem}>
                        Complying with relevant data protection regulations
                    </li>
                    <li style={styles.listItem}>
                        Providing transparency about our data collection and use practices
                    </li>
                    <li style={styles.listItem}>
                        Offering users control over their personal information
                    </li>
                </ul>

                <h2 style={styles.subHeader}>Future Updates</h2>
                <p style={styles.text}>
                    We're continuously working on improving and expanding our legal documentation to provide you with the most comprehensive and up-to-date information. As we develop new documents or make significant changes to existing ones, we'll update this page and notify our users accordingly.
                </p>

                <h2 style={styles.subHeader}>Contact Us</h2>
                <p style={styles.text}>
                    If you have any questions about our legal documents or need further clarification, please don't hesitate to contact us at:
                </p>
                <p style={styles.text}>
                    CardsClarity, Inc.<br />
                    Email: <a href="mailto:cardsclarity@gmail.com">cardsclarity@gmail.com</a><br />
                    Phone: +1 (650) 4540709 - Dylan Bardsley
                </p>

                <p style={styles.footerText}>
                    We're committed to maintaining open communication with our users and ensuring that our legal documentation is clear, accessible, and compliant with all relevant laws and regulations.
                </p>
                <p style={styles.footerText}>
                    <em>Last updated: 08/23/2024</em>
                </p>
            </div>
            <Footer />
        </div>
    );
}

const styles = {
    container: {
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        maxWidth: '800px',
        margin: '20px auto',
        lineHeight: '1.6',
        fontFamily: 'Arial, sans-serif',
    },
    header: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
    },
    subHeader: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginTop: '20px',
        marginBottom: '10px',
    },
    text: {
        fontSize: '16px',
        color: '#333',
        marginBottom: '10px',
    },
    list: {
        marginLeft: '20px',
    },
    listItem: {
        marginBottom: '10px',
    },
    footerText: {
        fontSize: '14px',
        color: '#777',
        textAlign: 'center',
        marginTop: '30px',
    },
};
