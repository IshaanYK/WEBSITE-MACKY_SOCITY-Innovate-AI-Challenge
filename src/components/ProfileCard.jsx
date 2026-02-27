import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Facebook } from 'lucide-react';

const ProfileCard = ({ name, role, photoSrc, socialLinks, isHead = false }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`glass rounded-3xl border ${isHead ? 'border-neon-blue/40 shadow-[0_0_20px_rgba(0,243,255,0.2)]' : 'border-white/10 hover:border-neon-purple/50'
                } flex flex-col items-center p-8 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group`}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

            <div className={`w-36 h-36 rounded-full mb-6 relative overflow-hidden border-2 ${isHead ? 'border-neon-blue' : 'border-neon-purple/50'} shadow-lg`}>
                {photoSrc ? (
                    <img src={photoSrc} alt={name} className="w-full h-full object-cover" />
                ) : (
                    <div className="w-full h-full bg-gray-800 animate-pulse flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-gray-800 to-gray-700"></div>
                    </div>
                )}
            </div>

            <h3 className={`text-2xl font-bold text-white mb-2 text-center ${isHead ? 'text-gradient' : ''}`}>{name}</h3>
            <p className={`text-sm font-semibold tracking-wider uppercase mb-6 text-center ${isHead ? 'text-neon-blue' : 'text-neon-purple'}`}>{role}</p>

            {socialLinks && (
                <div className="flex space-x-4 mt-auto">
                    {socialLinks.twitter && (
                        <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-blue transition-colors">
                            <Twitter className="w-5 h-5" />
                        </a>
                    )}
                    {socialLinks.linkedin && (
                        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-blue transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    )}
                    {socialLinks.github && (
                        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-purple transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                    )}
                    {socialLinks.facebook && (
                        <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-blue transition-colors">
                            <Facebook className="w-5 h-5" />
                        </a>
                    )}
                </div>
            )}
        </motion.div>
    );
};

export default ProfileCard;
