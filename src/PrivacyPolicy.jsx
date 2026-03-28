import React from 'react';
import Navbar from './components/Navbar';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            
            <header className="pt-32 pb-12 px-6">
                <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-black tracking-tight text-black mb-6 leading-tight">
                            Privacy Policy
                        </h1>
                        <p className="text-xl text-gray-500 max-w-2xl mb-8 leading-relaxed">
                            Your privacy matters to us. This policy outlines how NK Digital Hub collects, uses, and safeguards your personal data.
                        </p>
                    </motion.div>
                </div>
            </header>

            <section className="py-12 bg-gray-50 px-6 mb-20 rounded-t-3xl border-t border-gray-100">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 space-y-8"
                    >
                        <div>
                            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We collect various types of information, including information that identifies or may identify you as an individual ("Personal Information"). This includes your email address when you voluntarily submit it to us, and data on how you use our services through cookies.
                            </p>
                        </div>
                        
                        <div>
                            <h2 className="text-2xl font-bold mb-4">2. Cookies and Tracking</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Our website uses "cookies" to enhance your user experience. Your web browser places cookies on your hard drive for record-keeping purposes and sometimes to track information about them. You may choose to set your web browser to refuse cookies.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4">3. Third-Party Advertisers (Google AdSense)</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We use third-party advertising companies, such as Google AdSense, to serve ads when you visit our Website. These companies may use aggregated information (not including your name, address, email address, or telephone number) about your visits to this and other Web sites in order to provide advertisements about goods and services of interest to you.
                            </p>
                            <p className="text-gray-600 leading-relaxed mt-2">
                                Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of the DART cookie enables it to serve ads to our users based on their visit to our site and other sites on the Internet.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4">4. Affiliate Disclosure</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We are a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for us to earn fees by linking to Amazon.com and affiliated sites.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4">5. Contacting Us</h2>
                            <p className="text-gray-600 leading-relaxed">
                                If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
