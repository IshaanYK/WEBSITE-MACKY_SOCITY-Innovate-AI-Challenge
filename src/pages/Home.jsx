import React from 'react';
import Hero from '../components/Hero';
import Tracks from '../components/Tracks';
import Timeline from '../components/Timeline';
import PrizesFAQ from '../components/PrizesFAQ';
import Registration from '../components/Registration';

const Home = () => {
    return (
        <div className="pt-20">
            <Hero />
            <Tracks />
            <Timeline />
            <PrizesFAQ />
            <Registration />
        </div>
    );
};

export default Home;
