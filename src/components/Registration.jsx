import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Registration = () => {
    const [formData, setFormData] = useState({
        teamName: '',
        members: '',
        email: '',
        contact: '',
        track: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder submission handler
        alert("Registration feature coming soon!");
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="register" className="py-24 bg-black/50 relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-gradient-to-tr from-neon-blue/10 to-neon-purple/10 blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Secure Your <span className="text-gradient">Spot</span>
                        </h2>
                        <p className="text-gray-400 text-lg">Register your team for the 6-hour sprint</p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass p-8 md:p-12 rounded-3xl border border-neon-blue/20 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-300 font-medium ml-1">Team Name</label>
                                    <input
                                        type="text"
                                        name="teamName"
                                        required
                                        onChange={handleChange}
                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors"
                                        placeholder="Enter team name"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm text-gray-300 font-medium ml-1">Team Members (Names)</label>
                                    <input
                                        type="text"
                                        name="members"
                                        required
                                        onChange={handleChange}
                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors"
                                        placeholder="E.g., John, Sarah, Mike"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-300 font-medium ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        onChange={handleChange}
                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-purple transition-colors"
                                        placeholder="contact@team.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm text-gray-300 font-medium ml-1">Contact Number</label>
                                    <input
                                        type="tel"
                                        name="contact"
                                        required
                                        onChange={handleChange}
                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-purple transition-colors"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-gray-300 font-medium ml-1">Select Track</label>
                                <select
                                    name="track"
                                    required
                                    onChange={handleChange}
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors appearance-none"
                                >
                                    <option value="" disabled selected className="bg-gray-900">Choose your challenge path...</option>
                                    <option value="ai-tool" className="bg-gray-900">Track 1: AI Tool Development</option>
                                    <option value="innovation" className="bg-gray-900">Track 2: Innovation Challenge</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="w-full mt-8 py-4 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold text-lg flex items-center justify-center space-x-2 hover:shadow-[0_0_25px_rgba(176,38,255,0.4)] transition-all transform hover:-translate-y-1"
                            >
                                <span>Submit Registration</span>
                                <Send className="w-5 h-5 ml-2" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Registration;
