import React from 'react';
import Navbar from '../components/navbar/activeNavbar';
import Footer from '../components/footer/footer';

export default function PrivacyPolicy() {
    return (
        <div>
            <Navbar />
            <div style={styles.container}>
                <h1 style={styles.header}>Privacy Policy</h1>

                <h2 style={styles.subHeader}>1. Introduction</h2>
                <p style={styles.text}>
                    CardsClarity, Inc. ("CardsClarity," "we," "us," or "our") operates the website located at cardsclarity.com and related services (collectively, the "Platform"). This Terms of Service and Privacy Policy ("Agreement") governs your access to and use of the Platform.
                </p>

                <h2 style={styles.subHeader}>2. Acceptance of Terms</h2>
                <p style={styles.text}>
                    By accessing or using the Platform, you ("User," "you," or "your") agree to be bound by this Agreement. If you do not agree to these terms, you must not access or use the Platform.
                </p>

                <h2 style={styles.subHeader}>3. Age Restrictions</h2>
                <p style={styles.text}>
                    You must be at least 13 years old to use the Platform. If you are under 18 years old, you must have parental consent to use the Platform. We do not knowingly collect or solicit personal information from anyone under 13 or knowingly allow such persons to register for the Platform. If we become aware that we have collected personal information from a child under 13 without verification of parental consent, we will take steps to remove that information from our servers.
                </p>

                <h2 style={styles.subHeader}>4. User-Generated Content</h2>
                <p style={styles.text}>
                    4.1. The Platform allows Users to submit, post, and share content related to credit card products, including reviews, comments, and ratings ("User Content").
                </p>
                <p style={styles.text}>
                    4.2. You retain all ownership rights to your User Content. However, by submitting User Content to the Platform, you grant CardsClarity a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform the User Content in connection with the Platform and CardsClarity's business operations.
                </p>
                <p style={styles.text}>
                    4.3. You represent and warrant that: (i) you own the User Content posted by you on or through the Platform or otherwise have the right to grant the license set forth in this section, and (ii) your User Content does not violate the privacy rights, publicity rights, copyrights, contract rights, intellectual property rights or any other rights of any person or entity.
                </p>
                <p style={styles.text}>
                    4.4. Prohibited Content: You agree not to post User Content that:
                </p>
                <ul style={styles.bulletList}>
                    <li style={styles.listItem}>Is illegal, obscene, defamatory, threatening, intimidating, harassing, hateful, racially, or ethnically offensive, or instigates or encourages conduct that would be illegal or otherwise inappropriate.</li>
                    <li style={styles.listItem}>Infringes any patent, trademark, trade secret, copyright, or other intellectual or proprietary right of any party.</li>
                    <li style={styles.listItem}>Contains software viruses or any other computer code designed to interrupt, destroy, or limit the functionality of any computer software or hardware.</li>
                    <li style={styles.listItem}>Impersonates any person or entity or otherwise misrepresents your affiliation with a person or entity.</li>
                </ul>
                <p style={styles.text}>
                    4.5. CardsClarity reserves the right, but is not obligated, to monitor, edit, or remove any User Content at our sole discretion, including content that we determine violates this Agreement or may be offensive, illegal, or violate the rights of any third party.
                </p>
                <p style={styles.text}>
                    4.6. Consequences of Posting Prohibited Content: If you post prohibited content, CardsClarity may, at its sole discretion:
                </p>
                <ul style={styles.bulletList}>
                    <li style={styles.listItem}>Remove the content</li>
                    <li style={styles.listItem}>Issue a warning</li>
                    <li style={styles.listItem}>Temporarily or permanently suspend your account</li>
                    <li style={styles.listItem}>Ban you from the Platform</li>
                    <li style={styles.listItem}>Take legal action if necessary</li>
                </ul>

                <h2 style={styles.subHeader}>5. Intellectual Property Rights</h2>
                <p style={styles.text}>
                    5.1. CardsClarity's Intellectual Property: The Platform and its original content (excluding User Content), features, and functionality are owned by CardsClarity and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                </p>
                <p style={styles.text}>
                    5.2. User's Intellectual Property: You retain all rights to any content you submit, post or display on or through the Platform. By submitting, posting or displaying content on or through the Platform, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate and distribute it in any and all media.
                </p>
                <p style={styles.text}>
                    5.3. Copyright Infringement: If you believe that any User Content violates your copyright, please contact us at cardsclarity@gmail.com with a detailed description of the alleged infringement. We will respond to notices of alleged copyright infringement that comply with applicable law and are properly provided to us.
                </p>

                <h2 style={styles.subHeader}>6. Privacy Policy</h2>
                <p style={styles.text}>
                    6.1. Data Collection: We collect personal information you provide during account creation and platform interaction, including email address, name, account password, username, comments, and votes.
                </p>
                <p style={styles.text}>
                    6.2. Data Usage: We use collected information to manage accounts, facilitate communication, personalize content, and improve our services.
                </p>
                <p style={styles.text}>
                    6.3. Data Security: We implement industry-standard encryption protocols and security measures to protect user data from unauthorized access and potential breaches. These measures include:
                </p>
                <ul style={styles.bulletList}>
                    <li style={styles.listItem}>Secure Socket Layer (SSL) technology</li>
                    <li style={styles.listItem}>Regular security audits</li>
                    <li style={styles.listItem}>Employee training on data protection</li>
                    <li style={styles.listItem}>Limited access to personal information on a need-to-know basis</li>
                    <li style={styles.listItem}>Firewalls and intrusion detection systems</li>
                </ul>
                <p style={styles.text}>
                    6.4. Data Aggregation: Credit card-related information displayed on the Platform is collected through secure API calls and web scraping techniques from official sources. CardsClarity does not independently verify this information and makes no representations or warranties regarding its accuracy.
                </p>
                <p style={styles.text}>
                    6.5. Cookies: We use cookies strictly for authorization purposes. No other data is collected or used from cookies.
                </p>
                <p style={styles.text}>
                    6.6. Third-Party Services: We use the following third-party services for data processing and analytics:
                </p>
                <ul style={styles.bulletList}>
                    <li style={styles.listItem}>Google Analytics for website traffic analysis</li>
                    <li style={styles.listItem}>Stripe for payment processing</li>
                    <li style={styles.listItem}>SendGrid for email communications</li>
                </ul>
                <p style={styles.text}>
                    These services may collect and process personal information as per their own privacy policies.
                </p>
                <p style={styles.text}>
                    6.7. Data Retention: We retain user data for as long as an account is active or as needed to provide services. If you delete your account, we will delete your personal information within 30 days, except for information we are required to retain for legal or business purposes.
                </p>
                <p style={styles.text}>
                    6.8. Updates to Privacy Policy: We will notify users of any material changes to this Privacy Policy via email and/or a prominent notice on our Platform at least 30 days prior to the changes becoming effective.
                </p>

                <h2 style={styles.subHeader}>7. California Consumer Privacy Act (CCPA) Rights</h2>
                <p style={styles.text}>
                    For California residents, in addition to the rights described elsewhere in this Agreement, you have the following rights under the CCPA:
                </p>
                <p style={styles.text}>
                    7.1. Right to Know: You have the right to request that we disclose certain information to you about our collection and use of your personal information over the past 12 months.
                </p>
                <p style={styles.text}>
                    7.2. Right to Delete: You have the right to request that we delete any of your personal information that we collected from you and retained, subject to certain exceptions.
                </p>
                <p style={styles.text}>
                    7.3. Right to Opt-Out of Sale: We do not sell personal information. However, if we did, you would have the right to opt-out of the sale of your personal information.
                </p>
                <p style={styles.text}>
                    7.4. Right to Non-Discrimination: We will not discriminate against you for exercising any of your CCPA rights.
                </p>
                <p style={styles.text}>
                    To exercise these rights, please contact us at cardsclarity@gmail.com.
                </p>

                <h2 style={styles.subHeader}>8. Data Breach Notification</h2>
                <p style={styles.text}>
                    In the event of a data breach that compromises your personal information, we will notify you via email within 72 hours of discovering the breach. The notification will include:
                </p>
                <ul style={styles.bulletList}>
                    <li style={styles.listItem}>A description of the nature of the breach</li>
                    <li style={styles.listItem}>The types of information potentially involved</li>
                    <li style={styles.listItem}>Steps we are taking to investigate and mitigate the breach</li>
                    <li style={styles.listItem}>Recommended steps you can take to protect yourself</li>
                    <li style={styles.listItem}>Contact information for further questions or concerns</li>
                </ul>

                <h2 style={styles.subHeader}>9. Dispute Resolution and Arbitration</h2>
                <p style={styles.text}>
                    9.1. Informal Resolution: Before initiating any arbitration or court proceeding, you agree to first contact us at cardsclarity@gmail.com and attempt to resolve any dispute informally.
                </p>
                <p style={styles.text}>
                    9.2. Arbitration Agreement: If informal resolution is unsuccessful, any dispute, controversy, or claim arising out of or relating to this Agreement, or the breach thereof, shall be determined by arbitration administered by the American Arbitration Association in accordance with its Commercial Arbitration Rules.
                </p>
                <p style={styles.text}>
                    9.3. Arbitration Process: The arbitration will be conducted in the English language in United States, New York. One arbitrator will be selected in accordance with the American Arbitration Association Rules. Each party will be responsible for paying any filing, administrative, and arbitrator fees in accordance with American Arbitration Association Rules.
                </p>
                <p style={styles.text}>
                    9.4. Class Action Waiver: You agree that any arbitration or proceeding shall be limited to the dispute between us and you individually. To the fullest extent permitted by law, (i) no arbitration or proceeding shall be joined with any other; (ii) there is no right or authority for any dispute to be arbitrated or resolved on a class action basis or to utilize class action procedures; and (iii) there is no right or authority for any dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.
                </p>
                <p style={styles.text}>
                    9.5. Opt-Out: You have the right to opt-out and not be bound by the arbitration and class action waiver provisions by sending written notice of your decision to opt-out to cardsclarity@gmail.com within 30 days of your first use of the Platform.
                </p>

                <h2 style={styles.subHeader}>10. Termination</h2>
                <p style={styles.text}>
                    10.1. We may terminate or suspend your account and bar access to the Platform immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of this Agreement.
                </p>
                <p style={styles.text}>
                    10.2. You may terminate your account at any time by contacting us at cardsclarity@gmail.com.
                </p>
                <p style={styles.text}>
                    10.3. Upon termination, your right to use the Platform will immediately cease. If you wish to terminate your account, you may simply discontinue using the Platform.
                </p>
                <p style={styles.text}>
                    10.4. All provisions of this Agreement which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
                </p>

                <h2 style={styles.subHeader}>11. Changes to this Agreement</h2>
                <p style={styles.text}>
                    We reserve the right to modify this Agreement at any time. We will notify users of any material changes by posting the new Agreement on the Platform and updating the "Last Updated" date at the top of this Agreement. Your continued use of the Platform after any such changes constitutes your acceptance of the new Agreement.
                </p>

                <h2 style={styles.subHeader}>12. Contact Information</h2>
                <p style={styles.text}>
                    If you have any questions about this Agreement, please contact us at:
                </p>
                <p style={styles.text}>
                    CardsClarity, Inc.<br />
                    Email: <a href="mailto:cardsclarity@gmail.com">cardsclarity@gmail.com</a><br />
                    Phone: +1 (650) 4540709 - Dylan Bardsley
                </p>

                <p style={styles.footerText}>
                    By using the CardsClarity Platform, you acknowledge that you have read, understood, and agree to be bound by this Agreement.
                </p>
                <p style={styles.footerText}>
                    <em>Last Updated: 08/20/2024</em>
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
    bulletList: {
        marginLeft: '20px',
        listStyleType: 'disc',
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
