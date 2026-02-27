import React from 'react';
import AnimatedText from '../components/AnimatedText';
import ProfileCard from '../components/ProfileCard';

const GuestsPage = () => {
    const chiefGuests = [
        { name: "Firstname Lastname", role: "Founder, Macky Tech", socialLinks: { linkedin: "#", twitter: "#" } },
        { name: "To Be Announced", role: "Chief Guest", socialLinks: {} },
        { name: "To Be Announced", role: "Guest of Honor", socialLinks: {} },
    ];

    const judges = [
        { name: "TBA", role: "Judge", socialLinks: {} },
        { name: "TBA", role: "Judge", socialLinks: {} },
        { name: "TBA", role: "Judge", socialLinks: {} },
        { name: "TBA", role: "Judge", socialLinks: {} },
    ];

    return (
        <div className="pt-32 pb-24 min-h-screen">
            <div className="container mx-auto px-6 mb-20 text-center">
                <h1 className="text-5xl md:text-6xl font-black mb-6 flex flex-col md:flex-row justify-center items-center">
                    <AnimatedText text="Chief Guests &" className="text-white md:mr-4" />
                    <AnimatedText text="Judges" className="text-neon-purple mt-2 md:mt-0" delay={1.4} />
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-6">
                    Meet the esteemed individuals joining us to evaluate and celebrate innovation.
                </p>
            </div>

            <div className="container mx-auto px-6">
                {/* Chief Guests Section */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold text-white mb-10 text-center uppercase tracking-wider border-b border-white/10 pb-4 inline-block w-full">
                        Chief <span className="text-neon-blue">Guests</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {chiefGuests.map((guest, idx) => (
                            <ProfileCard key={idx} {...guest} />
                        ))}
                    </div>
                </div>

                {/* Judges Section */}
                <div>
                    <h2 className="text-3xl font-bold text-white mb-10 text-center uppercase tracking-wider border-b border-white/10 pb-4 inline-block w-full">
                        Honorable <span className="text-neon-purple">Judges</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {judges.map((judge, idx) => (
                            <ProfileCard key={idx} {...judge} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuestsPage;
