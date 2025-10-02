import React, { useState, useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from './styles.module.css';

const PAGE_URL = 'https://riskfirst.org/Risk-First-Second-Edition';

export default function Movement() {
    const [formData, setFormData] = useState({
        email: '',
        socialLink: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [linkedInLoaded, setLinkedInLoaded] = useState(false);

    // Load platform SDKs
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Load LinkedIn SDK
            if (!window.IN) {
                const linkedInScript = document.createElement('script');
                linkedInScript.src = 'https://platform.linkedin.com/in.js';
                linkedInScript.type = 'text/javascript';
                linkedInScript.innerHTML = 'lang: en_US';
                linkedInScript.onload = () => {
                    setLinkedInLoaded(true);
                };
                document.head.appendChild(linkedInScript);
            } else {
                setLinkedInLoaded(true);
            }

            // Load Twitter SDK
            if (!window.twttr) {
                const twitterScript = document.createElement('script');
                twitterScript.src = 'https://platform.twitter.com/widgets.js';
                twitterScript.async = true;
                document.head.appendChild(twitterScript);
            }

            // Load Facebook SDK
            if (!window.FB) {
                const facebookScript = document.createElement('script');
                facebookScript.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0';
                facebookScript.async = true;
                document.head.appendChild(facebookScript);
            }
        }
    }, []);

    // Reinitialize widgets when SDKs load
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Reinitialize Twitter widgets
            if (window.twttr && window.twttr.widgets) {
                window.twttr.widgets.load();
            }

            // Reinitialize Facebook widgets
            if (window.FB && window.FB.XFBML) {
                window.FB.XFBML.parse();
            }

            // Reinitialize LinkedIn widgets
            if (window.IN && window.IN.parse) {
                window.IN.parse();
            }
        }
    }, [linkedInLoaded]);


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
                            Thanks for helping spread the Risk-First movement! Your discount code will be with you shortly.
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
                    return (
                        <div className={styles.container}>
                            <div className={styles.content}>
                                <h2 className={styles.title}>Read It For Free 🚀</h2>
                                <div className={styles.text}>
                                    <p>
                                        Risk-First is more than just a book — it's a different way to think about how software really gets built.
                                        And movements only grow when people talk about them.
                                    </p>
                                    <p>
                                        If you want in on the ground floor of a new movement, please help spread the word and get rewarded with a free copy.
                                    </p>
                                </div>

                                <div className={styles.form}>
                                    <h3 className={styles.formTitle}>👉 Step 1: Share the Page</h3>

                                    <p>Share this page on LinkedIn, X (Twitter), or your favorite platform</p>

                                    {/* LinkedIn Share Button */}

                                    <div className={styles.shareButtons}>
                                        <div className={styles.shareWidget}>
                                            <script
                                                type="IN/Share"
                                                data-url={PAGE_URL}
                                                dangerouslySetInnerHTML={{ __html: '' }}
                                            ></script>
                                        </div>

                                        {/* Twitter Share Button */}
                                        <div className={styles.shareWidget}>
                                            <a
                                                href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                                                className="twitter-share-button"
                                                data-url={PAGE_URL}
                                                data-text="Check out Risk-First Software Development - a new way of thinking about how software really gets built!"
                                                data-show-count="false"
                                            >
                                                Tweet
                                            </a>
                                        </div>

                                        {/* Facebook Share Button */}
                                        <div className={styles.shareWidget}>
                                            <div
                                                className="fb-share-button"
                                                data-href={PAGE_URL}
                                                data-layout="button"
                                                data-size="large"
                                            >
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <form className={styles.form} onSubmit={handleSubmit}>
                                    <h3 className={styles.formTitle}>👉 Step 2: Claim Your Free Copy</h3>

                                    <p>"Please send me a 109% discount code to get a free copy of Risk-First Software Development, Second Edition."</p>

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
