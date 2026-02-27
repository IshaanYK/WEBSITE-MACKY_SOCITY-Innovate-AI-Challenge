import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
    const schedule = [
        { time: "10:00 AM", event: "Reporting Time", desc: "Arrival, registration confirmation, and team setup." },
        { time: "12:00 PM", event: "Hackathon Starts", desc: "The sprint begins. Start building!" },
        { time: "6:00 PM", event: "Hackathon Ends", desc: "Stop coding. Final sumbissions collected." },
        { time: "6:00 - 6:30 PM", event: "Relaxation / Break", desc: "Cool down and grab some refreshments." },
        { time: "6:30 PM", event: "Prize Distribution", desc: "Results announcement and ceremony." },
    ];

    return (
        <section id="timeline" className="py-24 bg-black/40 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Event <span className="text-gradient">Timeline</span>
                    </h2>
                    <p className="text-gray-400 text-lg">Schedule for 22 March 2026</p>
                </div>

                <div className="max-w-3xl mx-auto relative">
                    {/* Vertical line connecting nodes */}
                    <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-neon-blue via-neon-purple to-neon-blue hidden md:block opacity-30 transform -translate-x-1/2"></div>

                    {/* Mobile line */}
                    <div className="absolute left-8 top-4 bottom-4 w-px bg-gradient-to-b from-neon-blue via-neon-purple to-neon-blue md:hidden opacity-30"></div>

                    <div className="space-y-12">
                        {schedule.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row items-center md:justify-between w-full
                  ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}
                `}
                            >
                                {/* Node */}
                                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-neon-blue transform md:-translate-x-1/2 translate-y-2 md:translate-y-0 shadow-[0_0_10px_#00f3ff] z-10 transition-all hover:scale-150 pl-0"></div>

                                {/* Content */}
                                <div className={`ml-20 md:ml-0 md:w-5/12 glass p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all text-left
                  ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}
                `}>
                                    <div className={`text-neon-blue font-mono font-semibold text-lg mb-2`}>{item.time}</div>
                                    <h3 className="text-xl font-bold text-white mb-2">{item.event}</h3>
                                    <p className="text-gray-400">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
