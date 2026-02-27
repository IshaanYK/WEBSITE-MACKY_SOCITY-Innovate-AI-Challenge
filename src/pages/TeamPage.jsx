import React from 'react';
import AnimatedText from '../components/AnimatedText';
import ProfileCard from '../components/ProfileCard';

const TeamPage = () => {
    const head = {
        name: "Head Name",
        role: "President, Macky's Society",
        socialLinks: { linkedin: "#", twitter: "#", github: "#" },
        isHead: true
    };

    // Generate 15 placeholder team members (mix of roles)
    const teamMembers = Array.from({ length: 15 }).map((_, i) => {
        let role = "Volunteer";
        if (i < 3) role = "Technical Lead";
        else if (i < 8) role = "Management";

        return {
            name: `Member ${i + 1}`,
            role: role,
            socialLinks: { linkedin: "#", github: "#" }
        };
    });

    return (
        <div className="pt-32 pb-24 min-h-screen">
            <div className="container mx-auto px-6 mb-20 text-center">
                <h1 className="text-5xl md:text-6xl font-black mb-6 flex flex-col md:flex-row justify-center items-center">
                    <AnimatedText text="Macky's Society" className="text-white md:mr-4" />
                    <AnimatedText text="Core Team" className="text-neon-blue mt-2 md:mt-0" delay={1.4} />
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-6">
                    The passionate individuals behind the Innovate AI Challenge.
                </p>
            </div>

            <div className="container mx-auto px-6">
                {/* Head of Society */}
                <div className="mb-24 flex justify-center">
                    <div className="w-full max-w-md">
                        <ProfileCard {...head} />
                    </div>
                </div>

                {/* Management, Technical, Volunteers */}
                <div>
                    <h2 className="text-3xl font-bold text-white mb-10 text-center uppercase tracking-wider border-b border-white/10 pb-4 inline-block w-full">
                        Management & <span className="text-neon-purple">Volunteers</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
                        {teamMembers.map((member, idx) => (
                            <ProfileCard key={idx} {...member} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamPage;
