import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Users, Code, Gavel } from 'lucide-react';

const Rules = () => {
    const rules = [
        {
            icon: <Users className="w-8 h-8 text-neon-blue" />,
            title: "Team Based",
            desc: "Participation is in teams. Collaboration is key to winning."
        },
        {
            icon: <ShieldAlert className="w-8 h-8 text-red-400" />,
            title: "No Plagiarism",
            desc: "Zero tolerance for copied ideas. Everything must be original."
        },
        {
            icon: <Code className="w-8 h-8 text-neon-purple" />,
            title: "Live Development",
            desc: "No pre-built solutions. All development happens during the 6-hour window."
        },
        {
            icon: <Gavel className="w-8 h-8 text-amber-400" />,
            title: "Final Decisions",
            desc: "Judges' decisions will be final and binding for all participants."
        }
    ];

    return (
        <section id="rules" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Rules & <span className="text-gradient">Guidelines</span>
                    </h2>
                    <p className="text-gray-400 text-lg">Strict policies to ensure fair competition</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {rules.map((rule, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass p-8 rounded-2xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 border border-white/5 hover:border-neon-blue/30"
                        >
                            <div className="mb-6 p-4 rounded-full bg-white/5">
                                {rule.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{rule.title}</h3>
                            <p className="text-gray-400">{rule.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Rules;
