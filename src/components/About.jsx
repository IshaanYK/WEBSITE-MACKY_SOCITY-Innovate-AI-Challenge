import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">
                            About The <span className="text-gradient">Hackathon</span>
                        </h2>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10">
                            Innovate AI Challenge is an intense <span className="text-neon-blue font-semibold">6-hour innovation sprint</span> where participants build groundbreaking AI tools or market-ready innovations. The event promotes originality, creativity, and real-world problem solving in a high-energy environment.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden border border-red-500/20 shadow-[0_0_15px_rgba(255,0,0,0.1)]"
                    >
                        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-red-500 to-orange-500"></div>
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center">
                            <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded text-sm uppercase translate-y-[-2px] mr-3 border border-red-500/30">Strict Policy</span>
                            Originality is Mandatory
                        </h3>
                        <ul className="text-left space-y-4 text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
                            <li className="flex items-start">
                                <span className="text-red-500 mr-3 text-xl">✗</span>
                                No copying of existing tools or innovations.
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-3 text-xl">✗</span>
                                No pre-built full solutions are allowed.
                            </li>
                            <li className="flex items-start">
                                <span className="text-neon-blue mr-3 text-xl">✓</span>
                                All solutions must be built extensively within the 6-hour sprint window.
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
