import React, { useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from './styles.module.css';

export default function Movement() {
    const [formData, setFormData] = useState({
        email: '',
        socialLink: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log('Submitting form data:', formData);
            console.log('Current origin:', window.location.origin);
            console.log('Current protocol:', window.location.protocol);
            console.log('Current hostname:', window.location.hostname);

            // Use HTTPS through Cloudflare
            const response = await fetch('https://automation.riskfirst.org/api/movement/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            console.log('Response status:', response.status);
            console.log('Response headers:', response.headers);

            if (response.ok) {
                const result = await response.text();
                console.log('Response body:', result);
                setIsSubmitted(true);
            } else {
                const errorText = await response.text();
                console.error('Form submission failed:', response.status, errorText);
                alert('There was an error submitting the form. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error submitting the form. Please try again.');
        }
    };


    if (isSubmitted) {
        return (
            <section className={styles.movementSection}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>Thank You! 🎉</h2>
                        <p className={styles.message}>
                            Thanks for helping spread the Risk-First movement! Check your email for your special discount code.
                        </p>
                        <button
                            className={styles.button}
                            onClick={() => setIsSubmitted(false)}
                        >
                            Share Again
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className={styles.movementSection}>
            <BrowserOnly>
                {() => {
                    const shareLinks = {
                        linkedin: 'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(window.location.href),
                        twitter: 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(window.location.href) + '&text=' + encodeURIComponent('Check out Risk-First Software Development - a new way of thinking about how software really gets built!'),
                        facebook: 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href)
                    };

                    return (
                        <div className={styles.container}>
                            <div className={styles.content}>
                                <h2 className={styles.title}>Let's Create a Movement 🚀</h2>
                                <div className={styles.text}>
                                    <p>
                                        Risk-First is more than just a book — it's a different way to think about how software really gets built.
                                        And movements only grow when people share them.
                                    </p>
                                    <p>
                                        Here's how you can get in on the ground floor of a new movement and help spread the word and get rewarded:
                                    </p>
                                    <ol className={styles.steps}>
                                        <li>Share this page on LinkedIn, X (Twitter), or your favorite platform.</li>
                                        <li>Fill out this quick form with your email address and a link to your post.</li>
                                        <li>Get rewarded — I'll send you a special discount code to grab a <strong>free</strong> digital copy of Risk-First Software Development, Second Edition (Beta).</li>
                                    </ol>
                                </div>

                                <div className={styles.shareButtons}>
                                    <a
                                        href={shareLinks.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.shareButton}
                                    >
                                        Share on LinkedIn
                                    </a>
                                    <a
                                        href={shareLinks.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.shareButton}
                                    >
                                        Share on X (Twitter)
                                    </a>
                                    <a
                                        href={shareLinks.facebook}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.shareButton}
                                    >
                                        Share on Facebook
                                    </a>
                                </div>

                                <form className={styles.form} onSubmit={handleSubmit}>
                                    <h3 className={styles.formTitle}>👉 Share the Page & Claim Your Free Copy</h3>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="email" className={styles.label}>
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className={styles.input}
                                            required
                                            placeholder="your@email.com"
                                        />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="socialLink" className={styles.label}>
                                            Link to Your Post *
                                        </label>
                                        <input
                                            type="url"
                                            id="socialLink"
                                            name="socialLink"
                                            value={formData.socialLink}
                                            onChange={handleInputChange}
                                            className={styles.input}
                                            required
                                            placeholder="https://linkedin.com/posts/..."
                                        />
                                    </div>

                                    <button type="submit" className={styles.submitButton}>
                                        Claim My Discount Code
                                    </button>
                                </form>

                                <p className={styles.footerText}>
                                    Together, we can build a community that puts risk where it belongs: at the center of how we understand software.
                                </p>
                            </div>
                        </div>
                    );
                }}
            </BrowserOnly>
        </section >
    );
}
