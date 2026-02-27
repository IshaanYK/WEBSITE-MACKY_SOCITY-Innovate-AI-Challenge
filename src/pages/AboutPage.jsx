import React from 'react';
import About from '../components/About';
import Rules from '../components/Rules';
import AnimatedText from '../components/AnimatedText';
import { motion } from 'framer-motion';

const AboutPage = () => {
    return (
        <div className="pt-32 pb-24 min-h-screen">
            <div className="container mx-auto px-6 mb-16 text-center">
                <h1 className="text-5xl md:text-6xl font-black mb-6 flex justify-center">
                    <AnimatedText text="Guidelines &" className="text-white mr-4" />
                    <AnimatedText text="About" className="text-neon-purple" delay={0.8} />
                </h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="text-xl text-gray-400 max-w-3xl mx-auto"
                >
                    Everything you need to know about the Innovate AI Challenge structure, rules, and expectations.
                </motion.p>
            </div>

            <About />
            <hr className="border-white/5 my-12 container mx-auto" />
            <Rules />
        </div>
    );
};

export default AboutPage;
