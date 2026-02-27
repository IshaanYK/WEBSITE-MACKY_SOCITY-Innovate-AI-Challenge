import React from 'react';
import { motion } from 'framer-motion';

const PeopleCard = ({ role, title }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center aspect-square md:aspect-auto md:h-64 hover:border-neon-purple/50 transition-colors"
    >
        <div className="w-24 h-24 rounded-full bg-gray-800 mb-4 animate-pulse flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-800 to-gray-700"></div>
        </div>
        <h3 className="text-xl font-bold text-gray-300">{title}</h3>
        <p className="text-neon-purple mt-1 text-sm font-medium tracking-wider uppercase">{role}</p>
    </motion.div>
);

const People = () => {
    return (
        <section id="people" className="py-24 bg-black/30 relative">
            <div className="container mx-auto px-6 relative z-10">

                {/* Judges Section */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Honorable <span className="text-gradient">Judges</span>
                        </h2>
                        <p className="text-gray-400 text-lg">Evaluating your innovations</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        <PeopleCard role="Judge 1" title="TBA" />
                        <PeopleCard role="Judge 2" title="TBA" />
                        <PeopleCard role="Judge 3" title="TBA" />
                        <PeopleCard role="Judge 4" title="TBA" />
                    </div>
                </div>

                {/* Guests Section */}
                <div>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Chief <span className="text-gradient">Guests</span>
                        </h2>
                        <p className="text-gray-400 text-lg">Special appearances</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                        <PeopleCard role="Chief Guest" title="To Be Announced" />
                        <PeopleCard role="Guest of Honor" title="To Be Announced" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default People;
