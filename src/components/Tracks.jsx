import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Lightbulb } from 'lucide-react';

const Tracks = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="tracks" className="py-24 relative">
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-neon-blue/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Challenge <span className="text-gradient">Tracks</span>
                    </h2>
                    <p className="text-gray-400 text-lg">Choose one of two separate paths to victory</p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto"
                >
                    {/* Track 1: AI Tool Development */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -10 }}
                        className="group glass p-10 rounded-3xl border border-neon-blue/20 hover:border-neon-blue/60 transition-all duration-300 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <div className="w-16 h-16 rounded-2xl bg-neon-blue/10 flex items-center justify-center mb-8 border border-neon-blue/30 group-hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all">
                            <Cpu className="text-neon-blue w-8 h-8" />
                        </div>

                        <h3 className="text-3xl font-bold text-white mb-2">Track 1</h3>
                        <h4 className="text-xl text-neon-blue font-medium mb-6">AI Tool Development</h4>

                        <ul className="space-y-4 text-gray-300">
                            <li className="flex items-start">
                                <span className="text-neon-blue mr-3 mt-1 text-sm">✦</span>
                                <p>Build an AI tool that <strong>does not already exist</strong>.</p>
                            </li>
                            <li className="flex items-start">
                                <span className="text-neon-blue mr-3 mt-1 text-sm">✦</span>
                                <p>If similar tools exist, your solution must significantly improve and go beyond existing versions.</p>
                            </li>
                            <li className="flex items-start">
                                <span className="text-neon-blue mr-3 mt-1 text-sm">✦</span>
                                <p>Focuses on pure innovation and novel applications of AI.</p>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Track 2: Innovation Challenge */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -10 }}
                        className="group glass p-10 rounded-3xl border border-neon-purple/20 hover:border-neon-purple/60 transition-all duration-300 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-bl from-neon-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <div className="w-16 h-16 rounded-2xl bg-neon-purple/10 flex items-center justify-center mb-8 border border-neon-purple/30 group-hover:shadow-[0_0_20px_rgba(176,38,255,0.4)] transition-all">
                            <Lightbulb className="text-neon-purple w-8 h-8" />
                        </div>

                        <h3 className="text-3xl font-bold text-white mb-2">Track 2</h3>
                        <h4 className="text-xl text-neon-purple font-medium mb-6">Innovation Challenge</h4>

                        <ul className="space-y-4 text-gray-300">
                            <li className="flex items-start">
                                <span className="text-neon-purple mr-3 mt-1 text-sm">✦</span>
                                <p>Open innovation across multiple domains including <strong>Cyber Tech, AI/ML, Software, and Market-fit tech products</strong>.</p>
                            </li>
                            <li className="flex items-start">
                                <span className="text-neon-purple mr-3 mt-1 text-sm">✦</span>
                                <p>Final product must be outstanding and market-ready.</p>
                            </li>
                            <li className="flex items-start">
                                <span className="text-neon-purple mr-3 mt-1 text-sm">✦</span>
                                <p>Requires a completely original concept.</p>
                            </li>
                        </ul>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Tracks;
