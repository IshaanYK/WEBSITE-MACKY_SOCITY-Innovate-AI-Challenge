import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, ChevronDown, ChevronUp } from 'lucide-react';

const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border hover:border-neon-blue/40 border-white/10 rounded-xl overflow-hidden glass transition-colors">
            <button
                className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-medium text-lg text-white">{question}</span>
                {isOpen ? <ChevronUp className="text-neon-blue ml-4 flex-shrink-0" /> : <ChevronDown className="text-neon-blue ml-4 flex-shrink-0" />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-6 pb-4 text-gray-400">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const PrizesFAQ = () => {
    const faqs = [
        {
            q: "Can we use APIs?",
            a: "Yes, standard APIs are allowed as long as your solution is original and not a simple wrapper. The core AI execution or the integration logic must be built by you."
        },
        {
            q: "Can we work solo?",
            a: "While team-based participation is recommended to manage the workload within the 6-hour limit, solo participants are allowed if they are up for the challenge."
        },
        {
            q: "What happens if our idea exists?",
            a: "If an idea exists, your solution must significantly improve upon it. Direct copies or clones without considerable innovation will be disqualified."
        },
        {
            q: "Is prior registration required?",
            a: "Yes, you must register your team prior to the reporting time. On-the-spot registrations depend solely on capacity and are not guaranteed."
        }
    ];

    return (
        <section id="faq" className="py-24 relative overflow-hidden">
            {/* Background blur */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16">

                    {/* Prizes Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Grand <span className="text-gradient">Prizes</span>
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-md">
                            Exciting prizes and recognition for the winners of both tracks.
                        </p>

                        <div className="glass p-8 rounded-3xl border border-yellow-500/30 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 opacity-50 group-hover:opacity-100 transition-opacity"></div>

                            <div className="flex items-center space-x-6 relative z-10">
                                <div className="w-20 h-20 rounded-2xl bg-yellow-500/20 flex items-center justify-center border border-yellow-500/50 shadow-[0_0_20px_rgba(234,179,8,0.3)]">
                                    <Trophy className="w-10 h-10 text-yellow-400" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1">Prize Pool</h3>
                                    <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600">
                                        ₹ TBA
                                    </div>
                                    <p className="text-sm text-gray-400 mt-2">Plus certificates & networking opportunities</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* FAQ Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">
                            Frequently Asked <span className="text-neon-blue">Questions</span>
                        </h2>
                        <div className="space-y-4">
                            {faqs.map((faq, idx) => (
                                <FaqItem key={idx} question={faq.q} answer={faq.a} />
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default PrizesFAQ;
