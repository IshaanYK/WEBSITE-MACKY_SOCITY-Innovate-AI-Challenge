import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({ text, className, delay = 0 }) => {
    // Split text into words and then characters to maintain word structure for wrapping
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: delay * 0.1 },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            scale: 0.9,
        },
    };

    return (
        <motion.div
            className={`flex flex-wrap ${className}`}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {words.map((word, index) => (
                <span key={index} className="inline-block whitespace-nowrap mr-2 lg:mr-3 last:mr-0">
                    {Array.from(word).map((letter, letterIndex) => (
                        <motion.span
                            key={letterIndex}
                            variants={child}
                            className="inline-block hover:text-neon-blue transition-colors duration-300 hover:scale-125 transform"
                        >
                            {letter}
                        </motion.span>
                    ))}
                </span>
            ))}
        </motion.div>
    );
};

export default AnimatedText;
