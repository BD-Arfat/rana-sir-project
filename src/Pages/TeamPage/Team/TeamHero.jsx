import React from 'react';
import { motion } from 'motion/react';

const TeamHero = () => {
    return (
        <section
            className="relative min-h-[350px] md:min-h-[450px] flex items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=90&w=2000')",
            }}
        >
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-[#1B2B27]/50"></div>

            {/* Content */}
            <div className="relative z-10 text-center px-5">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white"
                >
                    Our Team<span className="text-[#C5F36B]">.</span>
                </motion.h1>
            </div>

            {/* Bottom Decoration */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#C5F36B]"></div>
        </section>
    );
};

export default TeamHero;