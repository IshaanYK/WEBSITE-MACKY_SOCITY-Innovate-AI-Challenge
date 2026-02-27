import React from 'react';
import { Link } from 'react-scroll';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-black pt-16 pb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIvPjwvc3ZnPg==')] opacity-50 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-2">
                        <Link to="home" smooth={true} duration={500} className="cursor-pointer inline-block mb-6">
                            <span className="text-3xl font-bold tracking-tighter">
                                INNOVATE<span className="text-neon-blue">AI</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 max-w-md text-lg leading-relaxed mb-6">
                            Empowering the next generation of builders. A 6-hour sprint to push the boundaries of AI and innovation.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social Placeholders */}
                            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-neon-blue hover:border-neon-blue transition-colors text-gray-400">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-neon-purple hover:border-neon-purple transition-colors text-gray-400">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-neon-blue hover:border-neon-blue transition-colors text-gray-400">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><Link to="about" smooth={true} duration={500} className="hover:text-neon-blue cursor-pointer transition-colors">About sprint</Link></li>
                            <li><Link to="tracks" smooth={true} duration={500} className="hover:text-neon-purple cursor-pointer transition-colors">Challenge Tracks</Link></li>
                            <li><Link to="timeline" smooth={true} duration={500} className="hover:text-neon-blue cursor-pointer transition-colors">Schedule</Link></li>
                            <li><Link to="faq" smooth={true} duration={500} className="hover:text-neon-purple cursor-pointer transition-colors">FAQs</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-neon-blue" />
                                <span>contact@mackyssociety.org</span>
                            </li>
                            <li>
                                <div className="mt-4 p-4 glass rounded-xl border border-white/5">
                                    <p className="text-sm text-gray-300 font-medium">Organized By</p>
                                    <p className="text-lg font-bold text-white mt-1 uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">Macky's Society</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
                    <p>&copy; 2026 Macky's Society. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
