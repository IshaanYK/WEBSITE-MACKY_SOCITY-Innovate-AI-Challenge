import React from 'react';
import AnimatedText from '../components/AnimatedText';
import Registration from '../components/Registration';
import { Mail, MapPin } from 'lucide-react';

const ContactPage = () => {
    return (
        <div className="pt-32 pb-24 min-h-screen">
            <div className="container mx-auto px-6 mb-16 text-center">
                <h1 className="text-5xl md:text-6xl font-black mb-6 flex justify-center">
                    <AnimatedText text="Contact &" className="text-white mr-4" />
                    <AnimatedText text="Registration" className="text-neon-blue" delay={0.9} />
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-6">
                    Reach out for inquiries or secure your spot in the Hackathon.
                </p>
            </div>

            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">

                    {/* Organization Info */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="glass p-8 rounded-3xl border border-white/10">
                            <h3 className="text-2xl font-bold text-white mb-4">Event Host</h3>
                            <p className="text-neon-blue uppercase tracking-widest text-xl font-bold mb-2">Macky's Society</p>
                            <p className="text-gray-400 mb-6 font-medium">Empowering developers and builders.</p>

                            <div className="space-y-4">
                                <div className="flex items-center text-gray-300">
                                    <Mail className="w-5 h-5 mr-3 text-neon-purple" />
                                    <span>contact@mackyssociety.org</span>
                                </div>
                                <div className="flex items-center text-gray-300">
                                    <MapPin className="w-5 h-5 mr-3 text-neon-blue" />
                                    <span>Venue to be announced</span>
                                </div>
                            </div>
                        </div>

                        <div className="glass p-8 rounded-3xl border border-neon-purple/30 bg-neon-purple/5 shadow-[0_0_20px_rgba(176,38,255,0.1)]">
                            <h3 className="text-xl font-bold text-white mb-2">Supported By</h3>
                            <p className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple uppercase tracking-widest text-2xl font-black mb-2">Macky Tech</p>
                            <p className="text-gray-400 text-sm">Supporting the Innovate AI Challenge.</p>
                        </div>
                    </div>

                    {/* Registration Form (re-using the component) */}
                    <div className="lg:col-span-2">
                        <div className="bg-black/40 rounded-3xl border border-white/5 overflow-hidden">
                            {/* We render standard Registration form but strip its outer padding by wrapping it */}
                            <div className="-mt-16">
                                <Registration />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactPage;
