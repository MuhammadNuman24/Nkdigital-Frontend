import React from 'react';
import Navbar from './components/Navbar';
import { motion } from 'framer-motion';
import { ShoppingBag, Target, ShieldCheck, TrendingUp, ArrowRight } from 'lucide-react';

const About = () => {
    const features = [
        {
            icon: <ShoppingBag className="w-8 h-8 text-black" />,
            title: "Curated Selections",
            description: "We handpick the best products from Amazon to ensure you get quality and value in every click."
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-black" />,
            title: "Trusted Reviews",
            description: "Our team researches extensively so you don't have to. We only promote products with proven track records."
        },
        {
            icon: <Target className="w-8 h-8 text-black" />,
            title: "Niche Focused",
            description: "From Fashion to Home Decor, we deep-dive into specific categories to find hidden gems for you."
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            
            {/* Hero Section */}
            <header className="pt-32 pb-20 px-6">
                <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-black mb-8 leading-tight">
                            Elevating Your <span className="text-gray-400 italic">Digital</span> Shopping Experience
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mb-12 leading-relaxed">
                            NK Digital is your premium bridge to the best products on Amazon. We specialize in affiliate marketing, bringing you curated excellence across fashion, electronics, and lifestyle.
                        </p>
                        <div className="flex gap-4">
                            <button className="px-8 py-4 bg-black text-white font-bold rounded-full hover:scale-105 transition-transform shadow-xl flex items-center gap-2">
                                explore categories <ArrowRight size={20} />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* Content Section */}
            <section className="py-20 bg-gray-50 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl font-black mb-6">Expertly Curated <br/>Amazon Selections</h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                We believe in the power of quality over quantity. In the vast landscape of Amazon, finding the right product can be overwhelming. That's where we come in.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                As Amazon Associates, we earn from qualifying purchases. This allows us to maintain our platform and continue bringing you high-value content and honest recommendations without any extra cost to you.
                            </p>
                            <div className="flex items-center gap-4 py-4 px-6 bg-white rounded-2xl border border-gray-100 shadow-sm w-fit">
                                <TrendingUp className="text-green-500" />
                                <span className="font-bold">Helping 10k+ shoppers monthly</span>
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            className="grid gap-6"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            {features.map((feature, index) => (
                                <div key={index} className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="mb-4">{feature.icon}</div>
                                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-gray-500 leading-relaxed">{feature.description}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-32 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-black mb-8 italic text-gray-400">Our Vision</h2>
                    <p className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                        "To be the most trusted authority in digital commerce discovery, empowering consumers to make informed, effortless shopping decisions daily."
                    </p>
                </div>
            </section>
        </div>
    );
};

export default About;
