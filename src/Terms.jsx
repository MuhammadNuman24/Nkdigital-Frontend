import React from 'react';
import Navbar from './components/Navbar';
import { motion } from 'framer-motion';

const Terms = () => {
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
                            Terms & Conditions
                        </h1>
                        <p className="text-xl text-gray-500 max-w-2xl mb-8 leading-relaxed">
                            Please read these terms carefully before using our digital platform. By accessing or using NK Digital Hub, you agree to be bound by these terms.
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
                            <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
                            <p className="text-gray-600 leading-relaxed">
                                By viewing or interacting with this site, you agree to comply with all our Terms and Conditions. These terms govern your use of the website and services operated by NK Digital Hub. If you do not agree with any part of these terms, you may not access our services.
                            </p>
                        </div>
                        
                        <div>
                            <h2 className="text-2xl font-bold mb-4">2. Intellectual Property Rights</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Other than the content you own, under these Terms, NK Digital Hub and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted a limited license only for purposes of viewing the material contained on this Website.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4">3. Affiliate Disclaimer</h2>
                            <p className="text-gray-600 leading-relaxed">
                                NK Digital Hub operates as an affiliate marketer. This means we may earn a small commission when you purchase products through links on our site, at no additional cost to you. We participate in the Amazon Services LLC Associates Program.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4">4. Restrictions</h2>
                            <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2">
                                <li>Publishing any Website material in any other media without permission.</li>
                                <li>Selling, sublicensing and/or otherwise commercializing any Website material.</li>
                                <li>Using this Website in any way that is or may be damaging to this Website.</li>
                                <li>Using this Website in any way that impacts user access to this Website.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4">5. Revisions and Errata</h2>
                            <p className="text-gray-600 leading-relaxed">
                                The materials appearing on NK Digital Hub's website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current. We may make changes to the materials contained on our website at any time without notice.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Terms;
