import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const generateSparkle = (color) => {
    return {
        id: String(Math.random()),
        createdAt: Date.now(),
        color: color,
        size: Math.random() * 10 + 10,
        style: {
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            zIndex: 2,
        },
    };
};

const Sparkle = ({ children, color = "#00f3ff" }) => {
    const [sparkles, setSparkles] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const newSparkle = generateSparkle(color);
            const now = Date.now();

            setSparkles((current) =>
                [...current, newSparkle].filter(sp => now - sp.createdAt < 750)
            );
        }, 450);

        return () => clearInterval(interval);
    }, [color]);

    return (
        <div className="relative inline-block">
            {sparkles.map(sp => (
                <motion.span
                    key={sp.id}
                    className="absolute block pointer-events-none"
                    style={sp.style}
                    initial={{ opacity: 0, scale: 0, rotate: 0 }}
                    animate={{ opacity: [0, 1, 0], scale: [0, 1, 0], rotate: 180 }}
                    transition={{ duration: 0.8, ease: "linear" }}
                >
                    <Star className="fill-current" style={{ color: sp.color, width: sp.size, height: sp.size }} />
                </motion.span>
            ))}
            <div className="relative z-10">{children}</div>
        </div>
    );
};

export default Sparkle;
