import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin } from 'lucide-react';
import AnimatedText from './AnimatedText';
import Sparkle from './Sparkle';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-neon-purple/20 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPjwvc3ZnPg==')] opacity-50" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block px-6 py-2 rounded-full glass mb-6 border-neon-blue/30"
                >
                    <span className="text-neon-blue text-sm font-semibold tracking-wider uppercase block sm:inline">Organized by <span className="text-white">Macky's Society</span></span>
                    <span className="hidden sm:inline mx-2 text-gray-500">|</span>
                    <span className="text-neon-purple text-sm font-semibold tracking-wider uppercase block sm:inline mt-1 sm:mt-0">Supported by <span className="text-white">Macky Tech</span></span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-tight flex flex-col items-center">
                    <div className="flex items-center flex-wrap justify-center">
                        <Sparkle color="#00f3ff">
                            <AnimatedText text="INNOVATE" className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" delay={0.2} />
                        </Sparkle>
                        <AnimatedText text="AI" className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple px-2 ml-2 md:ml-4" delay={1.0} />
                    </div>
                    <div className="flex items-center flex-wrap justify-center mt-2 md:mt-4">
                        <AnimatedText text="CHALLENGE" className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple px-2" delay={1.5} />
                        <motion.span
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 2.5, type: "spring", stiffness: 200 }}
                            className="text-3xl md:text-5xl text-gray-400 ml-4 font-normal"
                        >
                            2026
                        </motion.span>
                    </div>
                </h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 2.8 }}
                    className="text-xl md:text-2xl text-gray-300 font-light mb-10 max-w-2xl"
                >
                    Where AI Meets Innovation. A 6-hour sprint to build groundbreaking, market-ready solutions.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 3.2 }}
                    className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mb-12"
                >
                    <Link
                        to="/contact"
                        className="px-8 py-4 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold text-lg cursor-pointer hover:shadow-[0_0_30px_rgba(0,243,255,0.4)] transition-all transform hover:-translate-y-1 w-full md:w-auto text-center"
                    >
                        Register Now
                    </Link>
                    <Link
                        to="/about"
                        className="px-8 py-4 rounded-full glass border border-gray-600 hover:border-neon-blue text-white font-bold text-lg cursor-pointer transition-all w-full md:w-auto text-center"
                    >
                        Read Guidelines
                    </Link>
                </motion.div>

                {/* Event Details */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 3.6 }}
                    className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl space-y-6 md:space-y-0 md:space-x-12 glass px-8 py-6 rounded-2xl"
                >
                    <div className="flex items-center space-x-3 text-gray-300 w-full md:w-1/3 justify-center md:justify-start">
                        <Calendar className="text-neon-purple flex-shrink-0" />
                        <div className="text-left">
                            <p className="text-xs text-gray-500 uppercase tracking-wider">Date</p>
                            <p className="font-medium whitespace-nowrap">22 March 2026</p>
                        </div>
                    </div>
                    <div className="hidden md:block w-px h-10 bg-gray-700"></div>
                    <div className="flex items-center space-x-3 text-gray-300 w-full md:w-1/3 justify-center md:justify-center">
                        <Clock className="text-neon-blue flex-shrink-0" />
                        <div className="text-left">
                            <p className="text-xs text-gray-500 uppercase tracking-wider">Time</p>
                            <p className="font-medium whitespace-nowrap">12:00 PM – 6:00 PM</p>
                        </div>
                    </div>
                    <div className="hidden md:block w-px h-10 bg-gray-700"></div>
                    <div className="flex items-center space-x-3 text-gray-300 w-full md:w-1/3 justify-center md:justify-end">
                        <MapPin className="text-neon-purple flex-shrink-0" />
                        <div className="text-left">
                            <p className="text-xs text-gray-500 uppercase tracking-wider">Reporting</p>
                            <p className="font-medium whitespace-nowrap">10:00 AM</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
